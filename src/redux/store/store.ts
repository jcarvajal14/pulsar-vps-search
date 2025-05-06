import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import serverReducer, { serverDetailsSlice } from '../slices/servers';

const rootReducers = combineReducers({
    server: serverReducer,
    serverDetails: serverDetailsSlice.reducer,
})

const store = configureStore({
    reducer: rootReducers,
    devTools: true,
})
export default store;
