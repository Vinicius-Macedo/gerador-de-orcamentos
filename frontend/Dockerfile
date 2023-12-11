FROM node:18

RUN if [ ! -x /usr/local/bin/yarn ]; then \
  npm install -g yarn; \
  fi

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
