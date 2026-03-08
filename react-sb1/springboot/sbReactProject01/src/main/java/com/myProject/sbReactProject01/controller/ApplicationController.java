package com.myProject.sbReactProject01.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myProject.sbReactProject01.model.AdminSignIn;
import com.myProject.sbReactProject01.model.AdminSignUp;
import com.myProject.sbReactProject01.model.DeletePerson;
import com.myProject.sbReactProject01.model.Hno;
import com.myProject.sbReactProject01.model.Results;
import com.myProject.sbReactProject01.model.StudentSignIn;
import com.myProject.sbReactProject01.model.StudentSignUp;
import com.myProject.sbReactProject01.service.AdminService;
import com.myProject.sbReactProject01.service.StudentService;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins="http://localhost:3000")
public class ApplicationController {
	
	@Autowired
	StudentService signs;
	
	@Autowired
	AdminService adm;
	
	@PostMapping("/stuRegister")
	String studentSignUp(@RequestBody StudentSignUp signup){
		String response=signs.signUpser(signup);
		return response;
	}
	
	@PostMapping("/studentLogin")
	String studentSignIn(@RequestBody StudentSignIn sign) {
		String response=signs.signInSer(sign);
		return response;
	}
	
	@PostMapping("/adminRegister")
	String adminSignUp(@RequestBody AdminSignUp signup) {
		String response=adm.adminSignUp(signup);
		return response;
	}
	
	@PostMapping("/adminLogin")
	String adminSignIn(@RequestBody AdminSignIn signIn) {
		String response=adm.adminSignIn(signIn);
		return response;
	}
	
	@PostMapping("/getResults")
	Results result(@RequestBody Hno hno) {
		Results response=signs.result(hno.getHallTicket());
		return response;
	}
	
	@PostMapping("/deleteStudent")
	String deleteStudent(@RequestBody DeletePerson student) {
		String response=signs.studentDelete(student);
		return response;
	}
	
	@PostMapping("/viewStudent")
	StudentSignUp viewStudent(@RequestBody DeletePerson person) {
		StudentSignUp view=signs.studentView(person);
		return view;
	}
	
//	@PostMapping("/editStudent")
//	StudentSignUp editStudent(@RequestBody DeletePerson person) {
//		StudentSignUp edit=signs.studentEdit(person);
//		return edit;
//	}
}
