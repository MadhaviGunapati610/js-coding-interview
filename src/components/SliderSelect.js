import React, { useState } from 'react';
import SliderComponet from './common/SliderComponent';
const SliderSelect = () => {
    const [defaultValue, setDefaultValue] = useState(2000);
    const [adjustedAmount, setAdjustedAmount] = useState(defaultValue);
    const onSliderChange = (e, value) => {
        if (value !== defaultValue) {
            setDefaultValue(e);
            setAdjustedAmount(e)
        }
    }
    return (
        <>
            <SliderComponet minAmount={1000} maxAmount={5000} unit={'$'} defaultValue={defaultValue} step={100} label={'Home Value'} adjustedAmount={adjustedAmount} handleChange={(e, value) => onSliderChange(e.target.value, value)} />
            <SliderComponet minAmount={1000} maxAmount={5000} unit={'$'} defaultValue={3000} step={100} label={'Down Payment'} adjustedAmount={adjustedAmount} handleChange={(e) => onSliderChange(e.target.value)} />
            <SliderComponet minAmount={1000} maxAmount={5000} unit={'$'} defaultValue={3000} step={100} label={'Loan Amount'} adjustedAmount={adjustedAmount} handleChange={(e) => onSliderChange(e.target.value)} />
            <SliderComponet minAmount={1} maxAmount={10} unit={'%'} defaultValue={2} step={1} label={"Interest"} adjustedAmount={adjustedAmount} handleChange={(e) => onSliderChange(e.target.value)} />
        </>
    )
}

export default SliderSelect;