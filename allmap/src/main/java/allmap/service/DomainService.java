package allmap.service;

import java.sql.SQLException;
import java.util.List;

import allmap.bean.DomainBean;
import allmap.dao.Domain;

public class DomainService {
	
	public List<DomainBean> getDomain(String domainId) {
		Domain domain = new Domain();
		List<DomainBean> lstDomainBean = null;
		try {
			lstDomainBean = domain.selectDomain(Integer.parseInt(domainId));
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return lstDomainBean;
	}
}
