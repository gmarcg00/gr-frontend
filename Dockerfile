FROM node:18.13.0

WORKDIR /app

COPY ./ /app

EXPOSE 3000

CMD ["npm","start"]