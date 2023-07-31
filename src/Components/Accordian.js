import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Accordion({ age, handleChange }) {
  return (
    <Box sx={{ minWidth: 120, paddingBottom: '10px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Search by..</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Search by.."
          onChange={handleChange}
        >
          <MenuItem value={10}>Name</MenuItem>
          <MenuItem value={20}>Keyword</MenuItem>
          <MenuItem value={30}>Tags</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}