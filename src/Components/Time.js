import React,{useEffect, useState} from 'react'
import RowInput from "./RowInput";
// import {Link} from 'react-router-dom'
import ListItems from './ListItems';

const data = {
    "base_code" : "hour",
    "conversion_rates" : {
        "Milisecond" :3.6e+6,
        "Microsecond" : 3.6e+9,
        "Nanosecond" : 3.6e+12,
        "Picosecond" : 3.6e+15,
        "Minute" : 60,
        "Hour" : 1,
        "Day" : 0.0416667,
        "Week" : 0.00595238,
        "Month" : 0.00136986,
        "Year" : 0.000114155
    }
    
}

export default function Time(props){
        
    const [valOptions, setValOptions] = useState([])
    const [fromVal, setFromVal] = useState("")
    const [toVal, setToVal] = useState("")
    const [amount, setAmount] = useState(1)
    const [amountInFromVal, setAmountInFromVal] = useState(true)
    const [excRate, setExcRate] = useState(1)
    
    const {Converters} = props.converterInfoCards
    const currentConverter = "Time"

    var toAmount, fromAmount
    if(amountInFromVal){
        fromAmount = amount
        toAmount = amount * excRate
    }else{
        toAmount = amount
        fromAmount = amount / excRate
    }

    useEffect(() =>{
        console.log(data)
        const firstCode = Object.keys(data.conversion_rates)[0]
        setValOptions([...Object.keys(data.conversion_rates)])
        setFromVal(data.base_code)
        setToVal(firstCode)
        setExcRate(data.conversion_rates[firstCode])
        
    },[])

    useEffect(() => {
        
        if(fromVal !== "" || toVal !== ""){
            console.log(data.conversion_rates[fromVal])
            console.log(data.conversion_rates["km"])
            console.log(data.conversion_rates[toVal])
            let newRate = 1/data.conversion_rates[fromVal]* data.conversion_rates[toVal]
            
            console.log(newRate)
            setExcRate(newRate)
            
        }else{
            console.log("aneh")
        }
        
    },[fromVal,toVal])

    function handleFromAmountChange(e){
        setAmount(e.target.value)
        setAmountInFromVal(true)
    }

    function handleToAmountChange(e){
        setAmount(e.target.value)
        setAmountInFromVal(false)
    }

    
    return (
        <div className='mt-5'>
            <form>
                <h1>Time Converter</h1>
                <RowInput 
                    valType={valOptions}
                    selectedType={fromVal}
                    onChangeType={ e => {
                    setFromVal(e.target.value) 
                    }}
                    amount={fromAmount}
                    onChangeAmount={handleFromAmountChange}
                />
                <h2>To</h2>
                <RowInput
                    valType={valOptions}
                    selectedType={toVal}
                    onChangeType={ e => {
                    setToVal(e.target.value)
                    } }
                    amount={toAmount}
                    onChangeAmount={handleToAmountChange}
                /> 
            </form>
            <ListItems Converters={Converters} currentConverter={currentConverter}/>
        </div>
    )
}

 