package com.cts.springbootbasic.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="course_table")
public class Course {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	
	String caption;
	int votes;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCaption() {
		return caption;
	}
	public void setCaption(String caption) {
		this.caption = caption;
	}
	public int getVotes() {
		return votes;
	}
	public void setVotes(int votes) {
		this.votes = votes;
	}
	@Override
	public String toString() {
		return "Course [id=" + id + ", caption=" + caption + ", votes=" + votes + "]";
	}
	
	
	

}
