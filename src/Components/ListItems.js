import React from "react";
// import {Link} from 'react-router-dom'
import Item from './Item';

export default function ListItems(props){ 
    console.log(props.currentConverter)
    let currentConverter = props.currentConverter
    const renderConverterList = props.Converters.map((Converter) => {
        if(currentConverter!==Converter.title){
            return (
                <Item Converter={Converter} key={Converter.title}></Item>
                
            )
        }else{
            return null
        }
        
    })

    return (
        <>
            <div className='mt-5 '></div>
            <div className="my-3 p-3 bg-body rounded shadow-sm"  style={{maxWidth:500}}>
                <h6 className="border-bottom pb-2 mb-0">More Converters</h6>
                
                {renderConverterList.length > 0 ? renderConverterList: "No Converter Available"}
            </div>
        </>
    )
}

