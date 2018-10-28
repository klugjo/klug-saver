## Deploy the service

- Dev:

```
serverless deploy
```

- Prod:

```
serverless deploy --s prod
```

Current endpoint:

  POST - https://zue5intaae.execute-api.ap-southeast-1.amazonaws.com/prod/expense
  GET - https://zue5intaae.execute-api.ap-southeast-1.amazonaws.com/prod/expense
  DELETE - https://zue5intaae.execute-api.ap-southeast-1.amazonaws.com/prod/expense/{id}