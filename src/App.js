import { Routes, Route } from "react-router-dom"; 
import Main from "./components/Main";
import Phone from './components/Phone'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from "./components/Home";
import "./App.css";

const divStyle = {
  display:'flex',
  flexDirection:'row'
}

export default function App(){
  const [phones, setPhones] = useState([])
    const getPhonesFromAPI = () =>{
       axios.get(`${process.env.REACT_APP_API_URL}/api/phones`)
            .then((res) =>{
              console.log(res.data)
              setPhones(res.data)})
            .catch((e) => {
                console.log("error in getting the phonesInfo from API", e)
            })
    }
    useEffect(() => getPhonesFromAPI(), []);

  return (
    <div className="position-relative" style={divStyle}>
      <div className="container text-center">
        <div className="position-absolute top-0 start-0">
          <Main phones={phones} />
        </div>
        <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Phone />} />
            </Routes>
        </div>
        </div>
      </div>
   
  )
}