FROM node:latest

RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.1/dumb-init_1.2.1_amd64
RUN chmod +x /usr/local/bin/dumb-init

# set NODE_ENV to development by default
ENV NODE_ENV=development

# expose the api port
EXPOSE 3000

# Set a working directory
WORKDIR /usr/src/app

# Install Node.js dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Attempts to copy "dist" folder
COPY ./dist/ ./dist/

# switch to node user for security purposes
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]
CMD [ "node", "dist/index.js" ]
