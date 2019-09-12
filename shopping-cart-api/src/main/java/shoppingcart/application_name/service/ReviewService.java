package shoppingcart.application_name.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shoppingcart.application_name.repository.ReviewRepository;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<String> getReviewsByBookId(long bookId) {
        return reviewRepository.findAllReviewByBookId(bookId);
    }

    public int getAverageRatingByBookId(long bookId) {
        Integer averageRating = reviewRepository.findAverageRatingOfBook(bookId);
        return averageRating != null ? averageRating : 0;
    }
}
