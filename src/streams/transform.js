import { Transform } from "node:stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _, callback) {
      const transformedChunk = chunk.toString().split("").reverse().join("");

      callback(null, transformedChunk);
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
