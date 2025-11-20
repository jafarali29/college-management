package com.myProject.sbReactProject01.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Marks")
@Setter
@Getter
public class Marks {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String subjects;
	private int marks;
	
	@ManyToOne
	@JoinColumn(name="hall_ticket")
	@JsonBackReference
	private Results results;
	
}
