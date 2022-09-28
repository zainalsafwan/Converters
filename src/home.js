import React from "react";
import ConverterCards from "./Components/ConverterCards";


export default function home(props){
    
    const {Converters} = props.converterInfoCards

    const renderConverterList = Converters.map((Converter) => {
        return (
            <ConverterCards Converter={Converter} key={Converter.title}></ConverterCards>
            
        )
    })

    return (
        <div>
            <h1>
                Welcome to Units Converter 
            </h1>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {renderConverterList.length > 0 ? renderConverterList: "No Converter Available"}
            </div>
        </div>
    )
}

