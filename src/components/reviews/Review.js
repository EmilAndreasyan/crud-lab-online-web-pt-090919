import React, { Component } from 'react';

class Review extends Component {

  render() {
    
    handleClick = event => {
      this.props.deleteReview(this.props.review.id)
    }

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Review;
