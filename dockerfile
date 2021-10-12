FROM node

RUN mkdir -p /app
WORKDIR /app

COPY package.json .

RUN npm install -g npm@latest

RUN npm install

COPY . .

RUN npm run build

RUN mkdir -p dist/assets

COPY src/assets dist/assets

CMD npm start