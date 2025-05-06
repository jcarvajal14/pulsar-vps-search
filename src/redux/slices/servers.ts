import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/apiservice';
import { getAccessToken } from '../../services/auth';

export const fetchServerList = createAsyncThunk('server/all', async () => {
  const accessToken = (await getAccessToken()) ?? '';
  const res = await apiService.secureApi(accessToken).getServerList();
  return res.data;
});

export const fetchServerDetails = createAsyncThunk(
  'server/details',
  async (id: Number) => {
    const accessToken = (await getAccessToken()) ?? '';
    const res = await apiService.secureApi(accessToken).getServerDetails(id);
    return res.data;
  }
);

export const serverDetailsSlice = createSlice({
  name: 'serverDetails',
  initialState: {
    serverDetails: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServerDetails.fulfilled, (state, action) => {
      state.serverDetails = action.payload;
    })
  }
})

const serverSlice = createSlice({
  name: 'server',
  initialState: {
    serverList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServerList.fulfilled, (state, action) => {
      state.serverList = action.payload.serverList;
    });
  },
});

export default serverSlice.reducer;
