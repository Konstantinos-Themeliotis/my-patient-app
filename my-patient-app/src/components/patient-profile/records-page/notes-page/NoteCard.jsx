import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NoteCard(props){
    
    const [emailAnimation, setEmailAnimation] = useState("")
    const [deleteAnimation, setDeleteAnimation] = useState("")
    const navigate = useNavigate();

    return(
        <div className="note-card  border-3 rounded rounded-2">           
           <div className="note-card-button-panel rounded-bottom">
            <button
            onClick={() => navigate(`/patient/${props.note.patientId}/records/notes/edit/${props.note.recordId}`)} 
                className={"btn btn-light"}
                onMouseEnter={()=>setEmailAnimation("fa-bounce")}
                onMouseLeave={()=> setEmailAnimation("")}
                >
            <i className={`fa-solid fa-file-pen fa-xs ${emailAnimation}`}></i>
            {" Edit"}</button>
           <button 
                    className={"btn btn-light"}
                    onClick={(event, id) => props.deleteNote(event, props.note.recordId)}
                    onMouseEnter={()=>setDeleteAnimation("fa-bounce")}
                    onMouseLeave={()=> setDeleteAnimation("")}
                    >
                <i className={`fa-solid fa-trash ${deleteAnimation} fa-xs`} style={{color: "#ff0000"}}></i>
            {"  Delete"}</button>
            </div>
           <div className="note-card-data">
                <h5>Title</h5>
                <p>{props.note.title}</p>
                <h6>Date recorded</h6>
                <p>{props.note.dateRecorded}</p>
                <h6>Note</h6>
                <p>{props.note.note}</p>
           
            </div>          
        </div>

    )

}

export default NoteCard;