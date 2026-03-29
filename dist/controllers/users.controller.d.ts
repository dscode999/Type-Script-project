import { Request, Response } from "express";
declare const getUsers: (_req: Request, res: Response) => Promise<void>;
declare const getUserById: (req: Request, res: Response) => Promise<void>;
declare const updateUser: (req: Request, res: Response) => Promise<void>;
declare const deleteUser: (req: Request, res: Response) => Promise<void>;
export { getUsers, getUserById, updateUser, deleteUser };
//# sourceMappingURL=users.controller.d.ts.map