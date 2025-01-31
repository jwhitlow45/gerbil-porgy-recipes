FROM node:22-alpine

# create app directory
WORKDIR /app
COPY package*.json .

# install for indexing script
RUN apk update && apk add jq

# install dependencies
RUN npm install
RUN npm i -g serve

# copy over source files
COPY src src
COPY public public
COPY scripts scripts
COPY index.html .
COPY tsconfig.* .
COPY vite.config.ts .

# build app
RUN npm run build
EXPOSE 3000

# start app
CMD [ "serve", "-s", "dist" ]