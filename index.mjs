'use strict';
import fs from 'fs';
import statement from './statement';

const invoices = JSON.parse(fs.readFileSync('./invoices.json'));
const plays = JSON.parse(fs.readFileSync('./plays.json'));

console.log(statement(invoices[0], plays));