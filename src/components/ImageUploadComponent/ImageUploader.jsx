import React from 'react';
import UploadImage from '../../assets/image.svg';
import './ImageUploader.css';

const ImageUploader = () => {
  return (
    <div className="image-uploader">
      <h1 className="image-uploader-title">Upload your image</h1>
      <span className="image-uploader-instructions">
        File should be Jpeg, Png,...
      </span>
      <div className="image-uploader-upload">
        <img className="image-uploader-Icon" src={UploadImage} />
        <span className="upload-instructions">Drag & Drop your image here</span>
      </div>
      <span className="image-uploader-text">Or</span>
      <button className="image-uploader-button">Choose a file</button>
    </div>
  );
};

export default ImageUploader;
