import React from "react";
import {Link} from 'react-router-dom'


export default function Contact(){ 
    return (
        <div>
            <div className="p-2 mt-5 mb-4 bg-white rounded-5 border border-5 ">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Hello There!</h1>
                    <p className="col-md-8 fs-4 "> I'll get back to you as soon as I could, you  can always contact me via email :  </p>
                    <h5>zainalsafwan.zs@gmail.com</h5>
                    <a  className="btn btn-primary btn-lg mt-2" type="button" href = "mailto: zainalsafwan.zs@gmail.com">Send Email</a>
                </div>
            </div>
        </div>
    )
}

