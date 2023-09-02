FROM node:18

WORKDIR /app

COPY . .

RUN npm install

COPY . .

EXPOSE 3020

CMD ["npm", "start"]
