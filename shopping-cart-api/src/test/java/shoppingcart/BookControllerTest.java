package shoppingcart;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import shoppingcart.application_name.controller.BookController;
import shoppingcart.application_name.model.Book;
import shoppingcart.application_name.model.BookDetail;
import shoppingcart.application_name.model.BookItem;
import shoppingcart.application_name.service.BookService;

import java.util.List;

import static java.util.Arrays.asList;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class BookControllerTest {
    private BookController bookController;
    @Mock
    private BookService bookService;

    @Before
    public void shouldReturnBookController() {
        bookController = new BookController(bookService);
        when(bookService.allBookItems()).thenReturn(asList(new BookItem(1, "Cracking the Coding Interview",
                "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg",
                599.0, asList("Martin"))));
        assertNotNull(bookController);
    }

    @Test
    public void shouldReturnAllBooks() {
        List<BookItem> books = bookController.getAllBooks();
        assertNotNull(books);
        assertEquals("Cracking the Coding Interview", books.get(0).getName());
        assertEquals("https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg", books.get(0).getImageUrl());
        assertEquals(599, books.get(0).getPrice(),0);
    }

    @Test
    public void shouldReturnBookDetailByBookId() {
        bookController = new BookController(bookService);
        when(bookService.getBookDetailById(1L)).thenReturn(new BookDetail(new Book("Cracking the Coding Interview",
                "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg",
                599.0, "Good Book", 0.0), asList("Good"), 4));
        assertNotNull(bookController);

        BookDetail bookDetail = bookController.getBookDetail(1L);
        assertNotNull(bookDetail);
        assertEquals("Cracking the Coding Interview", bookDetail.getName());
        assertEquals("https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg", bookDetail.getImageUrl());
        assertEquals(599, bookDetail.getPrice(),0);
    }
}
