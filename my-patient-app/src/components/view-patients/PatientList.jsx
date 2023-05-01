import React, { useEffect } from "react";
import { useState } from "react";
import PatientService from "../../services/PatientService";
import PatientListData from "./PatientListData";



function PatientList(){
    
    
    const [patients, setPatients] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try{
            const response = await PatientService.getPatients();
            setPatients(response.data)
        }catch(error){
            console.log(error);
        }
        setLoading(false)
      }; 
      fetchData()
    }, []);
    
    function deletePatient(event, id){
        event.preventDefault()
        PatientService.deletePatient(id).then((res) =>{
            if(patients){
                setPatients((prevElement) =>{
                    return prevElement.filter((patient) => patient.id !== id)
                })
            }
        })
    }
    
    return(
        <div className="patients-list">
            <table className="table table-light">
                <thead>
                    <tr className="table-info">
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Social Security Number</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>
                {!loading && (
                <tbody>
                    {patients.map((patient) =>(
                        <PatientListData patient = {patient} key={patient.id} deletePatient={deletePatient}/>
                    ))}
                </tbody>
                )}
            </table>

        </div>
    );
}

export default PatientList;