FROM node:22

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

CMD ["npm", "start"]