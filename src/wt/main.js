import os from "os";

import { Worker } from "worker_threads";

const createWorker = (index) => {
  return new Promise(function (resolve, reject) {
    const myWorker = new Worker("./src/wt/worker.js", {
      workerData: 10 + index,
    });

    myWorker.on("message", (data) => {
      resolve({ status: "resolved", data });
    });

    myWorker.on("error", () => {
      reject({ status: "error", data: null });
    });
  });
};

const performCalculations = async () => {
  const cpuCores = os.cpus();
  const promises = [];

  cpuCores.forEach((_, index) => {
    promises.push(createWorker(index));
  });

  Promise.all(promises)
    .then(function (data) {
      console.log(data, "data");
    })
    .catch(function (error) {
      console.log(error);
    });
};

await performCalculations();
