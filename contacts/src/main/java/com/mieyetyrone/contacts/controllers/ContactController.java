package com.mieyetyrone.contacts.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mieyetyrone.contacts.entities.Contact;
import com.mieyetyrone.contacts.services.ContactService;



@RestController
@RequestMapping("/api")
public class ContactController {

	@Autowired
	ContactService contactService;
	
	@GetMapping(path = "/contacts")
    public ResponseEntity<?>  getAllContacts() {
		List<Contact> resource = contactService.getAllContacts();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = "/contacts")
	public ResponseEntity<?> addContact(@RequestBody Contact contact) {
        Contact resource = contactService.addContact(contact);
        return ResponseEntity.ok(resource);
    }
}
