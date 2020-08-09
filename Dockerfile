FROM mongo:4.4.0-bionic

COPY seed/seedUser.js /docker-entrypoint-initdb.d/1.js
COPY seed/seedDataProtStatements.js /docker-entrypoint-initdb.d/2.js
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint-2.sh
RUN chmod 755 /usr/local/bin/docker-entrypoint-2.sh

ENTRYPOINT [ "/usr/local/bin/docker-entrypoint-2.sh" ]
CMD ["mongod"]
