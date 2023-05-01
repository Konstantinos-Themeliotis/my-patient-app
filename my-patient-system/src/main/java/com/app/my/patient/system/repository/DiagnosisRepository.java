package com.app.my.patient.system.repository;


import com.app.my.patient.system.entity.DiagnosisEntity;
import com.app.my.patient.system.entity.MedicalRecordEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiagnosisRepository extends JpaRepository<MedicalRecordEntity, Long> {
    List<DiagnosisEntity> findByPatientId(Long patientId);


}
