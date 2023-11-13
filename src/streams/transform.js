import { openStdin, stdout } from "process";
import { Transform } from "stream";

class ReverseStream extends Transform {
  _transform(chunk, encoding, cb) {
    const result = `${chunk.toString("utf8")}`.split("").reverse().join("");
    try {
      cb(null, result);
    } catch (e) {
      cb(e);
    }
  }
}

const transform = async () => {
  const transform = new ReverseStream();
  const stdin = openStdin();

  stdin.pipe(transform).pipe(stdout);
};

await transform();
