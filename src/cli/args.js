import { argv } from "node:process";

const parseArgs = () => {
  const convertedValuesArr = [];

  argv.forEach((val, i) => {
    if (val.startsWith("--")) {
      const key = val.slice(2);
      if (argv[i + 1].startsWith("--")) {
        convertedValuesArr.push(`${key} is null`);
      } else {
        convertedValuesArr.push(`${key} is ${argv[i + 1]}`);
      }
    }
  });

  console.log(convertedValuesArr.join(", "));
};

parseArgs();
