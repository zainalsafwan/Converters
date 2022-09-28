import React from "react";
import {Link} from 'react-router-dom'


export default function Footer(){ 
    return (
        <div >
            <div className="container">
                <footer className="py-3 my-4 footer">
                    <ul className="nav justify-content-center border-top pb-3 mb-3 ">
                        <li className="nav-item"><Link to="/"><p className="nav-link px-2 text-muted ">Home</p></Link></li>
                        <li className="nav-item"><Link to="/Contact"><p className="nav-link px-2 text-muted">Contact</p></Link></li>
                        <li className="nav-item"><Link to="/"><p className="nav-link px-2 text-muted">GitHub</p></Link></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

