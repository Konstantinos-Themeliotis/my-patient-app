import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import MedicalRecordService from "../../../../services/MedicalRecordService";


function NewFamilyHistoryForm(){

    const date = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    const navigate = useNavigate();
    const {id} = useParams();
    const [familyHistory, setFamilyHistory] = useState({
        patientId : id,
        dateRecorded: formattedDate,
        recordType : "Diagnosis",
        title : "",
        fullName: "",
        relative: "",
        dateOfBirth: "",
        history : "",
    })

    function handleChange(event){
        const {value, name} = event.target;
        setFamilyHistory(prevValue => ({...familyHistory, [name]: value}));
    }

    function saveFamilyHistory(event){
        event.preventDefault();
        MedicalRecordService.saveFamilyHistory(familyHistory)
        .then((response) => {
            console.log(response)
            navigate(`/patient/${id}/records/familyHistory`)
        })
        .catch((error) =>{
            console.log(error)
        })

    }

    return(
        <div className="new-family-history-form">
            <legend> Create New Family History Record </legend>
            <form autoComplete="off" onSubmit={saveFamilyHistory}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className ="form-control" onChange={handleChange} value={familyHistory.title} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">FullName</label>
                    <input type="text" name="fullName" className ="form-control" onChange={handleChange} value={familyHistory.fullName} required/>                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Relative</label>
                    <input type="text" name="relative" className ="form-control" onChange={handleChange} value={familyHistory.relative} required/>                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input type="text" name="dateOfBirth" className ="form-control" onChange={handleChange} value={familyHistory.dateOfBirth} required/>                    
                </div>
                <div className="mb-3">
                    <label className="form-label">History</label>
                    <textarea name="history"  className="form-control" onChange={handleChange} value={familyHistory.history} rows="6" cols="50"required/>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => navigate(-1)}>Cancel</button>
            </form>
        </div>
    )
}

export default NewFamilyHistoryForm;