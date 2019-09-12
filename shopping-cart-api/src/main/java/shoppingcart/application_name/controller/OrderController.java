package shoppingcart.application_name.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import shoppingcart.application_name.model.Order;
import shoppingcart.application_name.service.OrderService;

@RestController
@CrossOrigin
public class OrderController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PutMapping("/order")
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }
}
