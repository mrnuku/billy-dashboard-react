import { createSlice } from '@reduxjs/toolkit';

export const billyDataSlice = createSlice({
  name: 'billyData',

  initialState: {
    value: 0,

    columns: [
      { field: 'id', headerName: 'ID', width: 30 },
      {
        field: 'date',
        headerName: 'Date',
        width: 170,
        editable: true,
      },
      {
        field: 'temperature',
        headerName: 'Temperature',
        type: 'number',
        width: 100,
        editable: true,
      },
      {
        field: 'naturalGas',
        headerName: 'Natural Gas',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'electricity',
        headerName: 'Electricity',
        type: 'number',
        width: 110,
        editable: true,
      },
    ],

    rows: [
      { id: 1, date: '2022-11-07T20:00:00Z', temperature: 5.4, naturalGas: 4628.6, electricity: 62369 },
      { id: 2, date: '2022-11-08T21:45:00Z', temperature: 8.7, naturalGas: 4639.4, electricity: 62376 },
      { id: 3, date: '2022-11-09T21:54:00Z', temperature: 9.2, naturalGas: 4645.9, electricity: 62385 },
      { id: 4, date: '2022-11-10T21:40:00Z', temperature: 7, naturalGas: 4650.1, electricity: 62391 },
      { id: 5, date: '2022-11-11T22:50:00Z', temperature: 6, naturalGas: 4655.8, electricity: 62397 },
    ],
  },

  reducers: {
    addRecord: (state) => {
      state.rows = [...state.rows, {id: state.rows.length + 1}];
    },
    updateRecord: (state, action) => {
      state.rows = state.rows.map(e => e.id === action.payload.id ? action.payload : e);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRecord, updateRecord } = billyDataSlice.actions;

export default billyDataSlice.reducer;
