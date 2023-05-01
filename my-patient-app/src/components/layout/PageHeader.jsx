import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function PageHeader(){
    const navigate = useNavigate();
    const [animation, setAnimation] = useState("")

    function startAnimation(){
        setAnimation("fa-beat-fade")
    }
    
    function stopAnimation(){
        setAnimation("")
    }

    return(
        <header className="page-header">
            <h1> My Patient </h1>
            <i className={`fa-solid fa-heart-pulse ${animation} fa-2xl  header-icon`} onMouseEnter={startAnimation} onMouseLeave={stopAnimation} onClick={() => navigate("/")}></i> 
            
        </header>
    );
}

export default PageHeader;