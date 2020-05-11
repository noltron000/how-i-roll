# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR ./src

# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
COPY /package.json ./
COPY /yarn.lock ./
RUN yarn
RUN yarn add react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]
