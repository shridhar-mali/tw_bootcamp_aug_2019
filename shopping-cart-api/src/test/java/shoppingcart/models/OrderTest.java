package shoppingcart.models;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import shoppingcart.application_name.model.Order;

public class OrderTest {

    private Order order;

    @Before
    public void setUp() {
        order = order = new Order(1L, "Harry", 20.24, "1234567890", "a@a.com", "Delhi", "123456", "India");
    }

    @Test
    public void shouldGiveOrderInstance() {
        Assert.assertNotNull(order);
    }

    @Test
    public void shouldVerifyThatConstructorAssignsAllData() {
        Assert.assertEquals(1L, order.getBookId());
        Assert.assertEquals("Harry", order.getCustomerName());
        Assert.assertEquals(20.24, order.getBookPrice(), 0);
        Assert.assertEquals("1234567890", order.getMobileNumber());
        Assert.assertEquals("a@a.com", order.getEmailAddress());
        Assert.assertEquals("Delhi", order.getCustomerAddress());
        Assert.assertEquals("123456", order.getPincode());
        Assert.assertEquals("India", order.getCountry());
    }

}
