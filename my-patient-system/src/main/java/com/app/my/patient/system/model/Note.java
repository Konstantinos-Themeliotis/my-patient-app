package com.app.my.patient.system.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Note extends MedicalRecord{
    private  String note;
    public Note(Long recordId, Long patientId, String dateRecorded, String recordType, String note, String title){
        this.note = note;
        setPatientId(patientId);
        setRecordId(recordId);
        setDateRecorded(dateRecorded);
        setRecordType(recordType);
        setTitle(title);
    }
}
