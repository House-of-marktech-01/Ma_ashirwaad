import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";

// Combine all reducers
const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer  // Add cart reducer
});

// Persist configuration
const persistConfig = {
    key: 'ma-aashirvad',
    storage,
    whitelist: ['auth', 'cart']  // Add cart to whitelist to persist it
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with middleware
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore redux-persist actions
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };