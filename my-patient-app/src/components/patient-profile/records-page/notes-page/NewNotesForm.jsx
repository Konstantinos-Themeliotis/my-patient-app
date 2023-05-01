import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import MedicalRecordService from "../../../../services/MedicalRecordService";

function NewNotesForm(){

    const date = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    const navigate = useNavigate();
    const {id} = useParams();
    const [note, setNote] = useState({
        patientId : id,
        dateRecorded: formattedDate,
        recordType : "Diagnosis",
        title : "",
        note: ""
    })

    function handleChange(event){
        const {value, name} = event.target;
        setNote(prevValue => ({...note, [name]: value}));
    }

    function saveNote(event){
        event.preventDefault();
        MedicalRecordService.saveNote(note)
        .then((response) => {
            console.log(response)
            navigate(`/patient/${id}/records/notes`)
        })
        .catch((error) =>{
            console.log(error)
        })

        
    }

    return(
        <div className="new-note-form">
            <legend> Create New Note </legend>
            <form autoComplete="off" onSubmit={saveNote}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className ="form-control" onChange={handleChange} value={note.title} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Note</label>
                    <textarea name="note"  className="form-control" onChange={handleChange} value={note.note} rows="6" cols="50"required/>
                    
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => navigate(-1)}>Cancel</button>
            </form>
        </div>
    )
}

export default NewNotesForm;