package shoppingcart.application_name.model;

import java.util.List;

public class BookDetail extends BookItem {

    private String description;

    private List<String> reviews;

    private int rating;

    private double ebookPrice;

    public BookDetail(Book book, List<String> reviews, int averageRating) {

        super(book);
        this.description = book.getDescription();
        this.reviews = reviews;
        this.rating = averageRating;
        this.ebookPrice = book.getEbookPrice();
    }

    public String getDescription() {
        return description;
    }

    public List<String> getReviews() {
        return reviews;
    }

    public int getRating() {
        return rating;
    }

    public double getEbookPrice() {
        return ebookPrice;
    }
}
