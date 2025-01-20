import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from "./slices/authSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    auth: authReducer,
});

const persistConfig = {
    key: 'ma-aashirvad',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
});
const persistor = persistStore(store);

export { store, persistor };

