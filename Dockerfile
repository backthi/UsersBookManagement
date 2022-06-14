FROM node

WORKDIR /service

COPY package*.json /service/
RUN npm install

COPY . /service/

EXPOSE 8081
CMD [ "npm", "start"]