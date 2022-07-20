import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import ImageUploader from './components/ImageUploadComponent/ImageUploader';
import Loader from './components/LoaderComponent/Loader';
import './App.css';

function App() {
  const upload = useSelector((state) => state.upload.upload);
  return (
    <div className="App">
      <div className="background">
        {upload ? <Loader /> : <ImageUploader />}
      </div>
    </div>
  );
}

export default App;
