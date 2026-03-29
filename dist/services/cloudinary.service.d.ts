export declare function uploadToCloudinary(buffer: Buffer, folder?: string): Promise<{
    secure_url: string;
    public_id: string;
}>;
export declare function deleteFromCloudinary(publicId: string): Promise<unknown>;
//# sourceMappingURL=cloudinary.service.d.ts.map