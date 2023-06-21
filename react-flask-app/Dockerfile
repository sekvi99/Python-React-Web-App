# Use the official Node.js image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the Node.js dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the React app will run (replace 3000 with the appropriate port)
EXPOSE 3000

# Set the command to start the React app
CMD ["npm", "start"]