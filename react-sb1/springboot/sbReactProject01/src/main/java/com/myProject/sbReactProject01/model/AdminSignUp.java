package com.myProject.sbReactProject01.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="AdminRegister")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class AdminSignUp {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String fullName;
	private String password;
	private String phone;
	private String email;
	private String address;
}
