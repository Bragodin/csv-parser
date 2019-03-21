import { validator }  from './valid';
import { dataBase } from './dataBase';
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('data.csv')
  .pipe(csv({separator: ';'}))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(validator(results));
    dataBase(results);
  });