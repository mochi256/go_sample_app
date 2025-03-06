create table accounts (
    id              int AUTO_INCREMENT PRIMARY KEY,
    user_id         varchar(128) NOT NULL UNIQUE,
    user_name       varchar(128) NOT NULL,
    user_pass_hash  varchar(255) NOT NULL,
    user_pass_algo  varchar(20) NOT NULL,
    created_at      datetime NOT NULL default CURRENT_TIMESTAMP,
    updated_at      datetime NOT NULL default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at      datetime default NULL
);
