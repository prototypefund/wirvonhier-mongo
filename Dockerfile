FROM mongo:4.4.0-bionic

COPY seed/seedUsers.js /docker-entrypoint-initdb.d/1.js

# Uses CMD of Parent Image