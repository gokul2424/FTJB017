package com.cts.springbootbasic.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.springbootbasic.entities.Course;

public interface CourseRepo extends JpaRepository<Course, Integer> {

}
