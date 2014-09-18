package allmap.service;

import java.sql.SQLException;

import allmap.bean.UserBean;
import allmap.dao.User;

public class UserService {

	User user = new User();
//	Layer layer = new Layer();
//	Domain domain = new Domain();
	
	public UserBean getUser(String username, String password) {
		UserBean userBean = new UserBean();
		try {
			userBean = user.selectUser(username, password);
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return userBean;
	}
	
	public UserBean getUser(String username) {
		UserBean userBean = new UserBean();
		try {
			userBean = user.selectUser(username);
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return userBean;
	}

}
