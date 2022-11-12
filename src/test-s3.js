import aws from "aws-sdk";
import { createWriteStream } from "fs";
import readline from "readline";

const s3 = new aws.S3({ apiVersion: "2006-03-01" });

import { log } from "./log.js";

const bucket = `prud-teste-bucket-apagar`;
const file = `file.csv`;

const params = {
  Bucket: bucket,
  Key: file,
};
const s3ReadStream = s3.getObject(params).createReadStream();

const rl = readline.createInterface({
  input: s3ReadStream,
  terminal: false,
});

let lines = 1;

const write_stream = createWriteStream("src/data/writen.json");

write_stream.write("[");

try {
  await new Promise((resolve, reject) => {
    rl.on("line", (line) => {
      // console.log(`Line from file: ${line}`);
      log(`${lines} lines readed`);

      write_stream.write(lineProcess(line));

      lines++;
    });
    rl.on("error", (err) => {
      console.log();
      reject(err);
    });
    rl.on("close", function () {
      write_stream.write("]");
      console.log();

      const used = process.memoryUsage().heapUsed / 1024 / 1024;
      console.log(
        `The script uses approximately ${Math.round(used * 100) / 100} MB`
      );

      resolve();
    });
  });

  console.log("done reading!");
} catch (err) {
  console.log("an error has occurred");
}

function lineProcess(line) {
  const [id, name, email, username, phone] = line.split(",");

  return JSON.stringify({ id, name, email, username, phone }) + ",\n";
}
