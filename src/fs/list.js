import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { opendir } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIR_PATH = `${__dirname}/files`;

const list = async () => {
  try {
    const dir = await opendir(DIR_PATH);
    const fileNames = [];
    for await (const { name } of dir) {
      fileNames.push(name);
    }
    console.log(fileNames);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
