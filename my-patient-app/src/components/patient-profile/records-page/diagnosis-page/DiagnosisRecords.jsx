import React from "react";
import RecordsNavbar from "../RecordsNavbar";
import { useNavigate,  useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MedicalRecordService from "../../../../services/MedicalRecordService";
import DiagnosisCard from "./DiagnosisCard";


function DiagnosisRecords(){
    const [iconAnimation, setIconAnimation] = useState("")
    const navigate = useNavigate();
    const {id}  = useParams();
    const [diagnoses, setDiagnoses] = useState(null)
    const [loading, setLoading] = useState(true)


     // Fetch data from database.
     useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try{
              const response = await MedicalRecordService.getDiagnosis(id)
              setDiagnoses(response.data)
              console.log(response)

          }catch(error){
              console.log(error);
          }
          setLoading(false)
        }; 
        fetchData()
      }, [id]);

      function deleteDiagnosis(event, id){
        event.preventDefault()
        MedicalRecordService.deleteDiagnosis(id).then((res) =>{
            if(diagnoses){
                setDiagnoses((prevElement) =>{
                    return prevElement.filter((diagnoses) => diagnoses.recordId !== id)
                })
            }
        })
    }




    if (loading) {
        return <RecordsNavbar />
    }
    
    return(
        <div className="diagnosis-page">
            <RecordsNavbar />
            <div className="">
                <button  className="btn btn-light"  
                    onClick={() => navigate(`/patient/${id}/records/diagnosis/add`)}
                    onMouseEnter={() => setIconAnimation("fa-flip")} 
                    onMouseLeave={() => setIconAnimation("")}> 
                <i className= {`fa-solid fa-plus fa-lg ${iconAnimation}`} style={{color: "#098500"}}></i>
                {"  New Diagnosis Record"}</button>
                <button 
                className="btn btn-light"
                onClick={() => navigate(`/patient/${id}`)}>
                <i class={"fa-solid fa-user fa-sm"}></i> 
                {"   Profile"} </button>
            </div>
            <div className="diagnosis-panel">
                {diagnoses.map((diagnosis) =>(
                        <DiagnosisCard diagnosis = {diagnosis} deleteDiagnosis={deleteDiagnosis}/>
                ))}
            </div>

        </div>
    )
}

export default DiagnosisRecords;