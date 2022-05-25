create database paytoowin;

use paytoowin;

CREATE TABLE `paytoowin`.`users` (
    `id` VARCHAR(100) NOT NULL,
    `username` VARCHAR(80) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE `paytoowin`.`products` (
  `sku` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `partialDelete` TINYINT NOT NULL,
  PRIMARY KEY (`sku`)
  ) ENGINE = InnoDB;

