-- Values for book
alter table book alter id set default nextval('book_id');

insert into book(name, image_url, price, description) values('Cracking the Coding Interview',
                        'https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg',
                        599.0,'189 Programing Questions and Solutions');

insert into book(name, image_url, price, description) values('Core Python Programming',
                        'https://images-na.ssl-images-amazon.com/images/I/51Ss-7j3v5L._SX362_BO1,204,203,200_.jpg',
                        395.0,'Python');

insert into book(name, image_url, price, description) values('Object-Oriented Programming with C++',
                        'https://images-na.ssl-images-amazon.com/images/I/41LBD-XtzYL._SX377_BO1,204,203,200_.jpg',
                        650.0,'OOPS with C++');

insert into book(name, image_url, price, description) values('Real-Time Systems',
                        'https://images-na.ssl-images-amazon.com/images/I/411j9iWUGWL._SX368_BO1,204,203,200_.jpg',
                        647.0,'Real Time Sys');

insert into book(name, image_url, price, description) values('Let Us C solutions',
                        'https://images-na.ssl-images-amazon.com/images/I/51guxh98FhL._SX344_BO1,204,203,200_.jpg',
                        899.0,'C Programs');

-- Values for author
alter table author alter id set default nextval('author_id');

insert into author(name) values ('Martin Fowler');

insert into author(name) values ('Kent Bleck');

--Values for book_author

alter table book_author alter id set default nextval('book_author_id');

insert into book_author(book_id, author_id) values (1, 1);
insert into book_author(book_id, author_id) values (2, 1);
insert into book_author(book_id, author_id) values (3, 1);
insert into book_author(book_id, author_id) values (4, 2);
insert into book_author(book_id, author_id) values (5, 2);

-- Values for review

alter table review alter id set default nextval('review_id');

insert into review (book_id, review) values (1, 'Good');
insert into review (book_id, review) values (1, 'Good Book');
insert into review (book_id, review) values (2, 'Good');
insert into review (book_id, review) values (3, 'Good Book');
insert into review (book_id, review) values (4, 'Good');
insert into review (book_id, review) values (5, 'Good Book');

--Values for rating

alter table rating alter id set default nextval('rating_id');

insert into rating(book_id, rating) values(1, 4);
insert into rating(book_id, rating) values(2, 5);
insert into rating(book_id, rating) values(3, 4);
insert into rating(book_id, rating) values(4, 3);
insert into rating(book_id, rating) values(5, 4);
