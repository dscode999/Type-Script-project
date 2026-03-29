import cloudinary from "../config/cloudinary.js";
export async function uploadToCloudinary(buffer, folder = "movies") {
    return new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream({ folder, resource_type: "image" }, (error, result) => {
            if (error)
                return reject(error);
            if (!result)
                return reject(new Error("Cloudinary upload returned no result"));
            resolve(result);
        })
            .end(buffer);
    });
}
export async function deleteFromCloudinary(publicId) {
    return cloudinary.uploader.destroy(publicId, { resource_type: "image" });
}
//# sourceMappingURL=cloudinary.service.js.map