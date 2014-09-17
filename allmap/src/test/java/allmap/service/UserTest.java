package allmap.service;

import static org.junit.Assert.*;

import org.junit.Test;

import allmap.bean.UserBean;

public class UserTest {
	UserService userService = new UserService();

	@Test
	public void authenuser_with_sukit_isnotnull() {
		UserBean userBean = userService.authenUser("thanarat", "yg1234");
		assertTrue(userBean != null);
	}

}
