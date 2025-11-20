package com.myProject.sbReactProject01.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="register")
@Setter
@Getter
public class StudentSignUp {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int sid;
	private String fullName;
	private String password;
	private String phone;
	private String email;
	private String address;
		
}
