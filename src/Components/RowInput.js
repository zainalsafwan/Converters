import React from "react";

export default function RowInput(props){
    const {valType, selectedType, onChangeType, amount, onChangeAmount} = props
    return (
        <div className="input-group ">
            <div >
                <input type="number" value={amount} onChange={onChangeAmount}/>
            </div>
            <select value={selectedType} onChange={onChangeType}>
                {valType.map(option => (
                    <option key={option} value={option}>{option}</option>

                ))}
                
            </select>
        </div>
    )
}

