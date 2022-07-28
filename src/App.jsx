import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import ImageUploader from './components/ImageUploadComponent/ImageUploader';
import Loader from './components/LoaderComponent/Loader';
import Image from './components/ImageComponent/Image';
import Error from './components/ErrorComponent/Error';
import Footer from './components/FooterComponent/Footer';
import './App.css';

function App() {
  const upload = useSelector((state) => state.upload.upload);
  const url = useSelector((state) => state.upload.url);
  const error = useSelector((state) => state.upload.error);
  return (
    <div className="App">
      <div className="background">
        {upload ? (
          <Loader />
        ) : url ? (
          <Image />
        ) : error ? (
          <Error />
        ) : (
          <ImageUploader />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
