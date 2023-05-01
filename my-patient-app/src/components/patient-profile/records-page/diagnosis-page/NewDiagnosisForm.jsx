import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import MedicalRecordService from "../../../../services/MedicalRecordService";

function NewDiagnosisForm(){
    
    const date = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    const navigate = useNavigate();
    const {id} = useParams();
    const [diagnosis, setDiagnosis] = useState({
        patientId : id,
        dateRecorded: formattedDate,
        recordType : "Diagnosis",
        title : "",
        diagnosis: ""
    })

    function handleChange(event){
        const {value, name} = event.target;
        setDiagnosis(prevValue => ({...diagnosis, [name]: value}));
    }


    function saveDiagnosis(event){
        event.preventDefault();
        MedicalRecordService.saveDiagnosis(diagnosis)
        .then((response) => {
            console.log(response)
            navigate(`/patient/${id}/records/diagnosis`)
        })
        .catch((error) =>{
            console.log(error)
        })
    }


    return(
        <div className="new-diagnosis-form">
            <legend> Create New Diagnosis Record </legend>
            <form autoComplete="off" onSubmit={saveDiagnosis}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className ="form-control" onChange={handleChange} value={diagnosis.title} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Diagnosis</label>
                    <textarea name="diagnosis"  className="form-control" onChange={handleChange} value={diagnosis.diagnosis} rows="6" cols="50"required/>
                    
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => navigate(-1)}>Cancel</button>
            </form>

        </div>
    )
}

export default NewDiagnosisForm;

