###########################################################
#
# Dockerfile for politikk.microsite.t-fk.no
#
###########################################################

# Setting the base to nodejs 4.6.0
FROM mhart/alpine-node:4.6.0

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV OPENGOV_MEETINGS_API_URL https://opengov.api.t-fk.no
ENV OPENGOV_POLITICIANS_API_URL https://politiker-api.t-fk.no
ENV OPENGOV_SEARCH_API_URL https://politics.search.t-fk.no
ENV OPENGOV_POLITIKK_SERVER_PORT 8000

EXPOSE 8000

# Startup
ENTRYPOINT node standalone.js