import React from "react";
import RecordsNavbar from "../RecordsNavbar";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MedicalRecordService from "../../../../services/MedicalRecordService";
import NoteCard from "./NoteCard";

function NotesRecords(){

    const [iconAnimation, setIconAnimation] = useState("")
    const navigate = useNavigate();
    const {id}  = useParams();
    const [notes, setNotes] = useState(null)
    const [loading, setLoading] = useState(true)


    // Fetch data from database.
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try{
              const response = await MedicalRecordService.getNotes(id)
              setNotes(response.data)
              console.log(response)

          }catch(error){
              console.log(error);
          }
          setLoading(false)
        }; 
        fetchData()
      }, [id]);


    function deleteNote(event, id){
        event.preventDefault()
        MedicalRecordService.deleteNote(id).then((res) =>{
            if(notes){
                setNotes((prevElement) =>{
                    return prevElement.filter((notes) => notes.recordId !== id)
                })
            }
        })
    }
    
    if (loading) {
        return <RecordsNavbar />
    }
    
    return(
        <div className="family-history-page">
            <RecordsNavbar />
                <button  className="btn btn-light"  
                    onClick={() => navigate(`/patient/${id}/records/notes/add`)}
                    onMouseEnter={() => setIconAnimation("fa-flip")} 
                    onMouseLeave={() => setIconAnimation("")}> 
                <i className= {`fa-solid fa-plus fa-lg ${iconAnimation}`} style={{color: "#098500"}}></i>
                {"  New Notes Record"}</button>
                <button 
                className="btn btn-light"
                onClick={() => navigate(`/patient/${id}`)}>
                <i class={"fa-solid fa-user fa-sm"}></i> 
                {"   Profile"} </button>
            <div className="family-history-panel">
                {notes.map((note) =>(
                        <NoteCard note = {note} deleteNote ={deleteNote}/>
                ))}
            </div>

        </div>
    )
}

export default NotesRecords;