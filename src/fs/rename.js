import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rename as renamePath } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OLD_PATH = `${__dirname}/files/wrongFilename.txt`;
const NEW_PATH = `${__dirname}/files/properFilename.md`;

const rename = async () => {
  try {
    await renamePath(OLD_PATH, NEW_PATH);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
