// src/reducers/notesReducer.js
import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    list: [],
    error: null,
  },
  reducers: {
    setNotes: (state, action) => {
      state.list = action.payload;
    },
    addNote: (state, action) => {
      state.list.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.list = state.list.filter(note => note.id !== action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setNotes, addNote, deleteNote, setError } = notesSlice.actions;
export default notesSlice.reducer;
