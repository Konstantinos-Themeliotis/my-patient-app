package com.app.my.patient.system.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "prescriptions")
public class PrescriptionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "prescription_id")
    private long prescriptionId;

    @ManyToOne(
            fetch = FetchType.LAZY
    )
    @JoinColumn(
            name = "patient_id",
            referencedColumnName = "id"
    )
    private PatientEntity patient;

    @Column( name = "medication")
    private String medication;

    @Column( name = "dosage")
    private String dosage;

    @Column(name = "instructions", columnDefinition = "TEXT")
    private String instructions;

    @Column( name = "date_prescribed")
    private String datePrescribed;



}
