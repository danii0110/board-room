package com.boardroom.board_room;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BoardRoomApplication {

	public static void main(String[] args) {
//		SpringApplication.run(BoardRoomApplication.class, args);
		Hello hello = new Hello();
		hello.setData("hello");
		String data = hello.getData();
		System.out.println("data = " + data);

		SpringApplication.run(BoardRoomApplication.class, args);
	}

}