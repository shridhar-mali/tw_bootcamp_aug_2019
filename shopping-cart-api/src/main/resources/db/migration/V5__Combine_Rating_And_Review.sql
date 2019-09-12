drop table if exists rating;
alter table review add column rating int not null default 0;