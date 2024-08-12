#!/bin/bash
set -eu

mysql -u "${DB_USER}" -p"${DB_PASS}" ${DB_NAME} < /tmp/migrations/insert.sql
