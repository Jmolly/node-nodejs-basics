import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { createGzip } from "node:zlib";

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream("./src/zip/files/fileToCompress.txt");
  const destination = createWriteStream("./src/zip/files/archive.gz");

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("FS operation failed");
      process.exitCode = 1;
    }
  });
};

await compress();
