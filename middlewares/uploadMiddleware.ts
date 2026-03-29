import { RequestHandler } from "express";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: (
    _req: Express.Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback,
  ) => {
    const allowedList = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    allowedList.includes(file.mimetype)
      ? cb(null, true)
      : cb(new Error("Unsupported mime type"));
  },
});

export const uploadSingle: RequestHandler = upload.single("image");
