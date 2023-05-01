package com.app.my.patient.system.service;

import com.app.my.patient.system.entity.PatientEntity;
import com.app.my.patient.system.model.Patient;

import java.util.List;

public interface PatientService {

    Patient createPatient(Patient patient);

    List<Patient> getAllPatients();

    boolean deletePatient(long id);

    Patient getPatientById(Long id);

    PatientEntity getPatientEntityById(Long id);

    Patient updatePatient(Long id, Patient patient);
}
