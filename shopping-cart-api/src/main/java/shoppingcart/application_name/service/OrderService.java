package shoppingcart.application_name.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import shoppingcart.application_name.model.Order;
import shoppingcart.application_name.repository.OrderRepository;

import static java.lang.String.format;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    private EmailService emailService;

    @Autowired
    public OrderService(OrderRepository orderRepository, EmailService emailService) {
        this.orderRepository = orderRepository;
        this.emailService = emailService;
    }

    public Order createOrder(Order order) {
        Order savedOrder = orderRepository.save(order);

        if (savedOrder != null) {
            sendMail(order);
        }

        return savedOrder;
    }

    private void sendMail(Order order) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(order.getEmailAddress());
        message.setSubject("Order Confirmed");
        message.setText(format("Hi %s!\n Your order id is %s . Happy shopping :)", order.getCustomerName(), order.getId()));
        emailService.sendSimpleMessage(message);
    }


}
