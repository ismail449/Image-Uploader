import React, { useState, useRef } from 'react';
import { upload } from '../upload';
import UploadImage from '../../assets/image.svg';
import './DragDrop.css';

const DragDrop = () => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log(e.dataTransfer.files[0]);
      upload(e.dataTransfer.files[0]);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      upload(e.target.files[0]);
    }
  };
  const onButtonClick = () => {
    inputRef.current.click();
  };
  return (
    <>
      <form
        onDragEnter={handleDrag}
        id="form-file-upload"
        className={dragActive ? 'drag-drop drag-active' : 'drag-drop'}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          accept="image/jpeg, image/jpg, image/png"
          type="file"
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
          ref={inputRef}
        />
        <label id="label-file-upload" htmlFor="input-file-upload">
          <div className="icon-container">
            <img className="drag-drop-Icon" src={UploadImage} />
          </div>

          <div>
            <p className="drag-drop-instructions">
              Drag & drop your file here or
            </p>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>

      <span className="drag-drop-text">Or</span>
      <button onClick={onButtonClick} className="drag-drop-button">
        Choose a file
      </button>
    </>
  );
};

export default DragDrop;
