package com.app.my.patient.system.service;

import com.app.my.patient.system.entity.DiagnosisEntity;
import com.app.my.patient.system.entity.NoteEntity;
import com.app.my.patient.system.entity.PatientEntity;
import com.app.my.patient.system.model.Diagnosis;
import com.app.my.patient.system.model.Note;
import com.app.my.patient.system.repository.DiagnosisRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiagnosisServiceImpl implements DiagnosisService {

    final
    PatientService patientService;
    public final DiagnosisRepository diagnosisRepository;



    public DiagnosisServiceImpl(DiagnosisRepository diagnosisRepository, PatientService patientService) {
        this.diagnosisRepository = diagnosisRepository;
        this.patientService = patientService;
    }

    @Override
    public Diagnosis createDiagnosis(Diagnosis diagnosis) {
        DiagnosisEntity diagnosisEntity = new DiagnosisEntity();
        PatientEntity patientEntity = new PatientEntity();
        patientEntity = patientService.getPatientEntityById(diagnosis.getPatientId());
        BeanUtils.copyProperties(diagnosis, diagnosisEntity);
        diagnosisEntity.setPatient(patientEntity);

        diagnosisRepository.save(diagnosisEntity);
        return diagnosis;

    }

    @Override
    public List<Diagnosis> getAllDiagnosis(Long patientId) {
        List<DiagnosisEntity> diagnosisEntities = diagnosisRepository.findByPatientId(patientId);
        List<Diagnosis> diagnosisList = diagnosisEntities
                .stream()
                .map(emp-> new Diagnosis(
                        emp.getRecordId(),
                        emp.getPatient().getId(),
                        emp.getDateRecorded(),
                        emp.getRecordType(),
                        emp.getDiagnosis(),
                        emp.getTitle())).toList();

        return diagnosisList;
    }

    @Override
    public boolean deleteMedicalRecord(long id) {
        DiagnosisEntity diagnosisEntity = (DiagnosisEntity) diagnosisRepository.findById(id).get();
        diagnosisRepository.delete(diagnosisEntity);
        return true;
    }

    @Override
    public Diagnosis getDiagnosisById(Long id) {
        DiagnosisEntity diagnosisEntity = (DiagnosisEntity) diagnosisRepository.findById(id).get();
        Diagnosis diagnosis = new Diagnosis();
        BeanUtils.copyProperties(diagnosisEntity, diagnosis);
        return diagnosis;
    }

    @Override
    public Diagnosis updateDiagnosis(Long id, Diagnosis diagnosis) {
        DiagnosisEntity diagnosisEntity = (DiagnosisEntity) diagnosisRepository.findById(id).get();
        diagnosisEntity.setDiagnosis(diagnosis.getDiagnosis());
        diagnosisEntity.setDateRecorded(diagnosis.getDateRecorded());
        diagnosisEntity.setTitle(diagnosis.getTitle());
        diagnosisRepository.save(diagnosisEntity);
        return diagnosis;
    }
}
