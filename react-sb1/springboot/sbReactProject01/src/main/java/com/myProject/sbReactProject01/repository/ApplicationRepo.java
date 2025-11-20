package com.myProject.sbReactProject01.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myProject.sbReactProject01.model.StudentSignUp;

@Repository
public interface ApplicationRepo extends JpaRepository<StudentSignUp,Integer>{
	public StudentSignUp getByFullNameAndPassword(String FullName,String Password);
}
