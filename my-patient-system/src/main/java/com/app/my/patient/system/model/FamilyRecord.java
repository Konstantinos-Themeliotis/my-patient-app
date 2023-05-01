package com.app.my.patient.system.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FamilyRecord extends MedicalRecord{
    private String fullName;
    private String relative;
    private String dateOfBirth;
    private String history;
    public FamilyRecord(
            Long recordId,
            Long patientId,
            String dateRecorded,
            String recordType,
            String title,
            String fullName,
            String relative,
            String dateOfBirth,
            String history
    ){
        this.fullName = fullName;
        this.history = history;
        this.dateOfBirth = dateOfBirth;
        this.relative = relative;
        setPatientId(patientId);
        setRecordId(recordId);
        setDateRecorded(dateRecorded);
        setRecordType(recordType);
        setTitle(title);
    }
}
