FROM node:8

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]