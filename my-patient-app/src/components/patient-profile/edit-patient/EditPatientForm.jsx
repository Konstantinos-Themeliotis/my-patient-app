import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import PatientService from "../../../services/PatientService";


function EditPatientForm(){

    const navigate = useNavigate();
    const {id}  = useParams();
    const [loading, setLoading] = useState(true)
    const [patient, setPatient] = useState({
        id: id,
        firstName: "",
        lastName: "",
        socialSecurityNumber: "",
        emailId: "",
        telephoneNumber: "",
        homeAddress: ""
    });

    
    function handleChange(event){
        const {value, name} = event.target;
        setPatient(prevValue => ({...patient, [name]: value}));
    } 

    
    
    
    function updatePatient(event){
        event.preventDefault();
        PatientService.updatePatient(patient, id)
        .then((response) =>{
            console.log(response)
            navigate(`/patient/${id}`)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    
    useEffect((depend) => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await PatientService.getPatientById(id);
                setPatient(response.data)
            }catch(error){
            
                console.log(error);
            }
            setLoading(false)
        }; 
        fetchData()
        }, [id]);

        if (loading) {
        return <div>Loading...</div>;
        }

    return(
        <div className="patient-form">
            <legend> Edit Patient </legend>
            <form autoComplete="off" onSubmit={updatePatient}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstName" className ="form-control" onChange={handleChange} value={patient.firstName} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastName"  className="form-control" onChange={handleChange} value={patient.lastName} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Social Security Number</label>
                    <input type="text" name="socialSecurityNumber"  className="form-control" onChange={handleChange} value={patient.socialSecurityNumber}required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name="emailId"  className="form-control" onChange={handleChange} value={patient.emailId} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Telephone</label>
                    <input type="text" name="telephoneNumber"  className="form-control" onChange={handleChange} value={patient.telephoneNumber}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Home address</label>
                    <input type="text" name="homeAddress"  className="form-control" onChange={handleChange} value={patient.homeAddress}/>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => navigate(-1)}>Cancel</button>
            </form>

        </div>
    )
}

export default EditPatientForm;