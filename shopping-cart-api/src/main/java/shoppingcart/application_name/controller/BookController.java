package shoppingcart.application_name.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import shoppingcart.application_name.model.BookDetail;
import shoppingcart.application_name.model.BookItem;
import shoppingcart.application_name.service.BookService;

import java.util.List;

@RestController
@CrossOrigin
public class BookController {

    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books")
    public List<BookItem> getAllBooks() {
        return bookService.allBookItems();
    }

    @GetMapping("/books/{bookId}")
    public BookDetail getBookDetail(@PathVariable long bookId) {
        return bookService.getBookDetailById(bookId);
    }
}
