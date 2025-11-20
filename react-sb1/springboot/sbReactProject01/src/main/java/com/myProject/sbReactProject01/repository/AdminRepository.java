package com.myProject.sbReactProject01.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myProject.sbReactProject01.model.AdminSignUp;

public interface AdminRepository extends JpaRepository<AdminSignUp,Integer> {

	AdminSignUp getByFullNameAndPassword(String s,String s1);

}
