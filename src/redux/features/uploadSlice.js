import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upload: false,
  url: '',
  error: ''
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setUpload: (state, action)=>{
      state.upload = action.payload;
    },
    setUrl: (state, action)=>{
      state.url = action.payload;
    },
    setError: (state, action) =>{
      state.error = action.payload
    }
  }
});

export const { setUpload, setUrl, setError } = uploadSlice.actions;
export default uploadSlice.reducer