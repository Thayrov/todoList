import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { sessionReducer } from './slices/session';
import { listReducer } from './slices/list';
import { optionsReducer } from './slices/options';
import { trainingListReducer } from './slices/trainingList';
import { trainingUpdateReducer } from './slices/trainingUpdate';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'],
};

const combinedReducers = combineReducers({
  session: sessionReducer,
  options: optionsReducer,
  list: listReducer,
  trainingList: trainingListReducer,
  trainingUpdate: trainingUpdateReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;
