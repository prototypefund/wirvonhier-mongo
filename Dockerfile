FROM mongo:4.4.0-bionic

COPY seed/create-env-variables.sh /docker-entrypoint-initdb.d/0-create-env-variables.sh
COPY seed/createUser.sh /docker-entrypoint-initdb.d/1-create-user.sh
COPY seed/seedDataProtStatements.js /docker-entrypoint-initdb.d/2.js
COPY seed/seedImages.js /docker-entrypoint-initdb.d/3.js
COPY seed/seedVideos.js /docker-entrypoint-initdb.d/4.js
COPY seed/seedLocations.js /docker-entrypoint-initdb.d/5.js
COPY seed/seedUsers.js /docker-entrypoint-initdb.d/6.js
COPY seed/seedBusinesses.js /docker-entrypoint-initdb.d/7.js
