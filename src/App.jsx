import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import ImageUploader from './components/ImageUploadComponent/ImageUploader';
import './App.css';

function App() {
  const upload = useSelector((state) => state.upload.upload);
  return (
    <div className="App">
      <div className="background">
        {upload ? <p>Loading</p> : <ImageUploader />}
      </div>
    </div>
  );
}

export default App;
