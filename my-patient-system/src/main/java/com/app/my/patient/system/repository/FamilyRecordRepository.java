package com.app.my.patient.system.repository;

import com.app.my.patient.system.entity.DiagnosisEntity;
import com.app.my.patient.system.entity.FamilyRecordEntity;
import com.app.my.patient.system.entity.MedicalRecordEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FamilyRecordRepository extends JpaRepository<MedicalRecordEntity, Long> {
    List<FamilyRecordEntity> findByPatientId(Long patientId);

}
