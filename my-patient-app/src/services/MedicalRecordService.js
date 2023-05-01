import axios from "axios";

const DIAGNOSIS_RECORD_API_BASE_URL = "http://localhost:8080/api/v1/records/diagnosis";
const FAMILY_HISTORY_RECORD_API_BASE_URL = "http://localhost:8080/api/v1/records/familyRecord";
const NOTE_RECORD_API_BASE_URL = "http://localhost:8080/api/v1/records/note"

const SAVE = "/save";
const GETALL = "/getAll";
const DELETE = "/delete";
const UPDATE = "/update";
const GET = "/get";


class MedicalRecordService{


    //Diagnosis API calls
    saveDiagnosis(diagnosis){
        return axios.post(DIAGNOSIS_RECORD_API_BASE_URL + SAVE, diagnosis)

    }

    getDiagnosis(id){
        return axios.get(DIAGNOSIS_RECORD_API_BASE_URL + GETALL, { params: { patientId: id } } )

    }

    getDiagnosisById(id){
        return axios.get(DIAGNOSIS_RECORD_API_BASE_URL + GET + "/" + id ) 
    }

    deleteDiagnosis(id){
        return axios.delete(DIAGNOSIS_RECORD_API_BASE_URL + DELETE + "/" + id);

    }
     
    updateDiagnosis(id, diagnosis){
        return axios.put(DIAGNOSIS_RECORD_API_BASE_URL + UPDATE + "/" + id, diagnosis);
    }
    
    


    // Family History API calls
    saveFamilyHistory(familyHistory){
        return axios.post(FAMILY_HISTORY_RECORD_API_BASE_URL + SAVE, familyHistory)

    } 

    getFamilyHistory(id){
        return axios.get(FAMILY_HISTORY_RECORD_API_BASE_URL + GETALL, { params: { patientId: id } } )

    }
    deleteFamilyHistory(id){
        return axios.delete(FAMILY_HISTORY_RECORD_API_BASE_URL + DELETE + "/" + id);

    }

    getFamilyHistoryById(id){
        return axios.get(FAMILY_HISTORY_RECORD_API_BASE_URL + GET + "/" + id)

    }

    updateFamilyHistory(id, familyHistory){
        return axios.put(FAMILY_HISTORY_RECORD_API_BASE_URL + UPDATE + "/" + id, familyHistory);
    }

    

    
    
    // Notes API calls
    saveNote(note){
        return axios.post(NOTE_RECORD_API_BASE_URL + SAVE, note)
    }

    getNotes(id){
        return axios.get(NOTE_RECORD_API_BASE_URL + GETALL, { params: { patientId: id } } )
        
    }

    getNoteById(id){
        return axios.get(NOTE_RECORD_API_BASE_URL + GET + "/" + id ) 
    }

    deleteNote(id){
        return axios.delete(NOTE_RECORD_API_BASE_URL + DELETE + "/" + id);

    }
    
    updateNote(id, note){
        return axios.put(NOTE_RECORD_API_BASE_URL + UPDATE + "/" + id, note);
    }



    
}

export default new MedicalRecordService();