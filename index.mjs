'use strict';
import fs from 'fs';
import { statement, htmlStatement } from './statement';

const invoices = JSON.parse(fs.readFileSync('./invoices.json'));
const plays = JSON.parse(fs.readFileSync('./plays.json'));

const testValue = statement(invoices[0], plays);
const expectedValue = `Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $475.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,625.00\nYou earned 47 credits\n`;

logTest(expectedValue, testValue);

const testHTMLValue = htmlStatement(invoices[0], plays);
const expectedHTMLValue = `\
<h1>Statement for BigCo</h1>
<table>
  <tr>
    <th>play</th>
    <th>seats</th>
    <th>cost</th>
  </tr>
  <tr>
    <td>Hamlet</td>
    <td>55</td>
    <td>$650.00</td>
  </td>
  <tr>
    <td>As You Like It</td>
    <td>35</td>
    <td>$475.00</td>
  </td>
  <tr>
    <td>Othello</td>
    <td>40</td>
    <td>$500.00</td>
  </td>
</table>
<p>Amount owed is <em>$1,625.00</em></p>
<p>You earned <em>47</em> credits</p>`;

logTest(expectedHTMLValue, testHTMLValue);

function logTest(expectedValue, testValue) {
  const FgGreen = '\x1b[32m';
  const FgRed = '\x1b[31m';
  const Reset = '\x1b[0m'
  const passColor = FgGreen + '%s' + Reset;
  const failColor = FgRed + '%s' + Reset;

  console.log('-----------------------------------');
  (expectedValue === testValue) ? console.log(passColor, 'TEST PASS') : console.log(failColor, 'TEST FAIL');
  console.log(testValue);
}