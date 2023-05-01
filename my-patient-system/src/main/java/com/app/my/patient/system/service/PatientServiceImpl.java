package com.app.my.patient.system.service;

import com.app.my.patient.system.entity.PatientEntity;
import com.app.my.patient.system.model.Patient;
import com.app.my.patient.system.repository.PatientRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService{

    private final PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public Patient createPatient(Patient patient) {
        PatientEntity patientEntity = new PatientEntity();
        BeanUtils.copyProperties(patient, patientEntity);
        patientEntity = patientRepository.save(patientEntity);
        patient.setId(patientEntity.getId());
        return patient;
    }

    @Override
    public List<Patient> getAllPatients() {
        // Get all Patient entities from db in a list
        List<PatientEntity> patientEntities = patientRepository.findAll();

        // Translate the entities list to a list with patient models
        List<Patient> patientModel = patientEntities
                .stream()
                .map(emp -> new Patient(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getSocialSecurityNumber(),
                        emp.getEmailId(),
                        emp.getTelephoneNumber(),
                        emp.getHomeAddress()))
                        .toList();

        return patientModel;
    }

    @Override
    public boolean deletePatient(long id) {
        PatientEntity patient = patientRepository.findById(id).get();
        patientRepository.delete(patient);
        return true;
    }

    @Override
    public Patient getPatientById(Long id) {
        PatientEntity patientEntity = patientRepository.findById(id).get();
        Patient patient = new Patient();
        BeanUtils.copyProperties(patientEntity, patient);
        return patient;
    }

    @Override
    public PatientEntity getPatientEntityById(Long id) {
        return patientRepository.findById(id).get();
    }

    @Override
    public Patient updatePatient(Long id, Patient patient) {
        PatientEntity patientEntity = patientRepository.findById(id).get();
        patientEntity.setFirstName(patient.getFirstName());
        patientEntity.setLastName(patient.getLastName());
        patientEntity.setEmailId(patient.getEmailId());
        patientEntity.setSocialSecurityNumber(patient.getSocialSecurityNumber());
        patientEntity.setTelephoneNumber(patient.getTelephoneNumber());
        patientEntity.setHomeAddress(patient.getHomeAddress());
        patientRepository.save(patientEntity);
        return patient;
    }
}
