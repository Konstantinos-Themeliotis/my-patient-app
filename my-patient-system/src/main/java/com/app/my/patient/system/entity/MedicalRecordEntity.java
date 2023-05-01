package com.app.my.patient.system.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "medical_records")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class MedicalRecordEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "record_id")
    private Long recordId;

    @ManyToOne(
            fetch = FetchType.LAZY
    )
    @JoinColumn(
            name = "patient_id",
            referencedColumnName = "id"
    )
    private PatientEntity patient;

    @Column( name = "title")
    private String title;

    @Column( name = "record_type")
    private String recordType;

    @Column( name = "date_recorded")
    private String dateRecorded;


}
