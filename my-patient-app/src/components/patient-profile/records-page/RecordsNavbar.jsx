import React from "react";
import { Link, useParams } from "react-router-dom";

function RecordsNavbar(){

    const {id}  = useParams();

    return(
        <div className="records-navbar">
           <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/patient/${id}/records/diagnosis`}>Diagnosis</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/patient/${id}/records/familyHistory`}>Family History</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/patient/${id}/records/notes`}>Notes</Link>
                    </li>                    
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default RecordsNavbar