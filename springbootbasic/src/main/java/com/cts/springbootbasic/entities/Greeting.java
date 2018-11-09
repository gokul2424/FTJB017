package com.cts.springbootbasic.entities;

public class Greeting {
	
	String message;
	
	

	public Greeting() {
		super();
	}

	public Greeting(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Greeting [message=" + message + "]";
	}
	

}
