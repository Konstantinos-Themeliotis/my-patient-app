import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DiagnosisCard(props){

    const navigate = useNavigate();


    return(
        <div className="diagnosis-card  border-3 rounded rounded-2">
           <div className="diagnosis-card-button-panel rounded-bottom">
            <button 
                    className={"btn btn-light"}
                    onClick={(event, id) => props.deleteDiagnosis(event, props.diagnosis.recordId)}
                    // onMouseEnter={()=>setDeleteAnimation("fa-bounce")}
                    // onMouseLeave={()=> setDeleteAnimation("")}
                    >
                {/* <i className={`fa-solid fa-trash ${deleteAnimation} fa-xs`} style={{color: "#ff0000"}}></i> */}
            {"  Delete"}</button>
            <button
                onClick={() => navigate(`/patient/${props.diagnosis.patientId}/records/diagnosis/edit/${props.diagnosis.recordId}`)}
                className={"btn btn-light"}
                // onMouseEnter={()=>setEmailAnimation("fa-bounce")}
                // onMouseLeave={()=> setEmailAnimation("")}
                >
            {/* <i className={`fa-solid fa-file-pen fa-xs ${emailAnimation}`}></i> */}
            {" Edit"}</button>
            </div>
           <div className="diagnosis-card-data">
                <h5>Title</h5>
                <p>{props.diagnosis.title}</p>
                <h6>Date recorded</h6>
                <p>{props.diagnosis.dateRecorded}</p>
                <h6>Diagnosis</h6>
                <p>{props.diagnosis.diagnosis}</p>
           
            </div>          
        </div>
    )

}

export default DiagnosisCard;