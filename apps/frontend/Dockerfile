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

FROM node:lts as builder

ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY . . 
RUN npm install 
# && mkdir /app-ui && mv ./node_modules ./app-ui
RUN ls;pwd; cd apps/frontend; ls; npm install -g @angular/cli; ng build 
# RUN npm install -g @angular/cli; ng build

FROM nginx:alpine
#!/bin/sh
COPY ./apps/frontend/nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 4210 81
ENTRYPOINT ["nginx", "-g", "daemon off;"]