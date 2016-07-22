FROM alpine:3.4

RUN apk add --update nodejs && \
    mkdir -p /app

WORKDIR /app
EXPOSE 3030

COPY package.json package.json
RUN npm install

COPY src src

CMD ["npm","start"]
