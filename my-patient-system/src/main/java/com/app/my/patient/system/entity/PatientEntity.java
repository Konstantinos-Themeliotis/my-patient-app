package com.app.my.patient.system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "patients")
public class PatientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "id")
    private Long id;

    @Column( name = "first_name")
    private String firstName;

    @Column( name = "last_name")
    private String lastName;

    @Column( name = "social_security_number", unique = true)
    private String socialSecurityNumber;

    @Column (name = "date_of_birth")
    private String dateOfBirth;

    @Column( name = "email_id")
    private String emailId;

    @Column ( name = "telephone_number")
    private String telephoneNumber;

    @Column( name = "home_address")
    private String homeAddress;

    @OneToMany(
            mappedBy = "patient",
            cascade = CascadeType.ALL
    )
    private List<PrescriptionEntity> prescriptions;

    @OneToMany(
            mappedBy = "patient",
            cascade = CascadeType.ALL
    )
    private List<MedicalRecordEntity> medicalRecords;




}
