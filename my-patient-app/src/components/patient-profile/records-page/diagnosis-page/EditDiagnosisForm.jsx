import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MedicalRecordService from "../../../../services/MedicalRecordService";

function EditDiagnosisForm(){
    
    const date = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const {id, rid} = useParams();
    const [diagnosis, setDiagnosis] = useState({
        patientId : id,
        recordId: rid,
        dateRecorded: formattedDate,
        recordType : "Diagnosis",
        title : "",
        diagnosis: ""
    })

    function handleChange(event){
        const {value, name} = event.target;
        setDiagnosis(prevValue => ({...diagnosis, [name]: value}));
    }


      // Fetch the record from the database
      useEffect((depend) => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await MedicalRecordService.getDiagnosisById(rid);
                setDiagnosis(response.data)
                console.log(response)
            }catch(error){
            
                console.log(error);
            }
            setLoading(false)
        }; 
        fetchData()
        }, [id]);



    function updateDiagnosis(event){
        event.preventDefault();
        MedicalRecordService.updateDiagnosis(rid, diagnosis)
        .then((response) => {
            console.log(response)
            navigate(`/patient/${id}/records/diagnosis`)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    if (loading) {
        return <div>Loading...</div>;
        }
    return(
        <div className="new-diagnosis-form">
            <legend> Create New DiagnosisRecord </legend>
            <form autoComplete="off" onSubmit={updateDiagnosis}>
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

export default EditDiagnosisForm;

