package allmap.service;

import allmap.bean.UserBean;
import allmap.dao.Layer;
import allmap.dao.User;

public class UserService {
	
	User user = new User();
	Layer layer = new Layer();
	
	public UserBean authenUser(String username, String password) {
		UserBean userBean = null;
		try {
			if(user.checkUsername(username)) {
				userBean = user.selectUser(username, password);
				
				if(userBean == null) {
					throw new RuntimeException("5012");
				}
				
				userBean.setLstLayer(layer.selectLayer(userBean.getUserId()));
				
			} else {
				throw new RuntimeException("5013");
			}
		} catch(Exception ex) {
			ex.printStackTrace();
			throw new RuntimeException("5000");
		}
		return userBean;
	}
	

}
