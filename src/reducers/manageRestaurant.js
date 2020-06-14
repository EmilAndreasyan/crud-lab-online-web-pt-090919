
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
<<<<<<< HEAD
  switch(action.type) {
=======
  switch(action.type)
>>>>>>> d40d2ae5a2ad053e6eb253c27abaf29fbbefb974
  case 'ADD_RESTAURANT':
    const restaurant = {id: cuidFn, text: action.text}
    return {...state, restaurants: [...state.restaurants, restaurant]}
  case 'DELETE_RESTAURANT':
    const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
    return {restaurants}
  case 'ADD_REVIEW':
<<<<<<< HEAD
    const review = {restaurantId: cuidFn, id: Math.random(), text: action.text}
    return {...state, reviews: [...state.reviews, review]}
=======
    const review = {restaurantId: cuidFn, id: Math.random() text: action.text}
    return {...state, reviews: [...state.reviews: review]}
>>>>>>> d40d2ae5a2ad053e6eb253c27abaf29fbbefb974
  case 'DELETE_REVIEW':
    const reviews = state.reviews.filter(review => review.id !== action.id)
    return {reviews}
  return state
<<<<<<< HEAD
  }
=======
>>>>>>> d40d2ae5a2ad053e6eb253c27abaf29fbbefb974
}
