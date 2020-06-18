FROM node:12.17.0-alpine3.11

# set working directory
WORKDIR /app
 
# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./
 
# Installs all node packages
RUN npm install
 
# Copies everything over to Docker environment
COPY . .
 
# Uses port which is used by the actual application
EXPOSE 3000

ENV CI true
# Finally runs the application
CMD [ "npm", "start" ]