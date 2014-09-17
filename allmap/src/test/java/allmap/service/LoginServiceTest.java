package allmap.service;

import org.junit.Test;

import allmap.bean.UserBean;
import static org.junit.Assert.*;

public class LoginServiceTest {
	LoginService loginService = new LoginService();
	
	@Test
	public void login_success_userbean_isnotnull(){
		UserBean userBean = loginService.login("thanarat","yg1234","2");
		assertTrue(userBean != null);
	}
	
	@Test(expected = RuntimeException.class)
	public void login_fail_throw_exception(){
		loginService.login("thanarat","abcd","2");
	}
}
