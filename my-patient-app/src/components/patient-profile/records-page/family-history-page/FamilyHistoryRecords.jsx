import React from "react";
import RecordsNavbar from "../RecordsNavbar";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FamilyHistoryCard from "./FamilyHistoryCard";
import MedicalRecordService from "../../../../services/MedicalRecordService";


function FamilyHistoryRecords(){

    const [iconAnimation, setIconAnimation] = useState("")
    const navigate = useNavigate();
    const {id}  = useParams();
    const [familyHistoryRecords, setFamilyHistoryRecord] = useState(null)
    const [loading, setLoading] = useState(true)

     // Fetch data from database.
     useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try{
              const response = await MedicalRecordService.getFamilyHistory(id)
              setFamilyHistoryRecord(response.data)
              console.log(response)

          }catch(error){
              console.log(error);
          }
          setLoading(false)
        }; 
        fetchData()
      }, [id]);


      function deleteFamilyHistory(event, id){
        event.preventDefault()
        MedicalRecordService.deleteFamilyHistory(id).then((res) =>{
            if(familyHistoryRecords){
                setFamilyHistoryRecord((prevElement) =>{
                    return prevElement.filter((familyHistoryRecords) => familyHistoryRecords.recordId !== id)
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
                    onClick={() => navigate(`/patient/${id}/records/familyHistory/add`)}
                    onMouseEnter={() => setIconAnimation("fa-flip")} 
                    onMouseLeave={() => setIconAnimation("")}> 
                <i className= {`fa-solid fa-plus fa-lg ${iconAnimation}`} style={{color: "#098500"}}></i>
                {"  New Family History Record"}</button>
                <button 
                className="btn btn-light"
                onClick={() => navigate(`/patient/${id}`)}>
                <i class={"fa-solid fa-user fa-sm"}></i> 
                {"   Profile"} </button>
            <div className="family-history-panel">
                {familyHistoryRecords.map((familyHistory) =>(
                        <FamilyHistoryCard familyHistory = {familyHistory} deleteFamilyHistory = {deleteFamilyHistory}/>
                ))}
            </div>

        </div>
    )
}

export default FamilyHistoryRecords;