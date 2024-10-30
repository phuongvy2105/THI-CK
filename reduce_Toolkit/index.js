import { all } from 'redux-saga/effects';
import watchNotesActions from './notesaga'; // Đảm bảo đường dẫn chính xác

export default function* rootSaga() {
  yield all([
    watchNotesActions(),
  ]);
}
