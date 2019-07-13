'use strict';
import fs from 'fs';
import statement from './statement';

const invoices = JSON.parse(fs.readFileSync('./invoices.json'));
const plays = JSON.parse(fs.readFileSync('./plays.json'));

const testValue = statement(invoices[0], plays);
const expectedValue = `Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $475.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,625.00\nYou earned 47 credits\n`;

console.log(testValue);

const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';

(expectedValue === testValue) ? console.log(FgGreen, 'TEST PASS') : console.log(FgRed, 'TEST FAIL');