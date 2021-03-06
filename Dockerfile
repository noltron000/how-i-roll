# build environment
FROM node:13.12.0-alpine as build

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
RUN yarn run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /src/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
