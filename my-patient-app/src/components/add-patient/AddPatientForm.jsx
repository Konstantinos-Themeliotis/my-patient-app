import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PatientService from "../../services/PatientService";



function AddPatientForm(){

    const navigate = useNavigate();


    const [patient, setPatient] = useState({
        id : "",
        firstName : "",
        lastName : "",
        socialSecurityNumber : "",
        emailId : "",
        telephoneNumber : "",
        homeAddress : ""
    });

    function handleChange(event){
        const {value, name} = event.target;
        setPatient(prevValue => ({...patient, [name]: value}));
    } 

    function savePatient(event){
        event.preventDefault();
        PatientService.savePatient(patient)
            .then((response) =>{
                console.log(response)
                navigate(`/patient/${response.data.id}`)
            })
            .catch((error) =>{
                console.log(error)
            })
        }

    return(
        <div className="patient-form">
            <legend> Register New Patient </legend>
            <form onSubmit={savePatient} autoComplete="off">
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstName" value={patient.firstName} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastName" value={patient.lastName} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Social Security Number</label>
                    <input type="text" name="socialSecurityNumber" value={patient.socialSecurityNumber} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name="emailId" value={patient.emailId} onChange={handleChange} className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Telephone</label>
                    <input type="text" name="telephoneNumber" value={patient.telephoneNumber} onChange={handleChange} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Home address</label>
                    <input type="text" name="homeAddress" value={patient.homeAddress} onChange={handleChange} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-outline-danger"  onClick={() => navigate("/")}>Cancel</button>
            </form>
        </div>
    );
}

export default AddPatientForm;