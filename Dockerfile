FROM node:8.10.0-alpine

RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.1/dumb-init_1.2.1_amd64
RUN chmod +x /usr/local/bin/dumb-init

# set NODE_ENV to development by default
ENV NODE_ENV=development

# expose the api port
EXPOSE 3000

# Set a working directory
WORKDIR /usr/src/app

# Copy all files, to help the interviewee
COPY ./ ./
RUN yarn install && yarn build

# switch to node user for security purposes
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]
CMD [ "node", "dist/index.js" ]
