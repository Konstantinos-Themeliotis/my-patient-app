package com.app.my.patient.system.service;

import com.app.my.patient.system.model.FamilyRecord;
import com.app.my.patient.system.model.Note;

import java.util.List;

public interface NoteService {

    Note createNote(Note note);

    List<Note> getAllNotes(Long patientId);

    boolean deleteMedicalRecord(long id);

    Note getNoteById(Long id);

    Note updateNote(Long id, Note note);
}
