package com.app.my.patient.system.service;

import com.app.my.patient.system.entity.FamilyRecordEntity;
import com.app.my.patient.system.entity.NoteEntity;
import com.app.my.patient.system.entity.PatientEntity;
import com.app.my.patient.system.model.FamilyRecord;
import com.app.my.patient.system.model.Note;
import com.app.my.patient.system.repository.NoteRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService{

    final PatientService patientService;
    public final NoteRepository noteRepository;

    public NoteServiceImpl(PatientService patientService, NoteRepository noteRepository) {
        this.patientService = patientService;
        this.noteRepository = noteRepository;
    }

    @Override
    public Note createNote(Note note) {
        NoteEntity noteEntity = new NoteEntity();
        PatientEntity patientEntity = new PatientEntity();
        patientEntity = patientService.getPatientEntityById(note.getPatientId());
        BeanUtils.copyProperties(note, noteEntity);
        noteEntity.setPatient(patientEntity);

        noteRepository.save(noteEntity);
        return note;

    }

    @Override
    public List<Note> getAllNotes(Long patientId) {
        List<NoteEntity> noteEntities = noteRepository.findByPatientId(patientId);
        List<Note> noteList = noteEntities
                .stream()
                .map(emp-> new Note(
                        emp.getRecordId(),
                        emp.getPatient().getId(),
                        emp.getDateRecorded(),
                        emp.getRecordType(),
                        emp.getNote(),
                        emp.getTitle())).toList();

        return noteList;
    }

    @Override
    public boolean deleteMedicalRecord(long id) {
        NoteEntity noteEntity = (NoteEntity) noteRepository.findById(id).get();
        noteRepository.delete(noteEntity);
        return true;
    }

    @Override
    public Note getNoteById(Long id) {
        NoteEntity noteEntity = (NoteEntity) noteRepository.findById(id).get();
        Note note = new Note();
        BeanUtils.copyProperties(noteEntity, note);
        return note;

    }

    @Override
    public Note updateNote(Long id, Note note) {
        NoteEntity noteEntity = (NoteEntity) noteRepository.findById(id).get();

        noteEntity.setNote(note.getNote());
        noteEntity.setDateRecorded(note.getDateRecorded());
        noteEntity.setTitle(note.getTitle());
        noteRepository.save(noteEntity);
        return note;

    }
}
