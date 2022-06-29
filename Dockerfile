FROM node
WORKDIR /event-manager-app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm" "start:dev"]