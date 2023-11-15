import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { promisify } from "node:util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILES_PATH = `${__dirname}/files`;
const INPUT_PATH = `${FILES_PATH}/fileToCompress.txt`;
const OUTPUT_PATH = `${FILES_PATH}/archive.gz`;

const pipe = promisify(pipeline);

const compress = async () => {
  const readStream = createReadStream(INPUT_PATH);
  const writeStream = createWriteStream(OUTPUT_PATH);
  const compressor = createGzip();

  try {
    await pipe(readStream, compressor, writeStream);
    await rm(INPUT_PATH);
  } catch (e) {
    console.log(e);
  }
};

await compress();
