package shoppingcart;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import shoppingcart.application_name.model.Author;
import shoppingcart.application_name.model.Book;
import shoppingcart.application_name.model.BookDetail;
import shoppingcart.application_name.model.BookItem;
import shoppingcart.application_name.repository.BookRepository;
import shoppingcart.application_name.service.BookService;
import shoppingcart.application_name.service.ReviewService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static java.util.Arrays.asList;
import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class BookServiceTest {

    private BookService bookService;

    @Mock
    private BookRepository bookRepository;

    @Mock
    private ReviewService reviewService;

    private List<Book> books = new ArrayList<>();

    @Before
    public void setup() {
        bookService = new BookService(bookRepository, reviewService);
    }

    @Test
    public void shouldReturnBookItemWithData() {
        //Mocking
        books.add(new Book("Cracking the Coding Interview",
                "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg",
                599.0, "189 Programing Questions and Solutions", 0.0, new Author("Martin"), new Author("Robert")));
        books.add(new Book("abc",
                "abc.jpg",
                899.0, "abc desc", 0.0, new Author("Martin"), new Author("Robert")));
        when(bookRepository.findAll()).thenReturn(books);


        List<BookItem> bookItems = bookService.allBookItems();

        //Asserting...
        assertEquals(2, bookItems.size());
        assertEquals("https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg",
                bookItems.get(0).getImageUrl());
        assertEquals(599, bookItems.get(0).getPrice(), 0);
        assertTrue(bookItems.get(0).getAuthors().size() > 0);
        assertEquals("Cracking the Coding Interview", bookItems.get(0).getName());
        assertEquals(899, bookItems.get(1).getPrice(), 0);
        assertEquals(asList("Robert", "Martin"), bookItems.get(0).getAuthors());
    }

    @Test
    public void shouldReturnBookDetail() {

        //Mocking
        Book book = (new Book("Cracking the Coding Interview",
                "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg",
                599, "book desc", 0.0, new Author("Martin"), new Author("Robert")));
        when(bookRepository.findById(1L)).thenReturn(java.util.Optional.of(book));
        when(reviewService.getReviewsByBookId(1L)).thenReturn(new ArrayList<String>(Arrays.asList("Good Book", "Good")));
        //when(reviewService.getAverageRatingByBookId(1L)).thenReturn(4.0);

        BookDetail bookDetail = bookService.getBookDetailById(1);

        //Assert
        assertNotNull(bookDetail);
        assertTrue(bookDetail instanceof BookItem);
        assertEquals("Cracking the Coding Interview", bookDetail.getName());
        assertEquals("https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg",
                bookDetail.getImageUrl());
        assertEquals(599, bookDetail.getPrice(), 0);
        assertEquals("book desc", bookDetail.getDescription());
        assertTrue(bookDetail.getAuthors().size() > 0);
        assertEquals(asList("Robert", "Martin"), bookDetail.getAuthors());
        assertEquals(asList("Good Book", "Good"), bookDetail.getReviews());
        assertEquals(0, bookDetail.getRating());

    }
}
