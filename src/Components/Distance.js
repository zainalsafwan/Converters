import React,{useEffect, useState} from 'react'
import RowInput from "./RowInput";
// import {Link} from 'react-router-dom'
import ListItems from './ListItems';

const data = {
    "base_code" : "km",
    "conversion_rates" : {
        "cm" :100000,
        "m" : 1000,
        "km" : 1,
        "mile" : 0.621371,
        "ft" : 3280.84,
        "yard" : 1093.61,
        "inch" : 39370.1
    }
    
}

export default function Distance(props){
        
    const [valOptions, setValOptions] = useState([])
    const [fromVal, setFromVal] = useState("")
    const [toVal, setToVal] = useState("")
    const [amount, setAmount] = useState(1)
    const [amountInFromVal, setAmountInFromVal] = useState(true)
    const [excRate, setExcRate] = useState(1)
    
    const {Converters} = props.converterInfoCards
    const currentConverter = "Distance"

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
                <h1>Distance Converter</h1>
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

 