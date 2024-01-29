import fs from "node:fs";

const read = async () => {
  const readableStream = fs.createReadStream(
    "./src/streams/files/fileToRead.txt"
  );

  readableStream.on("data", (chunk) => {
    console.log(chunk);
    process.stdout.write(chunk);
  });
};

await read();
