import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import { taskReducer, inputReducer, boxReducer } from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

const rootReducer = combineReducers({taskReducer, inputReducer, boxReducer});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
    reducer: persistedReducer,
    middleware: [   ],
})

const Persistor = persistStore(Store);
export {Store, Persistor};