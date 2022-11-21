import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import {
  addRecord,
  updateRecord,
} from './app/billy-data'

const EditData = ({ value }) => {
  const columns = useSelector((state) => state.billyData.columns);
  const rows = useSelector((state) => state.billyData.rows);
  const dispatch = useDispatch();

  const processRowUpdate = (newRow, oldRow) => {
    dispatch(updateRecord(newRow));
    return newRow;
  }

  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={processRowUpdate}
      />
      <Button variant="contained" size="small" onClick={() => dispatch(addRecord())}>
        Add record
      </Button>
    </Box>
  );
}

export default EditData;
