package com.app.my.patient.system.service;


import com.app.my.patient.system.model.Diagnosis;

import java.util.List;

public interface DiagnosisService {


    Diagnosis createDiagnosis(Diagnosis diagnosis);

    List<Diagnosis> getAllDiagnosis(Long patientId);

    boolean deleteMedicalRecord(long id);

    Diagnosis getDiagnosisById(Long id);

    Diagnosis updateDiagnosis(Long id, Diagnosis diagnosis);
}
