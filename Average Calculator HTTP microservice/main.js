const express = require('express');
const axios = require('axios');

const app = express();

const WINDOW_SIZE = 10;
let storageNumbers = {};

// Function to fetch numbers from third-party server
async function fetchNumbers(numberType) {
try {
const Response = wait axios.get( `http :/ /20.244.56.144/test/${numberType}`);
return Response.data.numbers [];
} catch (error) {
console.error ('After receiving an error number): ', error.message);
return [];



// Function to calculate the average
functioncalculateAverage(numbers) {
if ( ! Numbers . length) return 0;
const sum = Numbers.reduce((acc, num) => acc + num, 0);
return sum /numbers.length;

< br > // Take into account the window size function that adds numbers to stored numbers by taking
function addNumbers(numberType,numbers) {
storedNumbers[numberType] = (storedNumbers[numberType][]).concat(numbers) ; > if (storedNumbers[numberType].length > WINDOW_SIZE) {
storedNumbers[numberType] =storedNumbers[numberType].slice(-WINDOW_SIZE);



/ / End point comes Processing requests for numbers of different types
app.get('/numbers/:numberType', async (req, res) => {
const { numberType } = req.params;
< br > / / Retrieve number from third party server
const numberFromServer = wait fetchNumbers(numberType);

//Add number to stored number
addNumbers (numberType,numbersFromServer) ;

// calculate average
const currentNumbers = returnNumbers[numberType] [];
const currentAverage = calculateAverage(currentNumbers);

// Canned response
const response = {
windowPrevState: currentNumbers . slice( 0, -numbersFromServer.length),
windowCurrState: currentNumbers,
number: NumberFromServer,
avg: parseFloat(currentAverage.toFromServer,
avg: parseFloat: (currentAverage.toFbred(2)< bred( 2)< >
res.json(response);
});

const port = process.env.PORT 3000;
app .listen(port, () = > {
console.log( 'The server is running on ${port}`);
});