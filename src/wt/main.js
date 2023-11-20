import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { availableParallelism } from "node:os";
import { Worker } from "node:worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WORKER_PATH = `${__dirname}/worker`;
const INITIAL_NUMBER = 10;

const createWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(WORKER_PATH, { workerData });
    worker.on("message", (data) => resolve({ status: "resolved", data }));
    worker.on("error", () => resolve({ status: "error", data: null }));
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Error stopped with code ${code}`));
      }
    });
  });
};

const performCalculations = async () => {
  const workersList = Array.from({ length: availableParallelism() }, (_, i) =>
    createWorker(INITIAL_NUMBER + i)
  );
  try {
    const result = await Promise.all(workersList);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

await performCalculations();
