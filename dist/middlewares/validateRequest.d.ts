import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
type Property = "body" | "query" | "params";
export declare function validateRequest(schema: ObjectSchema, property: Property): (req: Request, res: Response, next: NextFunction) => Promise<void | Response>;
export {};
//# sourceMappingURL=validateRequest.d.ts.map