FROM node:8-alpine

EXPOSE 3000

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app
WORKDIR /app
ADD package.json /app
RUN pwd
RUN npm i
ADD . /app
RUN pwd
RUN ls -a

CMD ["npm", "run", "docker:start"]
