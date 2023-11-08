import path from "node:path";
import { fileURLToPath } from "node:url";
import { appendFile, stat } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_NAME = "fresh.txt";
const FILE_PATH = path.join(`${__dirname}/files`, FILE_NAME);

const create = async () => {
  try {
    const fileStat = await stat(FILE_PATH);
    if (fileStat) {
      throw new Error("Fs operation was failed: file already exists");
    }
  } catch (e) {
    if (e.code === "ENOENT") {
      try {
        await appendFile(FILE_PATH, "I am fresh and young");
      } catch {
        console.log(e);
      }
    } else {
      console.log(e);
    }
  }
};

await create();
