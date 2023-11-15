import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { promisify } from "node:util";
import { rm } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILES_PATH = `${__dirname}/files`;
const INPUT_PATH = `${FILES_PATH}/archive.gz`;
const OUTPUT_PATH = `${FILES_PATH}/fileToCompress.txt`;

const pipe = promisify(pipeline);

const decompress = async () => {
  const readStream = createReadStream(INPUT_PATH);
  const writeStream = createWriteStream(OUTPUT_PATH);
  const deCompressor = createGunzip();

  try {
    await pipe(readStream, deCompressor, writeStream);
    await rm(INPUT_PATH);
  } catch (e) {
    console.log(e);
  }
};

await decompress();
