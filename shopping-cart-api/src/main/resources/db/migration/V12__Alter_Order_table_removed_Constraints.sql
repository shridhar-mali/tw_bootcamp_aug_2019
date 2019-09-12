alter table book_order alter column customer_name drop not null;
alter table book_order alter column mobile_number drop not null;
alter table book_order alter column customer_address drop not null;
alter table book_order alter column pincode drop not null;
alter table book_order alter column country drop not null;

update book set ebook_price=price-50;

