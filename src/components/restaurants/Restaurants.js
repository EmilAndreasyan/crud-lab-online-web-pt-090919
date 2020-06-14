import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const {restaurants, deleteRestaurant } = this.props
    const restaurantList = restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;