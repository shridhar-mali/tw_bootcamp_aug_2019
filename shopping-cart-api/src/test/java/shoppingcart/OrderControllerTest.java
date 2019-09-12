package shoppingcart;

import org.aspectj.weaver.ast.Or;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import shoppingcart.application_name.controller.OrderController;
import shoppingcart.application_name.model.Order;
import shoppingcart.application_name.service.OrderService;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class OrderControllerTest {

    private OrderController orderController;

    @Mock
    private OrderService orderService;

    @Before
    public void setUp()
    {
        orderController = new OrderController(orderService);
        when(this.orderService.createOrder(any()))
                .thenReturn(new Order (
                    1L,
                    "Akshay",
                    2000,
                    "9540302078",
                    "a@a.com",
                    "Delhi",
                    "110017",
                    "India")
                );
    }

    @Test
    public void shouldReturnOrderController()
    {
        Assert.assertNotNull(orderController);
    }

    @Test
    public void shouldCreateNewOrder()
    {
         Order order = orderController.createOrder(new Order(
                1L,
                "Akshay",
                2000,
                "9540302078",
                "a@a.com",
                "Delhi",
                "110017",
                "India")
                );

        Assert.assertNotNull(order);
    }
}
