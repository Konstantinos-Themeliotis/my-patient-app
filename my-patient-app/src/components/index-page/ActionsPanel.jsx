import React from "react";
import { useNavigate } from "react-router-dom";



function ActionsPanel(){

    const navigate = useNavigate();

    return(
        <div className="action-panel">
            <div className="d-grid gap-4 col-9 mx-auto">
                <button className="btn btn-primary" type="button" onClick={() => navigate("/addPatient")} >Register New Patient</button>
                <button className="btn btn-primary" type="button" onClick={() => navigate("/viewPatients")}>View All Patients</button>

            </div>
        </div>
    );
}

export default ActionsPanel