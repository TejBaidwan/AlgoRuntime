FROM node:22-alpine

WORKDIR /app

# Copy root lockfiles for workspace support
COPY package*.json ./
COPY apps/api/package*.json ./apps/api/
COPY packages/types/package*.json ./packages/types/

# Install dependencies
RUN npm install

# Copy source code
COPY . .

EXPOSE 5000

# Using tsx to watch for changes
CMD ["npm", "run", "dev", "--workspace=apps/api"]