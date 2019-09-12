package shoppingcart.models;

import org.junit.Before;
import org.junit.Test;
import shoppingcart.application_name.model.Review;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class ReviewTest {

    private Review review;
    @Before
    public void setUp() {
        review = new Review( 1L, "Good Book", 4);
    }

    @Test
    public void shouldGiveOrderInstance() {
        assertNotNull(review);
    }

    @Test
    public void shouldAssignValueThroughConstructor() {
        assertEquals(1L, review.getBookId());
        assertEquals("Good Book", review.getReview());
        assertEquals(4, review.getRating());
    }
}