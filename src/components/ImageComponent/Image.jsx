import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../ButtonComponent/Button';
import Icon from '../../assets/correct.png';
import './Image.css';

const Image = () => {
  const url = useSelector((state) => state.upload.url);
  const copyLink = () => {
    navigator.clipboard.writeText(url);
  };
  return (
    <div className="image">
      <img className="image-icon" src={Icon} />
      <h1 className="image-title">Uploaded Successfully!</h1>
      <img className="uploaded-img" src={url} />
      <div className="url-container">
        <p className="url">{url}</p>
        <Button onClick={copyLink} text="Copy Link" />
      </div>
    </div>
  );
};

export default Image;
