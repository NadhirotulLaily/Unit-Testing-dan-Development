FROM alpine3.17

WORKDIR /apitodo/src/app

COPY . .

EXPOSE 8090

CMD["node", "app.js"]