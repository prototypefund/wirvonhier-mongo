FROM mongo:4.4.0-bionic

COPY seed/seedUser.js /docker-entrypoint-initdb.d/1.js

# Uses CMD of Parent Image