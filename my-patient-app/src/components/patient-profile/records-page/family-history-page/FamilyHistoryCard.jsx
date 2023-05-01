import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FamilyHistoryCard(props){

    const navigate = useNavigate();

    return(
        <div className="family-history-card  rounded rounded-2">
           <div className="family-history-card-button-panel rounded-bottom">
           <button 
                    className={"btn btn-light"}
                    onClick={(event, id) => props.deleteFamilyHistory(event, props.familyHistory.recordId)}
                    // onMouseEnter={()=>setDeleteAnimation("fa-bounce")}
                    // onMouseLeave={()=> setDeleteAnimation("")}
                    >
                {/* <i className={`fa-solid fa-trash ${deleteAnimation} fa-xs`} style={{color: "#ff0000"}}></i> */}
            {"  Delete"}</button>
            <button 
                onClick={() => navigate(`/patient/${props.familyHistory.patientId}/records/familyHistory/edit/${props.familyHistory.recordId}`)} 
                className={"btn btn-light"}
                // onMouseEnter={()=>setEmailAnimation("fa-bounce")}
                // onMouseLeave={()=> setEmailAnimation("")}
                >
            {/* <i className={`fa-solid fa-file-pen fa-xs ${emailAnimation}`}></i> */}
            {" Edit"}</button>
            </div>
           <div className="family-history-card-data">
                <h5>Title</h5>
                <p>{props.familyHistory.title}</p>
                <h6>Date recorded</h6>
                <p>{props.familyHistory.dateRecorded}</p>
                <h6>Full Name</h6>
                <p>{props.familyHistory.fullName}</p>
                <h6>Relative</h6>
                <p>{props.familyHistory.relative}</p>
                <h6>Date of Birth</h6>
                <p>{props.familyHistory.dateOfBirth}</p>
                <h6>History</h6>
                <p>{props.familyHistory.history}</p>
           
            </div>          
        </div>
        
    )

}

export default FamilyHistoryCard;