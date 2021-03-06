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
  `game` VARCHAR(45) NOT NULL,
  `level` INT NOT NULL,
  `description` TEXT NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `partialDelete` TINYINT NOT NULL,
  `verified` BOOLEAN NOT NULL,
  PRIMARY KEY (`sku`)
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `paytoowin`.`cart` (
  `id` VARCHAR(255) NOT NULL,
  `products_sku` TEXT NOT NULL,
  `users_id` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = MyISAM;