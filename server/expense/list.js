'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const getDefaultFromDate = () => {
  const currentDate = new Date();

  return new Date(currentDate.getFullYear(), currentDate.getMonth()).getTime();
};

module.exports.list = (event, context, callback) => {
  const from = (event.queryStringParameters || {}).from || getDefaultFromDate();
  
  const params = {
    TableName: process.env.DYNAMODB_TABLE_EXPENSE,
    FilterExpression: 'createdAt >= :from',
    ExpressionAttributeValues: {
      ':from': parseInt(from)
    }
  };

  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the expenses.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};
