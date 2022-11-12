import { createWriteStream } from "fs";
import { randUser } from "@ngneat/falso";
import { log } from "./log.js";

const file = createWriteStream("src/data/file.csv");

file.write(`id,name,email,username,phone\n`);

for (let index = 0; index < 1000000; index++) {
  const { id, firstName, email, phone } = randUser();

  file.write(`${id},${firstName},${email},${phone}\n`);

  log(`${index + 1} items created`);
}
