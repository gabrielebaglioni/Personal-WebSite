# Stage 1: Costruisci l'app React
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm update
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Imposta il server Nginx per servire l'app React
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]