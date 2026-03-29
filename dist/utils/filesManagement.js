import fs from "fs/promises";
async function readJsonFile(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf8");
        return JSON.parse(data);
    }
    catch {
        return [];
    }
}
async function writeJsonFile(filePath, data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data));
    }
    catch (error) {
        console.log(error);
    }
}
export { readJsonFile, writeJsonFile };
//# sourceMappingURL=filesManagement.js.map