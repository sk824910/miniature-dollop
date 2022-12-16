# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN ls;cd apps/nest-backend;npm install --production; npm run start:prod
CMD ["node", "src/index.js"]
EXPOSE 3000