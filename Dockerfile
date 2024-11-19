# Use Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy project files
COPY package*.json ./
RUN npm install
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]
