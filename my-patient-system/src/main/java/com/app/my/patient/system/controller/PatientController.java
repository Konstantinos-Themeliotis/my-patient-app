package com.app.my.patient.system.controller;

import com.app.my.patient.system.model.Patient;
import com.app.my.patient.system.service.PatientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/patients")
public class PatientController {

    // Dependency Injection Using constructor
    private final PatientService patientService;
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping("/save")
    public Patient createPatient(@RequestBody Patient patient){
        return patientService.createPatient(patient);
    }

    @GetMapping("/getAll")
    public List<Patient> getAllPatients(){
        return patientService.getAllPatients();

    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable long id){
        boolean deleted = false;
        deleted = patientService.deletePatient(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Long id){
        Patient patient = patientService.getPatientById(id);
        return ResponseEntity.ok(patient);

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Long id,
                                                 @RequestBody Patient patient){
        patient = patientService.updatePatient(id, patient);
        return ResponseEntity.ok(patient);

    }

}
