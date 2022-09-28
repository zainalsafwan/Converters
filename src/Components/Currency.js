import React,{useEffect, useState} from 'react'
import RowInput from "./RowInput";
// import {Link} from 'react-router-dom'
import ListItems from './ListItems';

const API_KEY = '8d821cf762aa286617e19cf0'
const excRateAPI_base = 'https://v6.exchangerate-api.com/v6/'+API_KEY


export default function Currency(props){
    
  const [currOptions, setCurrOptions] = useState([])
  const [fromCurr, setFromCurr] = useState("")
  const [toCurr, setToCurr] = useState("")
  const [amount, setAmount] = useState(1)
  const [amountInFromCurr, setAmountInFromCurr] = useState(true)
  const [excRate, setExcRate] = useState(1)
  
  const {Converters} = props.converterInfoCards
  const currentConverter = "Currency"

  var toAmount, fromAmount
  if(amountInFromCurr){
    fromAmount = amount
    toAmount = amount * excRate
  }else{
    toAmount = amount
    fromAmount = amount / excRate
  }

  useEffect(() =>{
    fetch(excRateAPI_base+'/latest/USD')
      .then(response => response.json())
      .then(data =>
        {
        //   console.log(data)
          const firstCurrency = Object.keys(data.conversion_rates)[0]
          setCurrOptions([...Object.keys(data.conversion_rates)])
          setFromCurr(data.base_code)
          setToCurr(data.base_code)
          setExcRate(data.conversion_rates[firstCurrency])
        })
    
  },[])

  useEffect(() => {
    
    if(fromCurr !== "" || toCurr !== ""){
      fetch(excRateAPI_base+'/pair/'+fromCurr+'/'+toCurr)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setExcRate(data.conversion_rate)
        })
    }else{
      console.log("aneh")
    }
    
  },[fromCurr,toCurr])

  function handleFromAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurr(true)
  }

  function handleToAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurr(false)
  }

    return (
        <div className='mt-5'>
            <h1>Currency Converter</h1>
            <RowInput 
                valType={currOptions}
                selectedType={fromCurr}
                onChangeType={ e => {
                  setFromCurr(e.target.value) 
                }}
                amount={fromAmount}
                onChangeAmount={handleFromAmountChange}
            />
            <h2>To</h2>
            <RowInput
                valType={currOptions}
                selectedType={toCurr}
                onChangeType={ e => {
                  setToCurr(e.target.value)
                } }
                amount={toAmount}
                onChangeAmount={handleToAmountChange}
            /> 
            
            <ListItems Converters={Converters} currentConverter={currentConverter}/>
        </div>
    )
}

