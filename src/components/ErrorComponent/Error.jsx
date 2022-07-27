import React from 'react';
import { useSelector } from 'react-redux';
import './Error.css';

const Error = () => {
  const error = useSelector((state) => state.upload.error);
  return (
    <div className="error">
      <h1>{error}</h1>
    </div>
  );
};

export default Error;
