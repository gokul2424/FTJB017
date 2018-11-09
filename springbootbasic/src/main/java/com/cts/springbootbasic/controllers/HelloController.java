package com.cts.springbootbasic.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.springbootbasic.entities.Greeting;

@RestController
public class HelloController {
	
	@RequestMapping(path="/hello", method=RequestMethod.GET)
	public Greeting sayHello(){
		return new Greeting("Konichiwa!!");
	}

}
