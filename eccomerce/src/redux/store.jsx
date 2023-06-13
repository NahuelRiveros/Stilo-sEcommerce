import { configureStore } from '@reduxjs/toolkit'
import bazarRedcuer from './bazarSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// https://redux-toolkit.js.org/usage/usage-guide {redux-persist}
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, bazarRedcuer)

// https://redux-toolkit.js.org/tutorials/quick-start
export const store = configureStore({
  reducer: { bazar: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

      },
    }),
})
export let persistor = persistStore(store)