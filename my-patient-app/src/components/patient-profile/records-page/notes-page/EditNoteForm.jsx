import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MedicalRecordService from "../../../../services/MedicalRecordService";

function EditNoteForm(){

    const date = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const {id, rid} = useParams();
    const [note, setNote] = useState({
        recordId: rid,
        patientId : id,
        dateRecorded: formattedDate,
        recordType : "Note",
        title : "",
        note: ""
    })

    function handleChange(event){
        const {value, name} = event.target;
        setNote(prevValue => ({...note, [name]: value}));
    }

    // Fetch the record from the database
    useEffect((depend) => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await MedicalRecordService.getNoteById(rid);
                setNote(response.data)
                console.log(response)
            }catch(error){
            
                console.log(error);
            }
            setLoading(false)
        }; 
        fetchData()
        }, [id]);


    function updateNote(event){
        event.preventDefault();
        MedicalRecordService.updateNote(rid, note)
        .then((response) => {
            console.log(response)
            navigate(`/patient/${id}/records/notes`)
        })
        .catch((error) =>{
            console.log(error)
        })

        
    }

    if (loading) {
        return <div>Loading...</div>;
        }

    return(
        <div className="new-note-form">
            <legend> Create New Note </legend>
            <form autoComplete="off" onSubmit={updateNote}>
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

export default EditNoteForm;