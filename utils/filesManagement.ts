import fs from "fs/promises";

async function readJsonFile(filePath: string): Promise<unknown[]> {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data) as unknown[];
  } catch {
    return [];
  }
}

async function writeJsonFile(filePath: string, data: unknown): Promise<void> {
  try {
    await fs.writeFile(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

export { readJsonFile, writeJsonFile };
