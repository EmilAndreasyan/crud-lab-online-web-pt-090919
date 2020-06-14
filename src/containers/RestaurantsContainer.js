import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurantsre restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({restaurants})

<<<<<<< HEAD
const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})
=======
const mapDispatchToProps = dispatch => {
  addRestaurant: text => dispatch({'ADD_RESTAURANT', text}),
  deleteRestaurant: id => dispatch({'DELETE_RESTAURANT', id})
}
>>>>>>> d40d2ae5a2ad053e6eb253c27abaf29fbbefb974

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
