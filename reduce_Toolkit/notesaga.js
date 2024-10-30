import { call, put, takeEvery } from 'redux-saga/effects';
import { setNotes, setError } from './noteReduce'; // Đảm bảo đường dẫn chính xác

// Saga để fetch dữ liệu notes
function* fetchNotes() {
  try {
    // Giả sử ta lấy dữ liệu từ một API hoặc database
    const notes = yield call(() => [
      { id: 1, note: 'To check mail' },
      { id: 2, note: 'UI task web page' },
      // Các ghi chú khác
    ]);
    yield put(setNotes(notes));
  } catch (error) {
    yield put(setError('Failed to load notes'));
  }
}

// Saga chính để lắng nghe actions
function* watchNotesActions() {
  yield takeEvery('notes/fetchNotes', fetchNotes);
}

export default watchNotesActions;
