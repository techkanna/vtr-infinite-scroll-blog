import React from 'react';

function Posts({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="number">{post.id}</div>
          <div className="post-info">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
