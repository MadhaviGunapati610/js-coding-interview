import { Slider, Stack, Typography } from '@mui/material';
import React from 'react';
const SliderComponet = ({ defaultValue, step, handleChange, label, adjustedAmount, minAmount, maxAmount, unit }) => {
  return (
    <Stack spacing={1}>
      <Stack spacing={3}>
        <Typography>{label}</Typography>
        <Typography>{adjustedAmount}</Typography>
      </Stack>
      <Slider
        aria-label="Temperature"
        defaultValue={defaultValue}
        valueLabelDisplay="auto"
        step={step}
        marks
        min={minAmount}
        max={maxAmount}
        onChange={handleChange}
      />
      <Stack spacing={1} direction='row' justifyContent="space-between">
        <Typography varient='caption' color='text.secondary'>{unit}{minAmount}</Typography>
        <Typography varient='caption' color='text.secondary'>{unit}{maxAmount}</Typography>
      </Stack>
    </Stack>
  )
}

export default SliderComponet;