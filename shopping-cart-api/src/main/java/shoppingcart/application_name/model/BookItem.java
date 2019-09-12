package shoppingcart.application_name.model;

import java.util.ArrayList;
import java.util.List;

public class BookItem {

    private final long id;
    private final String name;
    private final String imageUrl;
    private final double price;
    private final List<String> authors;

    public BookItem(long id, String name, String imageUrl, double price, List<String> authors) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.authors = authors;
    }

    public BookItem(Book book) {
        this.id = book.getId();
        this.name = book.getName();
        this.imageUrl = book.getImageUrl();
        this.price = book.getPrice();

        authors = new ArrayList<>();
        for(Author author : book.getAuthors()) {
            authors.add(author.getName());
        }
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public double getPrice() {
        return price;
    }

    public List<String> getAuthors() {
        return authors;
    }
}
