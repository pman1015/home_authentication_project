FROM node:22-alpine3.19

WORKDIR /code
ENV PORT 3000

COPY .env /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm install
RUN npm install cors

RUN npm list --loglevel verbose
RUN npm --version --loglevel verbose
COPY . /code

CMD ["npm", "start"]

