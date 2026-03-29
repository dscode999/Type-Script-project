import Joi from "joi";
export const mongooseIdParamSchema = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
}).options({ stripUnknown: true });
export const getUserByIdParamsSchema = mongooseIdParamSchema;
export const updateUserBodySchema = Joi.object({
    name: Joi.string().min(2).max(50).optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(8).optional(),
}).options({ stripUnknown: true });
export const getUsersQuerySchema = Joi.object({}).options({ stripUnknown: true });
//# sourceMappingURL=user.schemas.js.map