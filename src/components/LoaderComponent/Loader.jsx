import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <h2 className="loader-title">Uploading...</h2>
      <div className="loader-progress">
        <div className="loader-progress-bar"></div>
      </div>
    </div>
  );
};

export default Loader;
