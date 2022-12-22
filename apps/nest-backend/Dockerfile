FROM node:alpine
WORKDIR /app
COPY ./dist/apps/nest-backend .
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install 
# dependencies that nestjs needs
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express
CMD node ./main.js