-- Active: 1717624087285@@localhost@3306@videolocadora
/*
use videolocadora;
 
 create table Genero(
 id int not null,
 Descricao varchar(200) not null,
 primary key(id)
 );
 
 create table Filmes(
 id int not null auto_increment,
 nome varchar(200) not null,
 id_genero int not null,
 primary key(id),
 foreign key Genero(id_genero) references Genero(id)
  );
 
 insert into Genero (ID, DESCRICAO)
 values ('1', "Animação"),
		('2', "Terror"),
        ('3', "Ação"),
        ('4', "Drama"),
        ('5', "Comedia");

 insert into Filmes (NOME, ID_GENERO)
values	("Batman", '3'),
		("The Battle of the Dark River",'3'),
        ("White Duck", '1'),
        ("Breaking Barriers", '4'),
        ("The Two Hours", '2');

insert into Genero (ID, DESCRICAO)
values ('6', "Documentário"),
		('7', "Romance"),
        ('8', "Nacional"),
        ('9', "Bibliografia"),
        ('10', "Guerra");

insert into Filmes (NOME, ID_GENERO)
values	("Oppenheimer", '9'),
		("O Alto da Compadecida",'8'),
        ("O Homem que Desafiou o Diabo", '8'),
        ("E O Vento Levou", '7'),
        ("Democracia em Vertigem", '6'),
        ("Nada de Novo no Front", '10'),
        ("O Professor Aloprado",'5');

Questão 5
select nome as NOME_DO_FILME, id_genero as COD_GENERO 
from Filmes
where id_genero=8

Questão 6
select nome as NOME_DO_FILME, id_genero as COD_GENERO 
from Filmes
where id_genero=2 or id_genero=4

Questão 7
select * 
from Filmes

Questão 8
select *
from genero

Questão 9
select nome, id_genero
from Filmes
where nome like 'T%'

Questão 10
select * from Filmes
update FILMES set ID_GENERO=4
where ID_GENERO=3;

Questão 11
select NOME, DESCRICAO from FILMES, GENERO
where ID_GENERO = GENERO.ID;

Questão 12
delete from FILMES where ID_GENERO = 1;
*/
