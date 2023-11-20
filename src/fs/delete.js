import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rm } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILEPATH_TO_REMOVE = `${__dirname}/files/fileToRemove.txt`;

const remove = async () => {
  try {
    await rm(FILEPATH_TO_REMOVE);
  } catch {
    throw new Error("FS operation failed");
  }
};
await remove();
