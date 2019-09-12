package shoppingcart.application_name.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import shoppingcart.application_name.model.Book;
import shoppingcart.application_name.model.Review;

import java.util.Collection;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("select review from Review where bookId = :bookId")
    List<String> findAllReviewByBookId(long  bookId);

    @Query("select avg(rating) from Review where bookId = :bookId")
    Integer findAverageRatingOfBook(long bookId);
}
