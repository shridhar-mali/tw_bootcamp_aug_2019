package shoppingcart;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import shoppingcart.application_name.model.Order;
import shoppingcart.application_name.repository.OrderRepository;
import shoppingcart.application_name.service.OrderService;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
public class OrderServiceTest {

    private OrderService orderService;

    @Mock
    private OrderRepository orderRepository;

    @Before
    public void setUp()
    {
        orderService = new OrderService(orderRepository, null);
    }

    @Test
    public void shouldInsertOrderIntoDB()
    {
        Order order = orderService.createOrder(new Order(1L,"Akshay",200,"9540302078","a@a.com","Delhi","110017","India"));
        verify(orderRepository, times(1)).save(any(Order.class));
    }

}
