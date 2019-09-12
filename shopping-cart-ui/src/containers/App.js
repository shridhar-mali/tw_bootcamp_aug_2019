import React from 'react';
import '../App.css';
import {Router, Route, hashHistory} from 'react-router';
import HomeContainer from "./home/HomeContainer";
import BookContainer from "./bookDetail/BookDetailContainer";
import Navbar from "../components/navbar/Navbar";
import OrderDetailController from "../components/order-details/OrderDetailContainer";

class App extends React.Component {

    render() {

        return (
            <React.Fragment>
                <Navbar/>
                <Router history={hashHistory}>
                    <Route exact path='/' component={HomeContainer}/>
                    <Route exact path='/book-detail/:bookId' component={BookContainer}/>
                    <Route exact path='/order/:bookId' component={OrderDetailController}/>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
