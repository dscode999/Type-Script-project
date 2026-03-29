export function validateRequest(schema, property) {
    return async (req, res, next) => {
        try {
            const validated = await schema.validateAsync(req[property], {
                abortEarly: false,
                stripUnknown: true,
            });
            req[property] = validated;
            next();
        }
        catch (error) {
            const err = error;
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
//# sourceMappingURL=validateRequest.js.map