import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import Loader from './components/Loader';
import Posts from './components/Posts';

let limit = 5;
window.innerHeight >= 1127 && (limit = 10);
function App() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch posts from API
    const getPosts = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
      );

      const data = await res.json();
      setPosts((p) => [...p, ...data]);
    };
    getPosts();

    const handleScroll = () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);

          setTimeout(() => {
            setPage(page + 1);
          }, 300);
        }, 1000);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  return (
    <>
      <h1>My Blog</h1>
      <Filter setPosts={setPosts} />
      <Posts posts={posts} />
      <Loader loading={loading} />
    </>
  );
}

export default App;
