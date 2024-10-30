import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './reduce_Toolkit/notesaga'; // Đảm bảo đường dẫn chính xác
import notesReducer from './reduce_Toolkit/noteReduce'; // Đảm bảo đường dẫn chính xác

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
