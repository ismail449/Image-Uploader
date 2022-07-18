import React from 'react';
import DragDrop from '../DragDropComponent/DragDrop';
import './ImageUploader.css';

const ImageUploader = () => {
  return (
    <div className="image-uploader">
      <h1 className="image-uploader-title">Upload your image</h1>
      <span className="image-uploader-instructions">
        File should be Jpeg, Png,...
      </span>
      <DragDrop />
    </div>
  );
};

export default ImageUploader;
