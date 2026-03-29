import express from "express";
import { updateUser, deleteUser, getUserById, getUsers, } from "../controllers/users.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { checkPermissions } from "../middlewares/checkPermissions.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { getUserByIdParamsSchema, updateUserBodySchema, } from "../validation/user.schemas.js";
const router = express.Router();
router.get("/", getUsers);
router.get("/:id", validateRequest(getUserByIdParamsSchema, "params"), authMiddleware, getUserById);
router.patch("/:id", validateRequest(getUserByIdParamsSchema, "params"), validateRequest(updateUserBodySchema, "body"), authMiddleware, checkPermissions, updateUser);
router.delete("/:id", validateRequest(getUserByIdParamsSchema, "params"), authMiddleware, checkPermissions, deleteUser);
export default router;
//# sourceMappingURL=users.route.js.map