#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:frontend --omit=dev
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/apps/minidollop-ui /usr/share/nginx/html