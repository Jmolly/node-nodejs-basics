import os from "os";

import { Worker } from "worker_threads";

const performCalculations = async () => {
  const cpuCores = os.cpus();

  cpuCores.forEach((_, index) => {
    const myWorker = new Worker("./src/wt/worker.js", {
      workerData: 10 + index,
    });

    myWorker.on("message", (result) => {
      console.log(result);
    });
  });
};

await performCalculations();
