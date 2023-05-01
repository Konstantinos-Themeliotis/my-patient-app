package com.app.my.patient.system.repository;

import com.app.my.patient.system.entity.MedicalRecordEntity;
import com.app.my.patient.system.entity.NoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoteRepository  extends JpaRepository<MedicalRecordEntity, Long> {

    List<NoteEntity> findByPatientId(Long patientId);
}
