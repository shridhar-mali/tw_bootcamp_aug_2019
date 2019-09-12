package shoppingcart.application_name.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "book_order")
public class Order {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long bookId;
    private String customerName;
    private double bookPrice;
    private String mobileNumber;
    private String emailAddress;
    private String customerAddress;
    private String pincode;
    private String country;

    public Order(long bookId, String customerName, double bookPrice, String mobileNumber, String emailAddress, String customerAddress, String pincode, String country) {
        this.bookId = bookId;
        this.customerName = customerName;
        this.bookPrice = bookPrice;
        this.mobileNumber = mobileNumber;
        this.emailAddress = emailAddress;
        this.customerAddress = customerAddress;
        this.pincode = pincode;
        this.country = country;
    }

    public long getId() {
        return id;
    }

    public long getBookId() {
        return bookId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public double getBookPrice() {
        return bookPrice;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public String getPincode() {
        return pincode;
    }

    public String getCountry() {
        return country;
    }
}
