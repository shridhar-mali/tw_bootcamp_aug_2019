package shoppingcart;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import shoppingcart.application_name.model.Review;
import shoppingcart.application_name.repository.BookRepository;
import shoppingcart.application_name.repository.ReviewRepository;
import shoppingcart.application_name.service.ReviewService;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.doubleThat;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class ReviewServiceTest {

    private ReviewService reviewService;

    @Mock
    private ReviewRepository reviewRepository;

    @Before
    public void setup() {
        reviewService = new ReviewService(reviewRepository);
    }

    @Test
    public void shouldReturnListOfReviews() {
        List<String> reviewList = new ArrayList<>();
        reviewList.add("Book is nice");
        reviewList.add("Good Book");
        when(reviewRepository.findAllReviewByBookId(1)).thenReturn(reviewList);

        List<String> reviews = reviewService.getReviewsByBookId(1);

        Assert.assertNotNull(reviews);
        Assert.assertEquals(2, reviews.size());
        Assert.assertEquals("Book is nice", reviews.get(0));
        Assert.assertEquals("Good Book", reviews.get(1));
    }

    @Test
    public void shouldReturnAverageRating() {
        when(reviewRepository.findAverageRatingOfBook(1)).thenReturn(2);

        double rating = reviewService.getAverageRatingByBookId(1);

        Assert.assertEquals(2, rating, 0);
    }
}
