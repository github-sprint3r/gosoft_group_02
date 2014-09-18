package allmap.service;

import allmap.bean.UserBean;
import allmap.constant.Constant;
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
					throw new RuntimeException(Constant.EXCEPTION_CODE_LOGIN_NONAD_INVALID_PASSWORD);
				}
				
				userBean.setLstLayer(layer.selectLayer(userBean.getUserId()));
				
			} else {
				throw new RuntimeException(Constant.EXCEPTION_CODE_LOGIN_NONAD_INVALID_USERNAME);
			}
		} catch(Exception ex) {
			ex.printStackTrace();
			throw new RuntimeException(Constant.EXCEPTION_GLOBAL);
		}
		return userBean;
	}
	

}
