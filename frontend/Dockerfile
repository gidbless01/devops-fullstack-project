# ----------- BUILD STAGE -----------
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files
COPY my-react-app/package*.json ./
RUN npm install

# Copy app source
COPY my-react-app/ .
RUN npm run build

# ----------- RUNTIME STAGE -----------
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


