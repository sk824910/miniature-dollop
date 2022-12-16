# # syntax=docker/dockerfile:1
# FROM node:18-alpine
# WORKDIR /app
# COPY . .
# RUN ls;cd apps/nest-backend; npm install; npm run build; npm run start:prod
# EXPOSE 3000


FROM node:18
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN ls;npm i; npx nx build nest-backend;
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npx","nx", "serve","nest-backend" ]
