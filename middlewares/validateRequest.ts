import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

type Property = "body" | "query" | "params";

export function validateRequest(schema: ObjectSchema, property: Property) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> => {
    try {
      const validated = await schema.validateAsync(req[property], {
        abortEarly: false,
        stripUnknown: true,
      });
      req[property] = validated;
      next();
    } catch (error) {
      const err = error as {
        details?: Array<{ path: string[]; message: string }>;
      };
      if (err.details) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: err.details.map((d) => ({
            field: d.path.join("."),
            message: d.message,
          })),
        });
        return;
      }
      next(error);
    }
  };
}
