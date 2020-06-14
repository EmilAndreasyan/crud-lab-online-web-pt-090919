import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
      {this.props.restaurant}
        <ReviewInput
        addReview={this.props.addReview}
        restaurantId={this.props.restaurantId}/>
        <Reviews 
        reviews={this.props.reviews}
        deleteReview={this.props.deleteReview}
        restaurantId={this.props.restaurantId}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {return {reviews}}

const mapDispatchToProps = dispatch => ({
  addReview: text => dispatch({type: 'ADD_REVIEW', text}),
  deleteReview: restaurantId  => dispatch(type: 'DELETE_REVIEW', restaurantId )
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)