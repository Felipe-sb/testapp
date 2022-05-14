create database paytoowin;

use paytoowin;

CREATE TABLE `paytoowin`.`users` (
    `id` VARCHAR(100) NOT NULL,
    `username` VARCHAR(80) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
) ENGINE = InnoDB;