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

ALTER TABLE `products` ADD `verified` BOOLEAN NOT NULL AFTER `partialDelete`;

CREATE TABLE IF NOT EXISTS `paytoowin`.`cart` (
  `id` VARCHAR(25) NOT NULL,
  `products_sku` INT NOT NULL,
  `users_id` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_products_idx` (`products_sku` ASC) VISIBLE,
  INDEX `fk_cart_users1_idx` (`users_id` ASC) VISIBLE
) ENGINE = MyISAM DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;