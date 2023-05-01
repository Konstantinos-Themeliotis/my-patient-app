import axios from "axios";

const PATIENT_API_BASE_URL = "http://localhost:8080/api/v1/patients";
const GET_PATIENT_BY_ID = "/get"
const SAVE_PATIENT = "/save";
const GET_PATIENTS = "/getAll";
const DELETE_PATIENT = "/delete";
const UPDATE_PATIENT = "/update"



class PatientService {
    
    getPatients(){
        // 
        return axios.get(PATIENT_API_BASE_URL + GET_PATIENTS);
    }
    
    getPatientById(id){
        return axios.get(PATIENT_API_BASE_URL + GET_PATIENT_BY_ID + "/" + id )        
    }

    savePatient(patient){
        return axios.post(PATIENT_API_BASE_URL + SAVE_PATIENT, patient);
    }
    

    deletePatient(id){
        return axios.delete(PATIENT_API_BASE_URL + DELETE_PATIENT + "/" + id);
    }

    updatePatient(patient, id){
        return axios.put(PATIENT_API_BASE_URL + UPDATE_PATIENT+ "/" + id, patient);

    }

}

export default new PatientService();