--create order
drop table if exists book_order cascade;

drop sequence if exists order_id;

create sequence order_id start 1 increment 1;

create table book_order (
id int8 DEFAULT NEXTVAL('order_id') NOT NULL,
book_id int8 not null,
book_price float8 not null,
customer_name varchar(500),
mobile_number varchar (500),
email_address varchar (500),
customer_address varchar (1000),
pincode varchar (255),
country varchar (255),
primary key (id)
);
