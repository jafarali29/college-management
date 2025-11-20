package com.myProject.sbReactProject01.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myProject.sbReactProject01.model.Results;

public interface ResultsRepository extends JpaRepository<Results,String>{

	Results findByHallTicket(String hallTicket);

}
