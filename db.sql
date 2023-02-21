-- Active: 1672964075879@@127.0.0.1@3306
--CREATE DATABASE superette_project;
USE superette_project;
DROP TABLE IF EXISTS produits;
CREATE TABLE produits (
  id INT(11) NOT NULL AUTO_INCREMENT,
  image VARCHAR(255) NOT NULL,
  titre VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  prix DECIMAL(10,2) NOT NULL,
  quantite INT(11) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
