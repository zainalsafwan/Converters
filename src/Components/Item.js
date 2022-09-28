import React from "react";
import {Link} from 'react-router-dom'


export default function Item(props){
    const { title, detail,link  } = props.Converter
    // let link = "Currency"
    console.log("props")
    console.log(props)
    return (
        <div className="d-flex text-muted pt-3">
            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">{title} Converter</strong>
                    <Link to={`/${link}`}><button type="button" className="w-100 btn cmall btn-outline-primary">Try Now</button></Link>
                </div>
                <h6 className="d-block">{detail}</h6>
            </div>
        </div>
    )
}

