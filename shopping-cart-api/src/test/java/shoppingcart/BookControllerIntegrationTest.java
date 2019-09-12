package shoppingcart;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.core.Is.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@AutoConfigureMockMvc
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class BookControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldReturnAllBooks() throws Exception {
        mockMvc.perform(
                get("/books"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name", is("The Girl in Room 105")))
                .andExpect(jsonPath("$[0].id", is(6)))
                .andExpect(jsonPath("$[0].imageUrl", is("http://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5")))
                .andExpect(jsonPath("$[0].price", is(193.0)))
                .andExpect(jsonPath("$[1].name", is("Indian Superfoods")))
                .andExpect(jsonPath("$[1].id", is(7)))
                .andExpect(jsonPath("$[1].imageUrl", is("http://books.google.com/books/content?id=4oFoDwAAQBAJ&printsec=frontcover&img=1&zoom=5")))
                .andExpect(jsonPath("$[1].price", is(495.0)));
    }



}
