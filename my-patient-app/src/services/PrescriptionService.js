import axios from "axios";

const PRESCRIPTION_API_BASE_URL = "http://localhost:8080/api/v1/prescriptions";
const SAVE_PRESCRIPTION = "/save";
const GET_PRESCRIPTIONS = "/getAll";
const DELETE_PRESCRIPTION = "/delete"

class PrescriptionService{
    
    savePrescription(prescription){
        return axios.post(PRESCRIPTION_API_BASE_URL + SAVE_PRESCRIPTION, prescription)
    }

    getPatientPrescriptions(id){
        return axios.get(PRESCRIPTION_API_BASE_URL + GET_PRESCRIPTIONS, { params: { patientId: id } } )
    }
    
    deletePrescription(id){
        return axios.delete(PRESCRIPTION_API_BASE_URL + DELETE_PRESCRIPTION + "/" + id);
        
    }
}

export default new PrescriptionService();