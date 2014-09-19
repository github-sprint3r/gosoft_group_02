package allmap.service;

import java.util.List;

import allmap.bean.DomainBean;
import allmap.bean.LogBean;
import allmap.bean.UserBean;
import allmap.constant.Constant;
import allmap.dao.Domain;
import allmap.dao.Layer;
import allmap.dao.User;

public class LoginService {
	User user = new User();
	Layer layer = new Layer();
	Domain domain = new Domain();

/*	public UserBean login(String username, String password, String domain){
		UserService userService = new UserService();
		return userService.authenUser(username, password, domain);
	}*/
	
	public UserBean login(String username, String password, String domainId) {
		UserBean userBean = null;
		
		try {
			DomainService domainService = new DomainService();
			UserService userService = new UserService();
			LogService logService = new LogService();
			List<DomainBean> lstDomain = domainService.getDomain(domainId);
			
			if (lstDomain.get(0).getDomainCode() == null) {
				// non AD
				if (user.checkUsername(username)) {
					userBean = userService.getUser(username, password);

					if (userBean == null) {
						throw new RuntimeException(
								Constant.EXCEPTION_CODE_LOGIN_NONAD_INVALID_PASSWORD);
					}

					userBean.setLstLayer(layer.selectLayer(userBean.getUserId()));
					
					
				} else {
					throw new RuntimeException(
							Constant.EXCEPTION_CODE_LOGIN_NONAD_INVALID_USERNAME);
				}
			} else {
				// Authen AD
				LdapService ldapService = new LdapService();
				ldapService.authenUser(username, password, domainId);
				
				if (user.checkUsername(username)) {
					userBean = user.selectUser(username);

					if (userBean == null) {
						throw new RuntimeException(
								Constant.EXCEPTION_CODE_LOGIN_INVALID_USERNAME);
					}

					userBean.setLstLayer(layer.selectLayer(userBean.getUserId()));

				} else {
					throw new RuntimeException(
							Constant.EXCEPTION_CODE_LOGIN_INVALID_PASSWORD);
				}
			}
			
			LogBean logBean = new LogBean();

			logBean.setUserId(userBean.getUserId().toString());
			logBean.setUsername(userBean.getUsername());
			logBean.setDevice("Com");
			logBean.setIpAddress("192.168.1.15");
			
			logService.insertLog(logBean);
		} catch (Exception ex) {
			LogBean logBean = new LogBean();

			logBean.setUserId("");
			logBean.setUsername(username);
			logBean.setDevice("Com");
			logBean.setIpAddress("192.168.1.15");
			
			LogService logService = new LogService();
			try {
				logService.insertLog(logBean);
			} catch (Exception e) {
				throw new RuntimeException(ex.getMessage());
			}
			
			ex.printStackTrace();			
//			throw new RuntimeException(Constant.EXCEPTION_GLOBAL);
			throw new RuntimeException(ex.getMessage());
		}
		return userBean;
	}

}
