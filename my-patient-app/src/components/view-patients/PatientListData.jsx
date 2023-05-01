import React from "react";
import { useNavigate } from "react-router-dom";

function PatientListData(props){
    
    const navigate = useNavigate();

    
    return(
        <tr key={props.patient.id}>
            <td>{props.patient.firstName}</td>
            <td>{props.patient.lastName}</td>
            <td>{props.patient.socialSecurityNumber}</td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={() => navigate(`/patient/${props.patient.id}`)}>
                View</button>
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={(event, id) => props.deletePatient(event, props.patient.id)}>
                Delete</button>

            </td>
        </tr>
     
    );
}

export default PatientListData;