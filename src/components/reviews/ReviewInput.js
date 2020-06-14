import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
  state = {text: ''}
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.addReview)
    this.setState({text: ''})
  }
  
  handleChange = event => {
    this.setState({text: event.target.value})
  }
  
  render() {
    return (
      <div>
        Review Input
       <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.bandName}
            onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
