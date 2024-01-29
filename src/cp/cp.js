import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", ["./src/cp/files/script.js", ...args], {
    stdio: ["pipe", "pipe", "ipc"],
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(["1", "3", "5"]);
