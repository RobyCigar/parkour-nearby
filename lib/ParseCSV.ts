import csv from "csv-parser";
import fs from "fs";
import path from "path";

// get the path of the data
const dataPath = path.join(process.cwd(), "data/spot.csv");

export function getData() {
      const results: any = [];
      return new Promise((resolve, reject) => {
            fs.createReadStream(dataPath)
                  .pipe(csv({ separator: ";" }))
                  .on("data", (data) => {
                        return results.push(data);
                  })
                  .on("end", () => {
                        resolve(results);
                  });
      });
}
