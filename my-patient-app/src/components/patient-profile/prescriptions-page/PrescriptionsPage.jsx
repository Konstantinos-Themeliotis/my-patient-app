import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrescriptionCard from "./PrescriptionCard";
import PrescriptionService from "../../../services/PrescriptionService";
import { useState, useEffect } from "react";

function PrescriptionsPage(){

    const navigate = useNavigate();
    const {id}  = useParams();
    const [prescriptions, setPrescriptions] = useState(null)
    const [loading, setLoading] = useState(true)
    const [iconAnimation, setIconAnimation] = useState("")


    
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try{
              const response = await PrescriptionService.getPatientPrescriptions(id)
              setPrescriptions(response.data)
              console.log(response)

          }catch(error){
              console.log(error);
          }
          setLoading(false)
        }; 
        fetchData()
      }, [id]);



    function deletePrescription(event, id){
        event.preventDefault()
        PrescriptionService.deletePrescription(id).then((res) =>{
            if(prescriptions){
                setPrescriptions((prevElement) =>{
                    return prevElement.filter((prescription) => prescription.prescriptionId !== id)
                })
            }
        })
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return(
        <div className="prescriptions-page">
            <button  className="btn btn-light"  
                onClick={() => navigate(`/patient/${id}/prescriptions/add`)}
                onMouseEnter={() => setIconAnimation("fa-flip")} 
                onMouseLeave={() => setIconAnimation("")}> 
            <i className= {`fa-solid fa-plus fa-lg ${iconAnimation}`} style={{color: "#098500"}}></i>
            {"  New Prescription"}</button>
            <div className="prescriptions-panel">
                {prescriptions.map((prescription) =>(
                        <PrescriptionCard prescription = {prescription} deletePrescription = {deletePrescription}/>
                ))}
            </div>
        </div>
    )
}

export default PrescriptionsPage;