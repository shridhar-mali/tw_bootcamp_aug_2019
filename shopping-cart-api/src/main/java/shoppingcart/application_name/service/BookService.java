package shoppingcart.application_name.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import shoppingcart.application_name.model.Author;
import shoppingcart.application_name.model.Book;
import shoppingcart.application_name.model.BookDetail;
import shoppingcart.application_name.model.BookItem;
import shoppingcart.application_name.repository.BookRepository;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Service
public class BookService {


    private final BookRepository bookRepository;
    private final ReviewService reviewService;

    @Autowired
    public BookService(BookRepository bookRepository, ReviewService reviewService) {
        this.bookRepository = bookRepository;
        this.reviewService = reviewService;
    }

    public List<BookItem> allBookItems() {
        return bookRepository.
                findAll().
                stream().
                map(book -> new BookItem(book.getId(),
                        book.getName(),
                        book.getImageUrl(),
                        book.getPrice(),
                        book.getAuthors().stream().map(Author::getName).collect(toList()))).collect(toList());
    }

    @Nullable
    public BookDetail getBookDetailById(long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        return bookOptional.
                map(book ->
                        new BookDetail(book,
                                reviewService.getReviewsByBookId(bookId),
                                reviewService.getAverageRatingByBookId(bookId))).
                orElse(null);
    }
}
