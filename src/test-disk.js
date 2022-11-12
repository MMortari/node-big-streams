import events from "events";
import fs from "fs";
import readline from "readline";

(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream("src/data/file.csv"),
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      console.log(`Line from file: ${line}`);
    });

    await events.once(rl, "close");

    console.log("Reading file line by line with read`line done.");
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(
      `The script uses approximately ${Math.round(used * 100) / 100} MB`
    );
  } catch (err) {
    console.error(err);
  }
})();
