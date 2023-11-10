import { argv } from "node:process";

const mapToStringConcat = (map) => {
  let string = "";

  map.forEach((val, key) => {
    string += `${key} is ${val}, `;
  });

  return string;
};

const parseArgs = () => {
  const parsedValues = new Map();

  argv.forEach((val, i) => {
    if (val.startsWith("--")) {
      const key = val.slice(2);
      if (argv[i + 1].startsWith("--")) {
        parsedValues.set(key, null);
      } else {
        parsedValues.set(key, argv[i + 1]);
      }
    }
  });

  console.log(mapToStringConcat(parsedValues));
};

parseArgs();
