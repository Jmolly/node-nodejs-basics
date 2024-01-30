import fs from "node:fs";

const write = async () => {
  const stream = fs.createWriteStream("./src/streams/files/fileToWrite.txt");

  process.stdin.pipe(stream);
};

await write();
