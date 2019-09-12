ALTER TABLE book_order ADD COLUMN order_type varchar(25);
ALTER TABLE book ADD COLUMN ebook_price float8 NOT NULL default 0.0;