# Sets Env
FROM node:lts
ENV YARN_VERSION 1.16.0
#Creates Working App
WORKDIR /app
#copy's package.json file and installs deps
COPY package.json /app
RUN npm i
#bundles source
COPY . /app

#starts Project
EXPOSE 8081
CMD ["yarn", "dev"]
