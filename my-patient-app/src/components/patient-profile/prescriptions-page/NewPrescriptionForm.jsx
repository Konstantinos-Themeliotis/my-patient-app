import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import PrescriptionService from "../../../services/PrescriptionService";

function NewPrescriptionForm(){

    const date = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    const navigate = useNavigate();
    const {id}  = useParams();
    const [prescription, setPrescription] = useState({
        patientId : id,
        medication : "",
        dosage : "",
        instructions: "",
        datePrescribed : formattedDate
    });

    function handleChange(event){
        const {value, name} = event.target;
        setPrescription(prevValue => ({...prescription, [name]: value}));
    }

    function savePrescription(event){
        event.preventDefault();
        PrescriptionService.savePrescription(prescription)
            .then((response) =>{
                console.log(response)
                navigate(`/patient/${response.data.patientId}/prescriptions`)
            })
            .catch((error) =>{
                console.log(error)
            })
    }


    return(
        <div className="new-prescription-form">
            <legend> Create New Prescription </legend>
            <form autoComplete="off" onSubmit={savePrescription}>
                <div className="mb-3">
                    <label className="form-label">Medication</label>
                    <input type="text" name="medication" className ="form-control" onChange={handleChange} value={prescription.medication} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Dosage</label>
                    <input type="text" name="dosage"  className="form-control" onChange={handleChange} value={prescription.dosage} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Instructions</label>
                    <textarea name="instructions"  className="form-control" onChange={handleChange} value={prescription.instructions} rows="6" cols="50"required/>
                </div>
                <button type="submit" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => navigate(-1)}>Cancel</button>
            </form>
            
        </div>
    )
}

export default NewPrescriptionForm;