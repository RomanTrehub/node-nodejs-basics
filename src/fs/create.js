import path from "node:path";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_NAME = "fresh.txt";
const FILE_PATH = path.join(`${__dirname}/files`, FILE_NAME);

const create = async () => {
  try {
    await writeFile(FILE_PATH, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
