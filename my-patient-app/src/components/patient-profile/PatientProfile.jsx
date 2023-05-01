import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToolBar from "./Toolbar";
import PatientService from "../../services/PatientService";

function PatientProfile(){

    const [patient, setPatient] = useState(null)
    const {id}  = useParams();
    const [loading, setLoading] = useState(true)


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
        <div className="patient-panel border-3 rounded rounded-2">
            <header className="panel-header rounded-top ">
                <h3> Patient</h3>
            </header>
            <ToolBar id={patient.id}/>
            <table className = "table table-primary">
                <tr className = "table-primary">
                    <th>First Name</th>
                    <td>{patient.firstName}</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>{patient.lastName}</td>
                </tr>
                <tr>
                    <th>Social Security Number</th>
                    <td>{patient.socialSecurityNumber}</td>
                </tr>
                <tr>

                    <th>Email</th>
                    <td><a className="mail-link" style={{ backgroundColor: "rgb(255, 234, 208)", paddingLeft:"0px" }} href={"mailto:"+patient.emailId}>{patient.emailId}</a></td>
                </tr>
                <tr>
                    <th>Telephone</th>
                    <td>{patient.telephoneNumber}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>{patient.homeAddress}</td>
                </tr>
            </table>

        </div>
    );
}

export default PatientProfile;