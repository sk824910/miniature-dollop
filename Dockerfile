#stage 1
FROM node:lts-alpine as node
COPY dist/apps/minidollop-ui/ .
RUN npm -v; ls
RUN ls
# RUN npm install; ls; npm i nx;npm i @nrwl/cli; npm run build:minidollop 
# RUN npm run build:minidollop 
#stage 2
FROM nginx:latest
COPY --from=node . /usr/share/nginx/html