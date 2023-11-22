import { argv } from "node:process";

const SEARCH_PREFIX = "RSS_";

const parseEnv = () => {
  const args = argv.filter((arg) => arg.startsWith(SEARCH_PREFIX));
  console.log(args.join("; "));
};

parseEnv();
