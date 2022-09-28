import React from "react";
import {Link} from 'react-router-dom'


export default function ConvertercCards(props){
    const { title, detail,link  } = props.Converter
    return (
        <div>
            
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">{title}</h4>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{detail}</li>
                    </ul>
                    
                    <Link to={`/${link}`}><button type="button" className="w-100 btn btn-lg btn-outline-primary">Convert {title}</button></Link>
                </div>
                </div>
            </div>
            
        </div>
    )
}

