import { openStdin, stdin } from "node:process";
import { createWriteStream } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = `${__dirname}/files/fileToWrite.txt`;

const write = async () => {
  const input = openStdin();
  const writeStream = createWriteStream(FILE_PATH, { flags: "a+" });

  input.pipe(writeStream);
};

await write();
