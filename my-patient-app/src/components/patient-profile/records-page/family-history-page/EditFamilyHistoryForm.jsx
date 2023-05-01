import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MedicalRecordService from "../../../../services/MedicalRecordService";


function EditFamilyHistoryForm(){

    const date = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();
    const {id, rid} = useParams();
    const [familyHistory, setFamilyHistory] = useState({
        recordId : rid,
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



    useEffect((depend) => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await MedicalRecordService.getFamilyHistoryById(rid);
                setFamilyHistory(response.data)
                console.log(response)
            }catch(error){
            
                console.log(error);
            }
            setLoading(false)
        }; 
        fetchData()
        }, [id]);

    function updateFamilyHistory(event){
        event.preventDefault();
        MedicalRecordService.updateFamilyHistory(rid, familyHistory)
        .then((response) => {
            console.log(response)
            navigate(`/patient/${id}/records/familyHistory`)
        })
        .catch((error) =>{
            console.log(error)
        })

    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <div className="new-family-history-form">
            <legend> Create New Family History Record </legend>
            <form autoComplete="off" onSubmit={updateFamilyHistory}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className ="form-control" onChange={handleChange} value={familyHistory.title} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">FullName</label>
                    <input type="text"  pattern="^[A-Za-z]+$" name="fullName" className ="form-control" onChange={handleChange} value={familyHistory.fullName} required/>                    
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

export default EditFamilyHistoryForm;