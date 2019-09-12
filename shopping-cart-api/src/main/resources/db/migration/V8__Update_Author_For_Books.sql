insert into book_author(book_id, author_id)
SELECT id,7
FROM book
WHERE id > 5 AND id < 21;

delete from book_author where book_id < 6;
delete from author where id < 3;
delete from review where book_id < 6;
delete from book where id < 6;
