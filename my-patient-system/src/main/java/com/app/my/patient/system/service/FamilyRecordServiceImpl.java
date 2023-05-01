package com.app.my.patient.system.service;

import com.app.my.patient.system.entity.DiagnosisEntity;
import com.app.my.patient.system.entity.FamilyRecordEntity;
import com.app.my.patient.system.entity.NoteEntity;
import com.app.my.patient.system.entity.PatientEntity;
import com.app.my.patient.system.model.FamilyRecord;
import com.app.my.patient.system.model.Note;
import com.app.my.patient.system.repository.DiagnosisRepository;
import com.app.my.patient.system.repository.FamilyRecordRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FamilyRecordServiceImpl implements FamilyRecordService {
    final PatientService patientService;
    public final FamilyRecordRepository familyRecordRepository;

    public FamilyRecordServiceImpl(
            FamilyRecordRepository familyRecordRepository,
            PatientService patientService) {
        this.familyRecordRepository = familyRecordRepository;
        this.patientService = patientService;
    }

    @Override
    public FamilyRecord createFamilyRecord(FamilyRecord familyRecord) {
        FamilyRecordEntity familyRecordEntity = new FamilyRecordEntity();
        PatientEntity patientEntity = new PatientEntity();
        patientEntity = patientService.getPatientEntityById(familyRecord.getPatientId());
        BeanUtils.copyProperties(familyRecord, familyRecordEntity);
        familyRecordEntity.setPatient(patientEntity);

        familyRecordRepository.save(familyRecordEntity);
        return familyRecord;
    }

    @Override
    public List<FamilyRecord> getAllFamilyRecords(Long patientId) {
        List<FamilyRecordEntity> familyRecordEntities = familyRecordRepository.findByPatientId(patientId);
        List<FamilyRecord> familyRecordList = familyRecordEntities
                .stream()
                .map(emp-> new FamilyRecord(
                        emp.getRecordId(),
                        emp.getPatient().getId(),
                        emp.getDateRecorded(),
                        emp.getRecordType(),
                        emp.getTitle(),
                        emp.getFullName(),
                        emp.getRelative(),
                        emp.getDateOfBirth(),
                        emp.getHistory())).toList();

        return familyRecordList;
    }

    @Override
    public boolean deleteMedicalRecord(long id) {
        FamilyRecordEntity familyRecordEntity = (FamilyRecordEntity) familyRecordRepository.findById(id).get();
        familyRecordRepository.delete(familyRecordEntity);
        return true;
    }

    @Override
    public FamilyRecord getFamilyRecordById(Long id) {
        FamilyRecordEntity familyRecordEntity = (FamilyRecordEntity) familyRecordRepository.findById(id).get();
        FamilyRecord familyRecord = new FamilyRecord();
        BeanUtils.copyProperties(familyRecordEntity, familyRecord);
        return familyRecord;
    }

    public FamilyRecord updateFamilyRecord(Long id, FamilyRecord familyRecord) {
        FamilyRecordEntity familyRecordEntity = (FamilyRecordEntity) familyRecordRepository.findById(id).get();

        familyRecordEntity.setDateRecorded(familyRecord.getDateRecorded());
        familyRecordEntity.setTitle(familyRecord.getTitle());
        familyRecordEntity.setFullName(familyRecord.getFullName());
        familyRecordEntity.setRelative(familyRecord.getRelative());
        familyRecordEntity.setDateOfBirth(familyRecord.getDateOfBirth());
        familyRecordEntity.setHistory(familyRecord.getHistory());
        familyRecordRepository.save(familyRecordEntity);


        return familyRecord;

    }
}
