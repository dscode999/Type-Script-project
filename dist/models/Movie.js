import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: Number,
    genre: String,
    imageUrl: { type: String, default: null },
    imagePublicId: { type: String, default: null },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true //We need this for mongodb queries
    }
}, { timestamps: true });
export const Movie = mongoose.model("Movie", movieSchema);
//# sourceMappingURL=Movie.js.map