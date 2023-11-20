import { openStdin, stdout } from "process";
import { EOL } from "os";
import { Transform } from "stream";

class ReverseStream extends Transform {
  _transform(chunk, _, cb) {
    const result = `${chunk.toString("utf8")}`.split("").reverse().join("");
    try {
      cb(null, `${result} ${EOL}`);
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
