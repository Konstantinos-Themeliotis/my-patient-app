package com.app.my.patient.system.service;

import com.app.my.patient.system.model.Prescription;

import java.util.List;

public interface PrescriptionService {
    Prescription createPrescription(Prescription prescription);

    List<Prescription> getPatientsPrescriptions(Long patientId);

    boolean deletePrescription(long id);
}
