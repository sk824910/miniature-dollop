# syntax=docker/dockerfile:1
FROM node:18-alpine
# WORKDIR /app
# COPY . .
# RUN yarn install --production
# CMD ["node", "src/index.js"]
# EXPOSE 3000

# RUN mkdir -p /usr/src/app/

# Install app dependencies
# COPY package.json /usr/src/app/
RUN npm install

# # Bundle app source
# COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "run", "start" ]