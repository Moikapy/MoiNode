# Sets Env
FROM node:lts
ENV YARN_VERSION 1.16.0
#Creates Working App
WORKDIR /usr/src/app
#copy's package.json file and installs deps
COPY package.json ./
RUN npm i
#bundles source
COPY . .

#starts Project
CMD ["yarn", "start"]
