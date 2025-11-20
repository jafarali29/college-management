package com.myProject.sbReactProject01.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myProject.sbReactProject01.model.AdminSignIn;
import com.myProject.sbReactProject01.model.AdminSignUp;
import com.myProject.sbReactProject01.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
	AdminRepository repo;
	
	public String adminSignIn(AdminSignIn admin) {
		AdminSignUp adm=repo.getByFullNameAndPassword(admin.getFullName(),admin.getPassword());
		if(admin.getFullName().equals(adm.getFullName()) && admin.getPassword().equals(adm.getPassword())) {
			return "success";
		}else {
			return "failure";
		}	
	}
	
	public String adminSignUp(AdminSignUp admin) {
		AdminSignUp adm=repo.save(admin);
		if(adm!=null) {
			return "success";
		}else {
			return "failure";
		}
	}
}