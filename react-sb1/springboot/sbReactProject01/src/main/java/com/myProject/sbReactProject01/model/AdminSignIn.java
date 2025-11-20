package com.myProject.sbReactProject01.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AdminSignIn {
	private String fullName;
	private String password;
}
