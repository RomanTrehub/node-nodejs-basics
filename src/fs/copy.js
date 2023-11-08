import path from "node:path";
import { fileURLToPath } from "node:url";
import { copyFile, opendir, mkdir } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CURRENT_DIRECTORY_PATH = `${__dirname}/files`;
const NEW_DIRECTION_PATH = `${__dirname}/files_copy`;

const copy = async () => {
  try {
    await mkdir(NEW_DIRECTION_PATH);

    const dir = await opendir(CURRENT_DIRECTORY_PATH);
    for await (const { name, path } of dir) {
      await copyFile(`${path}/${name}`, `${NEW_DIRECTION_PATH}/${name}`);
    }
  } catch (e) {
    console.log("FS operation failed");
  }
};

await copy();
