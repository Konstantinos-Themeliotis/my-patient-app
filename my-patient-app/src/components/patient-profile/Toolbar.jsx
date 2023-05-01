import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function ToolBar(props){
    
    const bounce = "fa-bounce"
    const navigate = useNavigate();
    const [editAnimation, setEditAnimation] = useState("")
    const [recordsAnimation, setRecordsAnimation] = useState("")
    const [medicationAnimation, setMedicationAnimation] = useState("")

    
    return(

        <div className="patient-page-toolbar rounded-bottom">
            <button 
                    className="btn btn-light" 
                    title="Edit patient info" 
                    onMouseEnter={() => setEditAnimation(bounce)} 
                    onMouseLeave={() =>setEditAnimation("")} 
                    onClick={() => navigate(`/patient/${props.id}/edit`)}>
                <i className={`fa-solid fa-user-pen ${editAnimation} fa-sm`}></i> Edit
            </button>
            <button 
                    className="btn btn-light"  
                    title="Patients medical records" 
                    onMouseEnter={() => setRecordsAnimation(bounce)} 
                    onMouseLeave={() => setRecordsAnimation("")} 
                    onClick={() => navigate(`/patient/${props.id}/records`)}>
                <i className={`fa-solid fa-file-medical ${recordsAnimation} fa-sm`}></i> Records
            </button>
            <button 
                    className="btn btn-light " 
                    title="Medication" 
                    onMouseEnter={() => setMedicationAnimation(bounce)} 
                    onMouseLeave={() => setMedicationAnimation("")} 
                    onClick={() => navigate(`/patient/${props.id}/prescriptions`)}>
                <i class={`fa-solid fa-prescription-bottle-medical ${medicationAnimation} fa-sm`}></i> Prescriptions
            </button>
        </div>
    )
}

export default ToolBar;