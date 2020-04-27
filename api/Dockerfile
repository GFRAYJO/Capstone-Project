# base image
FROM node:13.8.0-alpine3.10

# set working directory
WORKDIR /app

# install python 2.7 and make because of node-gyp and node-sass
# ADD repositories /etc/apk/repositories
RUN apk add --update build-base python2 python-dev

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
# COPY yarn.lock /app/yarn.lock
# RUN yarn
RUN npm install

# start app
CMD ["npm", "start"]