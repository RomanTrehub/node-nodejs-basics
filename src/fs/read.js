import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILEPATH = `${__dirname}/files/fileToRead.txt`;

const read = async () => {
  try {
    const file = await readFile(FILEPATH, { encoding: "utf-8" });
    console.log(file);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
