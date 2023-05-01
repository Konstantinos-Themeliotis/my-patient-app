import React from "react";
import { useState } from "react";

function PrescriptionCard(props){

    const [deleteAnimation, setDeleteAnimation] = useState("")
    const [emailAnimation, setEmailAnimation] = useState("")


   

    return(
        <div className="prescription-card  border-3 rounded rounded-2">
           <div className="prescription-card-button-panel  border-3 rounded rounded-2">
           <button 
                    className={"btn btn-light delete-button"}
                    onClick={(event, id) => props.deletePrescription(event, props.prescription.prescriptionId)}
                    onMouseEnter={()=>setDeleteAnimation("fa-bounce")}
                    onMouseLeave={()=> setDeleteAnimation("")}>
                <i className={`fa-solid fa-trash ${deleteAnimation} fa-xs`} style={{color: "#ff0000"}}></i>
            {"  Delete"}</button>
            <a href={`mailto:kmthemel@gmail.com?subject=${`Prescription ${props.prescription.prescriptionId}`}&body=${props.prescription.medication}`}>
                <button 
                        className={"btn btn-light email-button"}
                        onMouseEnter={()=>setEmailAnimation("fa-bounce")}
                        onMouseLeave={()=> setEmailAnimation("")}
                        >
                    <i className={`fa-solid fa-envelope fa-xs ${emailAnimation}`}></i>
                {" Email"}</button>
            </a>
            </div>
           <div className="prescription-card-data">
           
                <h5>Medication</h5>
                <p>{props.prescription.medication}</p>
                <h5>Dosage</h5>
                <p>{props.prescription.dosage}</p>
                <h5>Instructions</h5>
                <p>{props.prescription.instructions}</p>
                <h5>Prescription Date</h5>
                <p>{props.prescription.datePrescribed}</p>
           
            </div>          
        </div>
        
    )

}



export default PrescriptionCard;