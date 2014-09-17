package allmap.service;

import allmap.bean.UserBean;

public class UserService {

	public UserBean authenUser(String username, String password){
		if("yg1234".equals(password)){
			UserBean userBean = new UserBean();
			userBean.setFirstName("ธนรัฐ");
			return userBean;
		}
		throw new RuntimeException("5011");
	}

}
