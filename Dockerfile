# Use official Node.js LTS image
FROM node:18-alpine


# Create app directory
WORKDIR /usr/src/app


# Copy package files and install
COPY package*.json ./
RUN npm ci --only=production


# Copy source
COPY . .


EXPOSE 3000
CMD ["node", "src/index.js"]