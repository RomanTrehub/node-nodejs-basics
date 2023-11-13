import { stdout } from "node:process";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = `${__dirname}/files/fileToRead.txt`;

const read = async () => {
  const fileStream = createReadStream(FILE_PATH);

  fileStream.pipe(stdout);
};

await read();
