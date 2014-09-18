package allmap.service;

import allmap.bean.UserBean;

public class LoginService {

	public UserBean login(String username, String password, String domain){
		UserService userService = new UserService();
		return userService.authenUser(username, password);
	}
	
	public void connection() {
		
	}

}
