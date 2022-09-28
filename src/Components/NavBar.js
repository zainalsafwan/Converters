import React from "react";
import {Link} from 'react-router-dom'


export default function NavBar(){
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark " aria-label="Third navbar example">
            <div className="container-fluid">
            <Link to="/">
                <div className="navbar-brand" >Converter V2</div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <Link to="/">
                    <li className="nav-item">
                        <div className="nav-link active" aria-current="page" >Home</div>
                    </li>                </Link>
                <li className="nav-item">
                <Link to="/Contact"><div className="nav-link" >Contact</div></Link>
                </li>
                <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">Converters</div>
                    <ul className="dropdown-menu">
                        <li><Link to="/Distance"><div className="dropdown-item" >Distance</div></Link></li>
                        <li><Link to="/Currency"><div className="dropdown-item" >Currency</div></Link></li>
                        <li><Link to="/Time"><div className="dropdown-item" >Time</div></Link></li>
                        <li><Link to="/Weight"><div className="dropdown-item" >Weight</div></Link></li>
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </div>
    )
}

