import { argv } from "node:process";

const SEARCH_PREFIX = "RSS_";

const parseEnv = () => {
  let parsedString = "";

  argv.forEach((val, i) => {
    if (val.startsWith(SEARCH_PREFIX)) {
      parsedString += `; ${val}`;
    }
  });

  console.log(parsedString);
};

parseEnv();
