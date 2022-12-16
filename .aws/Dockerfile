# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN ls;cd apps/nest-backend; npm install; npm run build; npm run start:prod
EXPOSE 3000