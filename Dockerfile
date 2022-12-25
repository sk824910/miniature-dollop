# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16.17.0-bullseye-slim as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# # Install all the dependencies
# RUN npm install; pwd ;ls;

# # Generate the build of the application /// fails here
# RUN nx run minidollop-ui:build:production
# install python dep
RUN apt-get update || : && apt-get install python -y
RUN apt-get install python3-pip -y

RUN ls;npm install --production
RUN npm install reflect-metadata tslib rxjs hbs
CMD node ./main.js


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest
# 
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/apps/minidollop-ui /usr/share/nginx/html

# Expose port 80
EXPOSE 80