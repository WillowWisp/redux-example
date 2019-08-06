import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.posts !== this.props.posts) {
      this.setState({ posts: [...nextProps.posts] })
    }
    
    if (nextProps.newPost) {
      this.setState({ posts: [ nextProps.newPost, ...this.state.posts ] })
    }
  }

  renderPosts = () => {
    return this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.renderPosts()}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.postReducer.items,
  newPost: state.postReducer.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);