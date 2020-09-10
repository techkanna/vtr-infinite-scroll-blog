import React from 'react';

function Loader({ loading }) {
  return (
    <div className={`loader ${loading ? 'show' : ''}`}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
}

export default Loader;
