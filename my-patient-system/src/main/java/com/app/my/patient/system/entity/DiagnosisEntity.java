package com.app.my.patient.system.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "diagnosis")
public class DiagnosisEntity extends MedicalRecordEntity {

    @Column(name = "diagnosis", columnDefinition = "TEXT")
    private String diagnosis;

}
