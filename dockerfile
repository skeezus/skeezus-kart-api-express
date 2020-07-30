FROM node:12.18.1

# https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
  
ENV PROJECT_NAME=kart

WORKDIR /root/$PROJECT_NAME

COPY package*.json ./

RUN npm config set loglevel warn && npm install -g nodemon && npm install
RUN mkdir api && touch api/app.js

ENTRYPOINT ["/bin/bash"]

CMD ["./scripts/run_server.sh"]

EXPOSE 8080