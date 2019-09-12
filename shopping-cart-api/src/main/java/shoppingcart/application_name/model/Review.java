package shoppingcart.application_name.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long bookId;
    private String review;
    private int rating;

    public Review(long bookId, String review, int rating) {
        this.bookId = bookId;
        this.review = review;
        this.rating = rating;
    }

    public long getId() {
        return id;
    }

    public long getBookId() {
        return bookId;
    }

    public String getReview() {
        return review;
    }

    public int getRating() {
        return rating;
    }
}
