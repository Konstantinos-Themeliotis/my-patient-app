package com.app.my.patient.system.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Diagnosis extends MedicalRecord{
    private String diagnosis;

    public Diagnosis(Long recordId, Long patientId, String dateRecorded, String recordType, String diagnosis, String title) {
        // Lombok does not handle the constructor well
        this.diagnosis = diagnosis;
        setPatientId(patientId);
        setRecordId(recordId);
        setDateRecorded(dateRecorded);
        setRecordType(recordType);
        setTitle(title);

    }
}
