import { Document, Types } from "mongoose";

export interface IMovie extends Document {
  _id: Types.ObjectId;
  title: string;
  year?: number;
  genre?: string;
  imageUrl?: string | null;
  imagePublicId?: string | null;
  createdBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
