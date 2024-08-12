FROM  mysql:8.3.0

ADD init.sh /docker-entrypoint-initdb.d/0.init.sh
ADD migration.sh /docker-entrypoint-initdb.d/1.migration.sh

ADD init_scripts/ /tmp/init_scripts
ADD migrations/ /tmp/migrations
