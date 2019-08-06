import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(newPost);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" name="title" value={this.state.title} onChange={this.onInputChange} />
          </div>
          <div>
            <label>Body</label>
            <br />
            <textarea type="text" name="body" value={this.state.body} onChange={this.onInputChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm);