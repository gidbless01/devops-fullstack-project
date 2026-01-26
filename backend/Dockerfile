FROM node:18-alpine
WORKDIR /app

# Copy package.json first (cache layer)
COPY package*.json ./
RUN npm install --only=production

# Copy all source files
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]   # adjust entry point




