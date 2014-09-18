package allmap.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map;

import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.directory.Attribute;
import javax.naming.directory.Attributes;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;

import allmap.bean.DomainBean;
import allmap.constant.Constant;
import allmap.util.AppConnection;

public class LdapService {
	
	
	public void authenUser(String username, String password, String domainId) throws Exception {
		
		
		Connection connection = null;
		PreparedStatement pstmtDomain = null;
		ResultSet resultDomain = null;
		DomainBean domainBean = null;
		
		String sqlCommand = "SELECT * FROM DOMAIN WHERE DOMAIN_ID = ? ";
		
		if(domainId == null) {
			throw new Exception(Constant.EXCEPTION_CODE_LOGIN_INVALID_DOMAIN); // Invalid domain
		}
		
		try {
			connection = AppConnection.getInstance().getConnection();
			pstmtDomain = connection.prepareStatement(sqlCommand);
			pstmtDomain.setString(1, domainId);
			resultDomain = pstmtDomain.executeQuery();
			
			if(resultDomain.next()) {
				domainBean = new DomainBean();
				domainBean.setDomainId(resultDomain.getInt("DOMAIN_ID"));
				domainBean.setDomainName(resultDomain.getString("DOMAIN_NAME"));
				domainBean.setDomainCode(resultDomain.getString("DOMAIN_CODE"));
				domainBean.setDomainURL(resultDomain.getString("DOMAIN_URL"));
				domainBean.setDomainSearchBase(resultDomain.getString("DOMAIN_SEARCH_BASE"));
			} else {
				throw new Exception(Constant.EXCEPTION_CODE_LOGIN_INVALID_DOMAIN); // Invalid domain
			}
			
			
			return;
 		} catch(Exception ex) {
 			throw new Exception(ex.getMessage());
		} finally {
			
		}
		
	}
}
