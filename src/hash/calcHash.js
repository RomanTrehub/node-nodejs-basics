import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = `${__dirname}/files/fileToCalculateHashFor.txt`;

const calculateHash = async () => {
  const hash = createHash("sha256");
  hash.setEncoding("hex");
  const fileStream = createReadStream(FILE_PATH);

  fileStream.on("end", () => {
    hash.end();
    console.log(hash.read());
  });

  fileStream.pipe(hash);
};

await calculateHash();
