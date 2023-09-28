import React, { useState } from 'react';
import SliderComponet from './common/SliderComponent';
const SliderSelect = () => {
    // const mortgageData = {
    //     homeValue: 5000,
    //     downPayment: 3000,
    //     loanAmount: 2000,
    //     interest: 5,
    // }
    const [data, setData] = useState({
        homeValue: 5000,
        downPayment: 3000 * 0.2,
        loanAmount: 3000 * 0.8,
        loanTerm: 3000,
        interest: 5,
    });
    return (
        <>
            <SliderComponet minAmount={1000} value={data.homeValue} maxAmount={10000} unit={'$'} defaultValue={data.homeValue} step={100} label={'Home Value'} adjustedAmount={data.homeValue} handleChange={(e, value) => setData({...data, downPayment:value*0.2,loanAmount: value*0.8, homeValue:e.target.value})} />
            <SliderComponet minAmount={0} value={data.downPayment} maxAmount={data.homeValue} unit={'$'} defaultValue={data.downPayment} step={100} label={'Down Payment'} adjustedAmount={data.downPayment} handleChange={(e, value) => setData({...data, downPayment:e.target.value, loanAmount:(data.homeValue-value) })} />
            <SliderComponet minAmount={0} value={data.loanAmount} maxAmount={data.homeValue} unit={'$'} defaultValue={data.loanAmount} step={100} label={'Loan Amount'} adjustedAmount={data.loanAmount} handleChange={(e, value) => setData({...data,loanAmount:e.target.value, downPayment:(data.homeValue-value)})} />
            <SliderComponet minAmount={2} value={data.interest} maxAmount={18} unit={'%'} defaultValue={data.interest} step={0.5} label={"Interest"} adjustedAmount={data.interest} handleChange={(e, value) => setData({...data, interest:e.target.value})} />
        </>
    )
}

export default SliderSelect;