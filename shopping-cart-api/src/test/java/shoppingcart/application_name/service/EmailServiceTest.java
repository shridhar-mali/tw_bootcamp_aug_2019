package shoppingcart.application_name.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class EmailServiceTest {

    @Mock
    private JavaMailSender javaMailSender;

    private EmailService emailService;

    @Before
    public void setUp() {
        emailService = new EmailService(javaMailSender);
    }

    @Test
    public void shouldSendEmail() {

        doNothing().when(javaMailSender).send(any(SimpleMailMessage.class));

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("akshay.arora@thoughtworks.com");
        message.setSubject("Test");
        message.setText("Just a test!");

        emailService.sendSimpleMessage(message);
        verify(javaMailSender, times(1)).send(message);


    }

}