import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '../api/Api';
import rootReducer from './slice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Ajoutez également une configuration pour la clé bazarV2
const persistConfigBazarV2 = {
    key: 'bazarV2',
    version: 1,
    storage,
};

const persistedReducerBazarV2 = persistReducer(persistConfigBazarV2, rootReducer);

export const store = configureStore({
    reducer: {
        bazar: persistedReducer,
        [api.reducerPath]: api.reducer,
        bazarV2: persistedReducerBazarV2, // Utilisez le persisteur configuré pour bazarV2
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }).concat(api.middleware),
});
setupListeners(store.dispatch);

export let persistor = persistStore(store);