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
                        // split string from "1.43524xx, 32.5435234" to array
                        // Note: capital P is only from csv file 
                        let position: Array<string> = data.Position.split(",")
                        // convert string to float
                        let latitude: number = parseFloat(position[0])
                        let longitude: number = parseFloat(position[1])
                        // add latitude and longitude to data
                        data = { ...data, Position: undefined, latitude: latitude, longitude: longitude}
                        return results.push(data);
                  })
                  .on("end", () => {
                        resolve(results);
                  });
      });
}
