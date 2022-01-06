# Default: Last LTS Node version
ARG NODE_VERSION=16.13.0

FROM node:${NODE_VERSION}

WORKDIR /usr/src/project

# Install the required tools
RUN apt update;

RUN apt-get install nano;

RUN npm install -g nodemon

CMD ["entrypoint.sh"]
