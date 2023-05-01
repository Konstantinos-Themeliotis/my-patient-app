package com.app.my.patient.system.service;


import com.app.my.patient.system.entity.PatientEntity;
import com.app.my.patient.system.entity.PrescriptionEntity;
import com.app.my.patient.system.model.Prescription;
import com.app.my.patient.system.repository.PrescriptionRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrescriptionServiceImpl implements PrescriptionService {

    final PrescriptionRepository prescriptionRepository;

    public PrescriptionServiceImpl(PrescriptionRepository prescriptionRepository, PatientService patientService) {
        this.prescriptionRepository = prescriptionRepository;
        this.patientService = patientService;
    }

    final PatientService patientService;


    @Override
    public Prescription createPrescription(Prescription prescription) {
        PrescriptionEntity prescriptionEntity = new PrescriptionEntity();
        PatientEntity patientEntity = new PatientEntity();
        patientEntity = patientService.getPatientEntityById(prescription.getPatientId());
        BeanUtils.copyProperties(prescription, prescriptionEntity);
        prescriptionEntity.setPatient(patientEntity);

        prescriptionEntity = prescriptionRepository.save(prescriptionEntity);
        prescription.setPrescriptionId(prescriptionEntity.getPrescriptionId());
        return prescription;

    }

    @Override
    public List<Prescription> getPatientsPrescriptions(Long patientId) {
        List<PrescriptionEntity> prescriptionEntities = prescriptionRepository.findByPatientId(patientId);

        List<Prescription> prescriptionModel = prescriptionEntities
                .stream()
                .map(emp -> new Prescription(
                        emp.getPrescriptionId(),
                        emp.getPatient().getId(),
                        emp.getMedication(),
                        emp.getDosage(),
                        emp.getInstructions(),
                        emp.getDatePrescribed()))
                .toList();

        return prescriptionModel;
    }

    @Override
    public boolean deletePrescription(long id) {
        PrescriptionEntity prescriptionEntity = prescriptionRepository.findById(id).get();
        prescriptionRepository.delete(prescriptionEntity);
        return true;
    }
}
