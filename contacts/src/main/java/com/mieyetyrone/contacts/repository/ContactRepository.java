package com.mieyetyrone.contacts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.mieyetyrone.contacts.entities.Contact;


@RepositoryRestResource()
public interface ContactRepository extends JpaRepository<Contact, Integer> {

}
