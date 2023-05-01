package com.app.my.patient.system.entity;

import com.app.my.patient.system.model.MedicalRecord;
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
@Table(name = "notes")
public class NoteEntity extends MedicalRecordEntity{
    @Column(name = "note", columnDefinition = "TEXT")
    private String note;

}