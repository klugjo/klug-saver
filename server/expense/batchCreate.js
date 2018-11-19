'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.batchCreate = (event, context, callback) => {
  const data = JSON.parse(event.body);

  data.forEach(d => {
    const params = {
      TableName: process.env.DYNAMODB_TABLE_EXPENSE,
      Item: {
        id: uuid.v1(),
        amount: parseFloat(d.amount),
        category: d.category,
        subCategory: d.subCategory,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt
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
  
      if (d.id === data[data.length - 1].id) {
        // create a response
        const response = {
          statusCode: 200,
          body: 'OK',
        };
        callback(null, response);
      }
    });
  });
};
