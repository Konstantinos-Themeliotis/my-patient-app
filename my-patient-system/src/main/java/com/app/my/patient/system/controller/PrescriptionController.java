package com.app.my.patient.system.controller;


import com.app.my.patient.system.model.Prescription;
import com.app.my.patient.system.service.PrescriptionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/prescriptions")
public class PrescriptionController {

    final PrescriptionService prescriptionService;

    public PrescriptionController(PrescriptionService prescriptionService) {
        this.prescriptionService = prescriptionService;
    }

    @PostMapping("/save")
    public Prescription savePrescription(@RequestBody Prescription prescription) {
        return prescriptionService.createPrescription(prescription);
    }

    @GetMapping("/getAll")
    public List<Prescription> getAllPatientsPrescriptions(@RequestParam("patientId") Long patientId) {
        return prescriptionService.getPatientsPrescriptions(patientId);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePrescription(@PathVariable long id) {
        boolean deleted = false;
        deleted = prescriptionService.deletePrescription(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }
}