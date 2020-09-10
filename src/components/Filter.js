import React from 'react';

function Filter({ setPosts }) {
  const handleChange = (e) => {
    const term = e.target.value.toUpperCase();
    if (term) {
      const _setPosts = (posts) => {
        return posts.filter(
          (post) =>
            post.title.toUpperCase().indexOf(term) > -1 ||
            post.body.toUpperCase().indexOf(term) > -1
        );
      };
      setPosts(_setPosts);
    }
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        onChange={handleChange}
        className="filter"
        placeholder="Filter posts..."
      />
    </div>
  );
}

export default Filter;
