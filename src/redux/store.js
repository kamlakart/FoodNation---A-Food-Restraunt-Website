import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    version: 1, 
    storage,
};

const rootReducer = combineReducers({
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export const persistor = persistStore(store);
export default store;