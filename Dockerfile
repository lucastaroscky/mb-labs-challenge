FROM node:alpine

WORKDIR /home/app

COPY package.json ./home/app

RUN npm install

COPY . /home/app

EXPOSE 8080

CMD npm run start:dev
