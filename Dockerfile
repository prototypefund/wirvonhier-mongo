FROM mongo:4.4.0-bionic

COPY seed/seedUser.js /docker-entrypoint-initdb.d/1.js
COPY docker-entrypoint.sh /docker-entrypoint.sh

ENTRYPOINT [ "/bin/bash", "/docker-entrypoint.sh" ]

# Uses CMD of Parent Image