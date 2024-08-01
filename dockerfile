# Use the official Node.js image as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js app runs on
EXPOSE 3001

# Start the Next.js application
CMD ["npm", "start"]
