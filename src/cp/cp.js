import { fork } from "node:child_process";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SCRIPT_PATH = `${__dirname}/files/script`;

const spawnChildProcess = async (...args) => {
  fork(SCRIPT_PATH, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess("123", 12, 1222);
