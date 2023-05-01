package com.app.my.patient.system.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Patient {
    private long id;
    private String firstName;
    private String lastName;
    private String socialSecurityNumber;
    private String dateOfBirth;
    private String emailId;
    private String telephoneNumber;
    private String homeAddress;
}
