'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  const amount = parseFloat(data.amount);
  if (isNaN(amount)) {
    console.error('Cannot parse the amount');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the expense item. Amount not a valid number.',
    });
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE_EXPENSE,
    Item: {
      id: uuid.v1(),
      amount: amount,
      description: data.description || 'None',
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  // write the expense to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the expense item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
