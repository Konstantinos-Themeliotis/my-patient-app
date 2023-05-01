package com.app.my.patient.system.entity;


import com.app.my.patient.system.model.FamilyRecord;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "family_records")
public class FamilyRecordEntity extends MedicalRecordEntity{

    @Column( name = "full_name")
    private String fullName;

    @Column( name = "relative")
    private String relative;

    @Column( name = "date_of_birth")
    private String dateOfBirth;

    @Column(name = "history", columnDefinition = "TEXT")
    private String history;


}
