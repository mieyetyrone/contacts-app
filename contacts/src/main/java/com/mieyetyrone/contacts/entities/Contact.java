package com.mieyetyrone.contacts.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
public class Contact {

	@Id
	@GeneratedValue
	@Column
    private long id;

    @Column
    @NotBlank(message = "First name is required")
    private String firstName;
    
    @Column
    @NotBlank(message = "Last name is required")
    private String lastName;
    
    @Column
    @NotBlank(message = "Email is required")
    @Email(message = "Email is not valid")
    private String email;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
