import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({
            status: 401,
            message: "No token provided",
            data: null,
        });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.userId };
        next();
    }
    catch {
        return res.status(401).json({
            status: 401,
            message: "Token is invalid",
            data: null,
        });
    }
};
//# sourceMappingURL=authMiddleware.js.map