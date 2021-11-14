import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom'
import Container from './container'

function App() {
    const [path,setPath]=useState(window.location.pathname);
    const location=useLocation();
    useEffect(()=>{
        console.log("rendred")
    },[location]);

    return (
        <>
            <Container/>
        </>
    );
}

export default App;
