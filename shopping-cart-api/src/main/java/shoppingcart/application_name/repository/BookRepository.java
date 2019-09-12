package shoppingcart.application_name.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shoppingcart.application_name.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
