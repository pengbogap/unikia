set names utf8;
drop database if exists li;
create database li charset=utf8;
use li;
create table liList(
id int primary key auto_increment,
limg varchar(32)
);
insert into liList values
(1,'img/portfolio/p1.jpg');
insert into liList values
(2,'img/portfolio/p2.jpg');
insert into liList values
(3,'img/portfolio/p3.jpg');
insert into liList values
(4,'img/portfolio/p4.jpg');
insert into liList values
(5,'img/portfolio/p5.jpg');
insert into liList values
(6,'img/portfolio/p6.jpg');
insert into liList values
(7,'img/portfolio/p7.jpg');
insert into liList values
(8,'img/portfolio/p8.jpg');
insert into liList values
(9,'img/portfolio/p9.jpg');

