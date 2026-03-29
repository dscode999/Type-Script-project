import { User } from "../models/User.js";
const getUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: 200,
            message: "Users fetched successfully",
            data: users,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            status: 400,
            message: err.message || String(error),
            data: null,
        });
    }
};
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id });
        if (!user) {
            res.status(400).json({
                status: 400,
                message: "User not found",
                data: null,
            });
            return;
        }
        res.status(200).json({
            status: 200,
            message: "User fetched successfully",
            data: user,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            status: 400,
            message: err.message || String(error),
            data: null,
        });
    }
};
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            status: 200,
            message: `The user with id: ${id} updated successfuly.`,
            data: null,
        });
    }
    catch {
        res.status(500).json({
            status: 500,
            message: "Error updating user",
            data: null,
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 200,
            message: `User with id: ${req.params.id} deleted successfully`,
            data: null,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Failed deleting user",
            data: null,
        });
    }
};
export { getUsers, getUserById, updateUser, deleteUser };
//# sourceMappingURL=users.controller.js.map