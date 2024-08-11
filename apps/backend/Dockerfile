ENV BUILDKIT_COLORS always

# Step 1: Use an official Node.js runtime as a parent image
FROM node:slim


LABEL authors="Victorio"

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

COPY . .

USER root

# Step 4: Install dependencies
RUN npm install

# Step 6: Build the TypeScript code
# RUN npm run build

# Step 7: Expose the port on which the app runs
EXPOSE 4000

# Step 8: Define the environment variable for production
ENV NODE_ENV=production

# Step 9: Install only production dependencies
RUN npm prune --production

RUN apt-get update -y && apt-get install -y openssl

RUN npm run generate

# Step 10: Start the application using the build output
CMD ["npm", "run",  "start"]
