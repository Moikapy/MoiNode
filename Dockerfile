# Stage 1
FROM node:lts as builder

ENV YARN_VERSION 1.16.0
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

#copy's package.json file and installs deps
COPY package.json ./
RUN npm install --quiet

# Stage 2
FROM node:lts
#Creates Working App
WORKDIR /usr/src/app
COPY --from=builder node_modules node_modules
#bundles source
COPY . .

#starts Project

CMD ["yarn", "start"]
