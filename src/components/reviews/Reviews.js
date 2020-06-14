import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, restaurantId, deleteReview} = this.props
    const reviewList = reviews.map(review => <Review key={review.restaurantId} {...review} deleteReview={this.props.deleteReview}/>)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;