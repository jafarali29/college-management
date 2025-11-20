package com.myProject.sbReactProject01.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myProject.sbReactProject01.model.Results;
import com.myProject.sbReactProject01.model.StudentSignIn;
import com.myProject.sbReactProject01.model.StudentSignUp;
import com.myProject.sbReactProject01.repository.ApplicationRepo;
import com.myProject.sbReactProject01.repository.ResultsRepository;

@Service
public class StudentService {
	@Autowired
	ApplicationRepo repo;
	
	@Autowired
	ResultsRepository resRepo;
	
	public String signUpser(StudentSignUp signup){
		StudentSignUp sign=repo.save(signup);
		if(sign!=null) {
			return "success";
		}else {
			return "failure";
		}
	}
	
	public String signInSer(StudentSignIn signIn) {
		StudentSignUp sign=repo.getByFullNameAndPassword(signIn.getFullName(),signIn.getPassword());
		if(sign.getFullName().equals(signIn.getFullName()) && sign.getPassword().equals(signIn.getPassword())) {
			return "success";
		}
		else {
			return "failure";
		}
	}
	
	public Results result(String hallTicket) {
		Results response=resRepo.findByHallTicket(hallTicket);
		return response;
	}
}
