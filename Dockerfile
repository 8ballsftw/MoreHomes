FROM node:latest

RUN mkdir -p /src/homes

WORKDIR /src/homes

COPY . /src/homes

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]