FROM node:18.16.0-alpine

# Create app directory
WORKDIR /coop-bank/coop-server

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Create env for production
ENV NODE_ENV production

# Start the server using the production build
CMD [ "node", "dist/main.js" ]

# docker build -t coop-server . 
# docker run --name coop-server-container -p 8000:3001 -d coop-server 