package shoppingcart.application_name.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shoppingcart.application_name.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
