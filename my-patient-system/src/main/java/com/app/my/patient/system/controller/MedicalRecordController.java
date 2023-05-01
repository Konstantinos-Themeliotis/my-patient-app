package com.app.my.patient.system.controller;

import com.app.my.patient.system.model.Diagnosis;
import com.app.my.patient.system.model.FamilyRecord;
import com.app.my.patient.system.model.Note;
import com.app.my.patient.system.service.DiagnosisService;
import com.app.my.patient.system.service.FamilyRecordService;
import com.app.my.patient.system.service.NoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/records")
public class MedicalRecordController {

    private final DiagnosisService diagnosisService;
    private final FamilyRecordService familyRecordService;
    private final NoteService noteService;


    public MedicalRecordController(DiagnosisService diagnosisService, FamilyRecordService familyRecordService, NoteService noteService) {
        this.diagnosisService = diagnosisService;
        this.familyRecordService = familyRecordService;
        this.noteService = noteService;
    }

    @PostMapping("diagnosis/save")
    public Diagnosis saveDiagnosis(@RequestBody Diagnosis diagnosis){

        return diagnosisService.createDiagnosis(diagnosis);

    }

    @GetMapping("diagnosis/getAll")
    public List<Diagnosis> getAllDiagnosis(@RequestParam("patientId") Long patientId){
        return diagnosisService.getAllDiagnosis(patientId);
    }

    @GetMapping("diagnosis/get/{id}")
    public ResponseEntity<Diagnosis>  getDiagnosisById(@PathVariable Long id){
        Diagnosis diagnosis = diagnosisService.getDiagnosisById(id);
        return ResponseEntity.ok(diagnosis);
    }


    @DeleteMapping("diagnosis/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMedicalRecord(@PathVariable long id){
        boolean deleted = false;
        deleted = diagnosisService.deleteMedicalRecord(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("diagnosis/update/{id}")
    public ResponseEntity<Diagnosis> updateDiagnosis(@PathVariable Long id,
                                           @RequestBody Diagnosis diagnosis){
        diagnosis = diagnosisService.updateDiagnosis(id, diagnosis);
        return ResponseEntity.ok(diagnosis);

    }




    @PostMapping("familyRecord/save")
    public FamilyRecord saveFamilyRecord(@RequestBody FamilyRecord familyRecord){
        return familyRecordService.createFamilyRecord(familyRecord);

    }

    @GetMapping("familyRecord/getAll")
    public List<FamilyRecord> getAllFamilyRecords(@RequestParam("patientId") Long patientId){
        return familyRecordService.getAllFamilyRecords(patientId);
    }

    @GetMapping("familyRecord/get/{id}")
    public ResponseEntity<FamilyRecord>  getFamilyRecordById(@PathVariable Long id){
        FamilyRecord familyRecord = familyRecordService.getFamilyRecordById(id);
        return ResponseEntity.ok(familyRecord);
    }

    @DeleteMapping("familyRecord/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteFamilyRecord(@PathVariable long id){
        boolean deleted = false;
        deleted = familyRecordService.deleteMedicalRecord(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("familyRecord/update/{id}")
    public ResponseEntity<FamilyRecord> updateFamilyRecord(@PathVariable Long id,
                                           @RequestBody FamilyRecord familyRecord){

        familyRecord = familyRecordService.updateFamilyRecord(id, familyRecord);
        return ResponseEntity.ok(familyRecord);
    }



    @PostMapping("note/save")
    public Note saveNote(@RequestBody Note note){
        System.out.println(note.getNote());
        System.out.println(note.getPatientId());
        System.out.println(note.getTitle());
        System.out.println(note.getRecordId());
        System.out.println(note.getDateRecorded());
        return noteService.createNote(note);

    }

    @GetMapping("note/getAll")
    public List<Note> getAllNotes(@RequestParam("patientId") Long patientId){
        return noteService.getAllNotes(patientId);
    }

    @GetMapping("note/get/{id}")
    public ResponseEntity<Note>  getNoteById(@PathVariable Long id){
        Note note = noteService.getNoteById(id);
        return ResponseEntity.ok(note);
    }

    @DeleteMapping("note/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteNote(@PathVariable long id){
        boolean deleted = false;
        deleted = noteService.deleteMedicalRecord(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("note/update/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable Long id,
                                                 @RequestBody Note note){
        note = noteService.updateNote(id, note);
        return ResponseEntity.ok(note);

    }



}
