import React from 'react';

class BookReview extends React.Component {

    render() {
        if(this.props.reviews && this.props.reviews.length > 0) {
            return this.props.reviews.map(review => {
                return <div><li>{review}</li></div>
            });
        } else {
            return <div>No Reviews</div>
        }

    }
}

export default BookReview;
