-- Active: 1717624087285@@localhost@3306
CREATE DATABASE SENAC;
USE SENAC;

CREATE TABLE CURSO(
    ID INT AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    PRIMARY KEY(id)
);