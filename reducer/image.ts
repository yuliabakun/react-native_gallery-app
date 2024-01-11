import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getUrl = process.env.BASE_URL;
const clientKey = process.env.ACCESS_KEY;

export const fetchImagesData = createAsyncThunk('image/fetchImagesData', async () => {
  if (!getUrl) {
    throw new Error('Base url is not defined, check your env variables');
  }

  const response = await fetch(getUrl, {
    headers: {
      Authorization: `Client-ID ${clientKey}`,
    },
  });

  const jsonData = await response.json();

  return jsonData;
})

type InitialValue = {
  data: UnsplashPhoto[],
  loading: boolean,
  error: boolean,
}

const initialValue: InitialValue = {
  data: [],
  loading: false,
  error: false,
};

const imageSlice = createSlice({
  name: 'image',
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImagesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImagesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchImagesData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
})

export default imageSlice.reducer;
