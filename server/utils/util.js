import { Parser } from "json2csv";
import fs from 'fs';

const downloadResource = (res, fileName, fields, data) => {
  const json2csv = new Parser({ fields });
  const csv = json2csv.parse(data);
  fs.writeFileSync('newfile.csv', csv, 'utf8', (err, data) => {
    console.log(err);
  });
  res.download('newfile.csv');
};

export { downloadResource };
