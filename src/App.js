import './App.css';
import React from 'react';
import Home from './home'
import Currency from './Components/Currency'
import Distance from './Components/Distance'
import Contact from './Components/Contact'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Weight from './Components/Weight'
import Time from './Components/Time'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


const converterInfoCards = {
  "Converters" : [
      {
          "title": "Distance",
          "detail": "Convert distance unit",
          "link": "Distance"
      },
      {
          "title": "Weight",
          "detail": "Convert weight unit",
          "link": "Weight"
      },
      {
          "title": "Currency",
          "detail": "Convert currency exchange",
          "link": "Currency"
      } ,
      {
          "title": "Time",
          "detail": "Convert time unit",
          "link": "Time"
      } 
  ]
  
}


function App() {
  return (
    <div>
      
      <Router>
        <NavBar />
        <div className='container'>
        
        <Routes>
          <Route 
            path="/"
            element={<Home converterInfoCards={converterInfoCards}/>}
          />

          <Route 
            path="/Currency"
            element={<Currency converterInfoCards={converterInfoCards}/>}
          />

          <Route 
            path="/Distance"
            element={<Distance converterInfoCards={converterInfoCards}/>}
          />

          <Route 
            path="/Contact"
            element={<Contact/>}
          />

          <Route 
            path="/Weight"
            element={<Weight  converterInfoCards={converterInfoCards}/>}
          />
          
          <Route 
            path="/Time"
            element={<Time  converterInfoCards={converterInfoCards}/>}
          />
        </Routes>
        <br/>
        <Footer/>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
