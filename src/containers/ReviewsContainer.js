import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
      {this.props.restaurant}
        <ReviewInput addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

<<<<<<< HEAD
const mapDispatchToProps = dispatch => ({
  addReview: text => dispatch({type: 'ADD_REVIEW', text}),
  deleteReview: restaurantId  => dispatch(type: 'DELETE_REVIEW', restaurantId )
})
=======
const mapDispatchToProps = dispatch => {
  addReview: text => dispatch({'ADD_REVIEW', text}),
  deleteReview: restaurantId  => dispatch('DELETE_REVIEW', restaurantId )
}
>>>>>>> d40d2ae5a2ad053e6eb253c27abaf29fbbefb974

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
