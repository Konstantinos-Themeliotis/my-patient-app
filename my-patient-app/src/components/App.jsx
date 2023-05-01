import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./error-page/NotFound";
import PageHeader from "./layout/PageHeader";
import ActionsPanel from "./index-page/ActionsPanel";
import AddPatientForm from "./add-patient/AddPatientForm";
import PatientList from "./view-patients/PatientList";
import PatientProfile from "./patient-profile/PatientProfile";
import EditPatientForm from "./patient-profile/edit-patient/EditPatientForm";
import PrescriptionsPage from "./patient-profile/prescriptions-page/PrescriptionsPage";
import NewPrescriptionForm from "./patient-profile/prescriptions-page/NewPrescriptionForm";
import MedicalRecords from "./patient-profile/records-page/MedicalRecords";
import FamilyHistoryRecords from "./patient-profile/records-page/family-history-page/FamilyHistoryRecords";
import DiagnosisRecords from "./patient-profile/records-page/diagnosis-page/DiagnosisRecords";
import NotesRecords from "./patient-profile/records-page/notes-page/NotesRecords";
import NewDiagnosisForm from "./patient-profile/records-page/diagnosis-page/NewDiagnosisForm";
import NewFamilyHistoryForm from "./patient-profile/records-page/family-history-page/NewFamilyHistoryForm";
import NewNotesForm from "./patient-profile/records-page/notes-page/NewNotesForm";
import EditNoteForm from "./patient-profile/records-page/notes-page/EditNoteForm";
import EditDiagnosisForm from "./patient-profile/records-page/diagnosis-page/EditDiagnosisForm";
import EditFamilyHistoryForm from "./patient-profile/records-page/family-history-page/EditFamilyHistoryForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader />
        <Routes>
          <Route index element={<ActionsPanel />}></Route>
          <Route path = "/addPatient" element={<AddPatientForm />}></Route>
          <Route path = "/viewPatients" element={<PatientList />}></Route>
          <Route path = "/patient/:id" element={<PatientProfile />}></Route>
          <Route path = "/patient/:id/edit" element={<EditPatientForm />}></Route>
          <Route path = "/patient/:id/prescriptions" element={<PrescriptionsPage />}></Route>
          <Route path = "/patient/:id/prescriptions/add" element={<NewPrescriptionForm />}></Route>
          <Route path = "/patient/:id/records" element={<MedicalRecords />}></Route>
          <Route path = "/patient/:id/records/diagnosis" element={<DiagnosisRecords />}></Route>
          <Route path = "/patient/:id/records/diagnosis/add" element={<NewDiagnosisForm />}></Route>
          <Route path = "/patient/:id/records/diagnosis/edit/:rid" element={<EditDiagnosisForm/>}></Route>
          <Route path = "/patient/:id/records/familyHistory" element={<FamilyHistoryRecords />}></Route>
          <Route path = "/patient/:id/records/familyHistory/add" element={<NewFamilyHistoryForm />}></Route>
          <Route path = "/patient/:id/records/familyHistory/edit/:rid" element={<EditFamilyHistoryForm />}></Route>
          <Route path = "/patient/:id/records/notes" element={<NotesRecords />}></Route>
          <Route path = "/patient/:id/records/notes/add" element={<NewNotesForm />}></Route>
          <Route path = "/patient/:id/records/notes/edit/:rid" element={<EditNoteForm />}></Route>
          <Route path = "*" element={<NotFound />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
