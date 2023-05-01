package com.app.my.patient.system.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Prescription {
    private long prescriptionId;
    private long patientId;
    private String medication;
    private String dosage;
    private String instructions;
    private String datePrescribed;
}
