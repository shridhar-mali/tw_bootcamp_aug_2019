import React from 'react';
import Grid from "./grid/Grid";

class Home extends React.Component {

    render() {
        return (
            <div className="bg-light">
                <div className="p-3">
                    <Grid bookList={this.props.bookList} />
                </div>
            </div>
        );
    }
}

export default Home;
