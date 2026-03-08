package com.myProject.sbReactProject01.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.myProject.sbReactProject01.model.StudentSignUp;

@Repository
public interface ApplicationRepo extends JpaRepository<StudentSignUp,Integer>{
	public StudentSignUp getByFullNameAndPassword(String FullName,String Password);
	public StudentSignUp getByFullNameAndPhone(String fullName,String phone);
	@Transactional
	@Modifying
	long deleteByFullNameAndPhone(String name,String number);
	

}
