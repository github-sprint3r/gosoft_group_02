package allmap.service;

import static org.junit.Assert.*;

import org.junit.Test;

import allmap.bean.UserBean;

public class UserServiceTest {
	UserService userService = new UserService();

	@Test
	public void authenuser_with_thanarat_isnotnull() throws Exception {
		UserBean userBean = userService.authenUser("thanarat", "yg1234");
		assertTrue(userBean != null);
	}

}
