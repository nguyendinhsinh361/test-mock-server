# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npm run build

# Specify the command to run when the container starts
ENTRYPOINT  ["npm", "run", "start:prod"]