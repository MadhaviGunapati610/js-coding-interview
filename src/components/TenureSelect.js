import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';

export default function TenureSelect() {
  const [years, setYears] = React.useState('');

  const handleChange = (event) => {
    setYears(event.target.value);
  };

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={years}
          label="Tenure"
          onChange={handleChange}
        >
          <MenuItem value={10}>10 Years</MenuItem>
          <MenuItem value={20}>20 Years</MenuItem>
          <MenuItem value={30}>30 Years</MenuItem>
        </Select>
      </FormControl>
  );
}