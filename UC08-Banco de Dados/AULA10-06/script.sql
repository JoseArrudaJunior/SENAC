-- USE FAMILIA;

-- -- create table PAI(
-- --  COD_PAI INT NOT NULL,
-- --  NOME_PAI varchar(150) not null,
-- --  IDADE_PAI INT NOT NULL,
-- --  primary key(COD_PAI)
-- -- );
-- -- CREATE TABLE FILHO(
-- --     COD_FILHO INT NOT NULL,
-- --     COD_PAI INT NOT NULL,
-- --     NOME_FILHO VARCHAR(150) NOT NULL,
-- --     GENERO_FILHO CHAR NOT NULL,
-- --     PRIMARY KEY (COD_FILHO),
-- --     FOREIGN KEY(COD_PAI) REFERENCES PAI(COD_PAI)
    
-- -- );
-- -- use familia;
-- -- INSERT INTO PAI(COD_PAI, NOME_PAI, IDADE_PAI)
-- -- VALUES  (1, "Daniel de Souza Leão Sobrinho", 62),
-- --         (2, "João Carlos da Silva", 38),
-- --         (3, "Fernando de Oliveira", 36),
-- --         (4, "Jario de Oliveira Leão", 32);

-- -- INSERT INTO FILHO(COD_FILHO, COD_PAI, NOME_FILHO, GENERO_FILHO)
-- -- VALUES  (1, 1, "Renata de Oliveira Leão", 'F'),
-- --         (2, 1, "Fernando de Oliveira Leão", 'M'),
-- --         (3, 1, "Roberta de Oliveira Leão", 'F'),
-- --         (4, 1, "Jairo de Oliveira Leão", 'M'),
-- --         (5,2, "Giovanna Silva", 'F'),
-- --         (6,3, "Lucas Ribeiro Oliveira", 'M'),
-- --         (7,3, "Helder Ribeiro Oliveira", 'M');

-- SELECT *
-- from pai;

-- SELECT max(idade_pai) from pai;
-- SELECT min(idade_pai) from pai;
-- SELECT * from pai
-- WHERE idade_pai = (select max(idade_pai) from pai);
-- SELECT * from pai
-- WHERE idade_pai = (select min(idade_pai) from pai);
-- SELECT * from pai
-- WHERE idade_pai <> (select max(idade_pai) from pai);