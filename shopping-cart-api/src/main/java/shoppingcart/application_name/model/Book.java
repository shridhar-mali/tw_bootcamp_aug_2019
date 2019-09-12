package shoppingcart.application_name.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

import static java.util.Objects.hash;
import static java.util.stream.Collectors.toSet;
import static java.util.stream.Stream.of;
import static javax.persistence.CascadeType.DETACH;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String imageUrl;
    private double price;
    private String description;
    private double ebookPrice;


    @ManyToMany(cascade = DETACH)
    @JoinTable(name = "book_author",
            joinColumns = @JoinColumn(name = "book_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "author_id", referencedColumnName = "id"))
    private Set<Author> authors;

    public Book(String name, String imageUrl, double price, String description, double ebookPrice, Author... authors) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
        this.authors = of(authors).collect(toSet());
        this.ebookPrice = ebookPrice;
        this.authors.forEach(x -> x.getBooks().add(this));
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

    public String getDescription() {
        return description;
    }

    public Set<Author> getAuthors() {
        return authors;
    }

    public double getEbookPrice() {
        return ebookPrice;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return id == book.id &&
                Objects.equals(name, book.name);
    }

    @Override
    public int hashCode() {
        return hash(id, name);
    }
}
