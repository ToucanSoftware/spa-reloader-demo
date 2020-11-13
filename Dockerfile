# compilation stage (creates an artifact ready for production)
FROM node:12-alpine as build-stage

# no cache = build will always start from scratch
# update = get latest list of available packages
# apk = alpine Linux Package Manager
RUN apk update && apk add --no-cache make git

# make 'app' folder the main folder
WORKDIR /app

# copy both package.json and package-lock.json
COPY package*.json .eslintrc.js babel.config.js ./

# install all the project dependencies
RUN npm install

# Copy application code to build.
COPY . .

# build project for minified production
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]