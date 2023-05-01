package com.app.my.patient.system.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public abstract class MedicalRecord {
    private long recordId;
    private long patientId;
    private String dateRecorded;
    private String recordType;
    private String title;
}
