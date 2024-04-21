package com.micro.microservice2.Repository;// PatientRepository.java

import com.micro.microservice2.models.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient, String> {
}
