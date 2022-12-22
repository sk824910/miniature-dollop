# FROM node:alpine as builder
# WORKDIR /app
# COPY ./dist/apps/frontend .




# ENV PORT=3333
# EXPOSE ${PORT}
# RUN npm install 
# dependencies that nestjs needs



# RUN npm install reflect-metadata tslib rxjs
# CMD node ./main.js


# FROM nginx:alpine
# COPY ./apps/frontend/nginx.conf /etc/nginx/nginx.conf

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# # Copy from the stahg 1
# COPY --from=builder /app /usr/share/nginx/html

# EXPOSE 4210 81

# ENTRYPOINT ["nginx", "-g", "daemon off;"]


FROM node:lts-alpine as builder

ENV NODE_ENV=production

RUN mkdir /app-ui
COPY package.json package-lock.json ./
RUN apk add --update --no-cache python3 build-base gcc && ln -sf /usr/bin/python3 /usr/bin/python
RUN npm install --production && mv ./node_modules ./app-ui

WORKDIR /app-ui

COPY . .

# RUN npm run build:frontend -- --deploy-url=/ --prod
RUN npm i; ng build


FROM nginx:alpine

#!/bin/sh

COPY ./apps/frontend/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app-ui/dist /usr/share/nginx/html

EXPOSE 4210 81

ENTRYPOINT ["nginx", "-g", "daemon off;"]