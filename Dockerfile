FROM node:lts
WORKDIR /app
COPY package*.json ./
COPY app.js ./
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]