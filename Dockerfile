FROM node:12-slim

WORKDIR /codebase
COPY package.json ./
COPY yarn.lock ./
COPY . ./
RUN yarn
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
