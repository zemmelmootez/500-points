package com.micro.microservice2.models;// Patient.java

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Patient {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String phoneNumber;

}
