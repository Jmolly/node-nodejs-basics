import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { createGunzip } from "node:zlib";

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream("./src/zip/files/archive.gz");
  const destination = createWriteStream("./src/zip/files/fileToCompress.txt");

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error("FS operation failed");
      process.exitCode = 1;
    }
  });
};

await decompress();
