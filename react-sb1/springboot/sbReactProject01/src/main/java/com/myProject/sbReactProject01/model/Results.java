package com.myProject.sbReactProject01.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Results")
@Setter
@Getter
public class Results {
	@Id
	private String hallTicket;
	private String fullName;
	
	@OneToMany(mappedBy="results",cascade=CascadeType.ALL)
	@JsonManagedReference
	private List<Marks> marks;
}
