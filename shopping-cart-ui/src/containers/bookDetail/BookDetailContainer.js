import {urls} from "../../config/env-config";
import React from 'react';
import BookDetail from "../../components/book-details/BookDetail";

class BookDetailContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await fetch(`${urls.bookDetail}${this.props.params.bookId}`)
            .then(response => response.json())
            .then(bookDetail => this.setState({bookDetail: bookDetail}))
            .catch((e)=> {
                alert(e);
            });
    }

    handleBookTypeChange(bookType) {

    }
    render() {

        return <BookDetail bookDetail={this.state.bookDetail} handleBookTypeChange={this.handleBookTypeChange}/>
    }
}

export default BookDetailContainer