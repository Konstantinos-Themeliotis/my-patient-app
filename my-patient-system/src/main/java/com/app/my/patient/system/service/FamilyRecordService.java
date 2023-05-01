package com.app.my.patient.system.service;


import com.app.my.patient.system.model.FamilyRecord;

import java.util.List;

public interface FamilyRecordService {
    FamilyRecord createFamilyRecord(FamilyRecord familyRecord);

    List<FamilyRecord> getAllFamilyRecords(Long patientId);

    boolean deleteMedicalRecord(long id);

    FamilyRecord getFamilyRecordById(Long id);

    FamilyRecord updateFamilyRecord(Long id, FamilyRecord familyRecord);
}
