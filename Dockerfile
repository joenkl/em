FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm run install-all

EXPOSE 3000 5000

