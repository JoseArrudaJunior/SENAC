-- Criação do banco de dados locadora
CREATE DATABASE locadora;

-- Selecionar o banco de dados locadora
USE locadora;

-- Criação da tabela generos
CREATE TABLE generos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

-- Criação da tabela filmes
CREATE TABLE filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    id_genero INT,
    FOREIGN KEY (id_genero) REFERENCES generos(id)
);

-- Inserção de alguns dados na tabela generos
INSERT INTO generos (descricao) VALUES 
('Ação'),
('Comédia'),
('Drama'),
('Fantasia'),
('Terror');

-- Inserção de alguns dados na tabela filmes
INSERT INTO filmes (nome, id_genero) VALUES
('Filme Ação 1',  1),
('Filme Comédia 1', 2),
('Filme Drama 1',  3),
('Filme Fantasia 1',4),
('Filme Terror 1', 5);
