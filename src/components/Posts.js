import React, { Component } from "react";
import PostItems from "./Postitems";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Posts</h1>
        <PostItems posts={posts} />
      </div>
    );
  }
}

export default Posts;
