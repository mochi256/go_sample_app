#!/bin/bash
set -eu

mysql -u "${DB_USER}" -p"${DB_PASS}" ${DB_NAME} < /tmp/migrations/00001_insert.sql
mysql -u "${DB_USER}" -p"${DB_PASS}" ${DB_NAME} < /tmp/migrations/00002_create_tables.sql
