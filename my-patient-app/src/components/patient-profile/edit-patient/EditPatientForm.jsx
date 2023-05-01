import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import PatientService from "../../../services/PatientService";


function EditPatientForm(){

    const [invalid, setInvalid] = useState("")
    const [invalidMessage, setInvalidMessage] = useState("")
    const navigate = useNavigate();
    const {id}  = useParams();
    const [loading, setLoading] = useState(true)
    const [patient, setPatient] = useState({
        id: id,
        firstName: "",
        lastName: "",
        socialSecurityNumber: "",
        dateOfBirth : "",
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
            if(error.response.data === "Duplicate SSN"){
                setInvalid("is-invalid")
                setInvalidMessage(<i>{"This social security number already exists!"}</i>)
            }
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
                    <input type="text" pattern="^[A-Za-z]+$" name="firstName" className ="form-control" onChange={handleChange} value={patient.firstName} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" pattern="^[A-Za-z]+$"  name="lastName"  className="form-control" onChange={handleChange} value={patient.lastName} required/>
                </div>
                <div className="mb-3 ">
                    <label className="form-label">Social Security Number</label>
                    <input type="text" pattern="^[0-9]+$" name="socialSecurityNumber" id="floatingInputInvalid" value={patient.socialSecurityNumber} onChange={handleChange} className={`form-control ${invalid}`} required/>
                    <label className="form-floating" for="floatingInputInvalid">{invalidMessage}</label>
                </div>
                 <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" name="dateOfBirth" value={patient.dateOfBirth} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name="emailId"  className="form-control" onChange={handleChange} value={patient.emailId} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Telephone</label>
                    <input type="text" pattern="[0-9]{10}" name="telephoneNumber"  className="form-control" onChange={handleChange} value={patient.telephoneNumber}/>
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