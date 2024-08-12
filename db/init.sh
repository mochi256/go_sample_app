#!/bin/bash
set -eu

mysql -u "root" -p"${MYSQL_ROOT_PASSWORD}" < /tmp/init_scripts/create_databases.sql
mysql -u "root" -p"${MYSQL_ROOT_PASSWORD}" < /tmp/init_scripts/create_users.sql
mysql -u "${DB_USER}" -p"${DB_PASS}" ${DB_NAME} < /tmp/init_scripts/create_tables.sql
