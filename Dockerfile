FROM mongo:4.4.0-bionic

COPY seed/create-env-variables.sh /docker-entrypoint-initdb.d/0-create-env-variables.sh
COPY seed/createUser.sh /docker-entrypoint-initdb.d/1-create-user.sh
COPY seed/seedDataProtStatements.js /docker-entrypoint-initdb.d/2.js
