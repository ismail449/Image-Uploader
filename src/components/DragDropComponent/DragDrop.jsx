import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../ButtonComponent/Button';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setUpload, setUrl, setError } from '../../redux/features/uploadSlice';
import { storage } from '../../firebase';
import UploadImage from '../../assets/image.svg';
import './DragDrop.css';

const DragDrop = () => {
  const [dragActive, setDragActive] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const upload = (file) => {
    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: file.type,
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      () => {},
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            dispatch(
              setError("User doesn't have permission to access the object"),
            );
            break;
          case 'storage/canceled':
            dispatch(setError('User canceled the upload'));
            break;
          default:
            dispatch(setError('Error'));
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dispatch(setUrl(downloadURL));
          dispatch(setUpload(false));
        });
      },
    );
  };

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
      dispatch(setUpload(true));
      upload(e.dataTransfer.files[0]);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      dispatch(setUpload(true));
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
      <div className="button-container">
        <Button onClick={onButtonClick} text="Choose a file" />
      </div>
    </>
  );
};

export default DragDrop;
