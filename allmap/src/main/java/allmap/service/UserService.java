package allmap.service;

import allmap.bean.UserBean;
import allmap.dao.User;

public class UserService {
	
	User user = new User();
	
	public UserBean authenUser(String username, String password) {
		UserBean userBean = null;
		try {
			if(user.checkUsername(username)) {
				userBean = user.selectUser(username, password);
				if(userBean == null) {
					throw new RuntimeException("5012");
				}
			} else {
				throw new RuntimeException("5013");
			}
		} catch(Exception ex) {
			throw new RuntimeException("5000");
		}
		return userBean;
	}
	

}
