import Joi from "joi";
export const registerSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
}).options({ stripUnknown: true });
export const verifySchema = Joi.object({
    email: Joi.string().email().required(),
    code: Joi.string().length(6).pattern(/^\d+$/).required(),
}).options({ stripUnknown: true });
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}).options({ stripUnknown: true });
//# sourceMappingURL=auth.schemas.js.map