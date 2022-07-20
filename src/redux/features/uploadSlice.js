import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upload: false,
  url: ''
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
  }
});

export const { setUpload, setUrl } = uploadSlice.actions;
export default uploadSlice.reducer