package allmap.service;

import java.util.List;

import allmap.bean.DomainBean;
import allmap.bean.UserBean;
import allmap.constant.Constant;
import allmap.dao.Domain;
import allmap.dao.Layer;
import allmap.dao.User;

public class UserService {

	User user = new User();
	Layer layer = new Layer();
	Domain domain = new Domain();

	public UserBean authenUser(String username, String password, String domainId) {
		UserBean userBean = null;
		try {
			
			List<DomainBean> lstDomain = domain.selectDomain(Integer.parseInt(domainId));
			if (lstDomain.get(0) == null) {
				if (user.checkUsername(username)) {
					userBean = user.selectUser(username, password);

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
				// Authen AD code Here

			}

		} catch (Exception ex) {
			ex.printStackTrace();
			throw new RuntimeException(Constant.EXCEPTION_GLOBAL);
		}
		return userBean;
	}

}
