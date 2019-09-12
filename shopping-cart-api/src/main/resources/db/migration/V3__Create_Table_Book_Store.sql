--book
drop table if exists book cascade;

drop sequence if exists book_id;

create sequence book_id start 1 increment 1;

create table book (id int8 not null, name varchar(255) not null, image_url varchar(255), price float8 not null, description varchar(500), primary key (id));

--author
drop table if exists author cascade;

drop sequence if exists author_id;

create sequence author_id start 1 increment 1;

create table author (id int8 not null, name varchar(255) not null, primary key (id));

--book_author
drop table if exists book_author cascade;

drop sequence if exists book_author_id;

create sequence book_author_id start 1 increment 1;

create table book_author (id int8 not null, book_id int8 not null, author_id int8 not null, primary key (id), FOREIGN KEY (book_id) REFERENCES book (id), FOREIGN KEY (author_id) REFERENCES author (id));

--review
drop table if exists review cascade;

drop sequence if exists review_id;

create sequence review_id start 1 increment 1;

create table review (id int8 not null, book_id int8 not null, review varchar(255) not null, primary key (id), FOREIGN KEY (book_id) REFERENCES book (id));


--rating
drop table if exists rating cascade;

drop sequence if exists rating_id;

create sequence rating_id start 1 increment 1;

create table rating (id int8 not null, book_id int8 not null, rating int8 not null, primary key (id), FOREIGN KEY (book_id) REFERENCES book (id));