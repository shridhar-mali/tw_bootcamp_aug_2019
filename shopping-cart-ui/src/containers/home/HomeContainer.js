import {urls} from "../../config/env-config";
import Home from "../../components/home/Home";
import React from 'react';

class HomeContainer extends React.Component {

    state = {
        bookList : []
    };

    async fetchBookList() {
        await fetch(urls.bookList)
            .then(response => response.json())
            .then(bookList => this.setState({bookList: bookList}))
            .catch((e)=> {
                alert(e);
            });
    }

    async componentDidMount() {
        this.fetchBookList();
    }

    render() {
        return <Home bookList={this.state.bookList} />
    }
}

export default HomeContainer