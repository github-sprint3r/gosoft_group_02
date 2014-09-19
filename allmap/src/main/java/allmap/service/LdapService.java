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
 		} catch(Exception ex) {
 			System.out.println(ex.getMessage());
 			
 			throw new Exception(Constant.EXCEPTION_GLOBAL);
		} finally {
			
		}
			
		// check username
		System.out.println("username : "  + username);
		 try {
			 checkLdapUserName(username, domainBean);
			} catch(Exception ex) {
				System.out.println("usernameTest : "  + username);
				System.out.println (ex.getMessage());
	 			if(ex.getMessage()==null) {
	 				throw new Exception(Constant.EXCEPTION_CODE_LOGIN_INVALID_USERNAME);
	 			}
	 			throw new Exception(Constant.EXCEPTION_GLOBAL);
			}	
		 
		// check username/passeword
		try {
			checkLdapUserNamePassword(username, password, domainBean);
		} catch(Exception ex) {
 			if(ex.getMessage().contains("error code 49")) {
 				throw new Exception(Constant.EXCEPTION_CODE_LOGIN_INVALID_PASSWORD);
 			}
 			throw new Exception(Constant.EXCEPTION_GLOBAL);
		}
		
		return;

		
	}
	
	
	private void checkLdapUserName(String username, DomainBean domainBean) throws Exception {
		Hashtable<String, String> env = new Hashtable<String, String>();

        
        env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
        env.put(Context.PROVIDER_URL, domainBean.getDomainURL());
        env.put(Context.SECURITY_PRINCIPAL, domainBean.getDomainSearchBase());
        env.put(Context.SECURITY_CREDENTIALS, "allmap");
        env.put(Context.SECURITY_AUTHENTICATION, "simple");
        env.put("com.sun.jndi.ldap.read.timeout", "2000");
        
        String searchFilter = "(cn=" + username + ")";
        SearchControls searchCtls = new SearchControls();
        searchCtls.setSearchScope(SearchControls.SUBTREE_SCOPE);
        DirContext ctxGC = new InitialDirContext(env);
        
        NamingEnumeration<SearchResult> result = ctxGC.search(domainBean.getDomainSearchBase(), searchFilter, searchCtls);
        
//        if(result.next()) {
//        	throw  new Exception(Constant.EXCEPTION_CODE_LOGIN_INVALID_USERNAME);
//        }
        
        
        
        SearchResult sr = (SearchResult) result.next();
        
        System.out.println("sr : "  + sr.getNameInNamespace());
//        
//        Attributes attrs = sr.getAttributes();
//        String key = "";
//        Object value = "";
//        Map amap = null;
//        if (attrs != null) {
//            amap = new HashMap();
//            NamingEnumeration ne = attrs.getAll();
//            Attribute attr = null;
//            while (ne.hasMore()) {
//              attr = (Attribute) ne.next();
//              key = attr.getID();
//              //set value
//              if (attr.size() > 1) {
//                  ArrayList temps = new ArrayList();
//                  NamingEnumeration gg = attr.getAll();
//                  while (gg.hasMore()) {
//                      String temp = (String) gg.next();
//                      temps.add(temp);
//                  }
//                  value = temps;
//              } else {
//                  value = attr.get();
//              }
//              amap.put(key, value);                 
//              attr = null;
//            }
//        }
	}
	
	private void checkLdapUserNamePassword(String username, String password, DomainBean domainBean) throws Exception {
		Hashtable<String, String> env = new Hashtable<String, String>();
        env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
        env.put(Context.PROVIDER_URL, domainBean.getDomainURL());
        env.put(Context.SECURITY_PRINCIPAL, "cn=" + username + "," + domainBean.getDomainSearchBase());
        env.put(Context.SECURITY_CREDENTIALS, password);
        env.put(Context.SECURITY_AUTHENTICATION, "simple");
        env.put("com.sun.jndi.ldap.read.timeout", "2000");
        
        String searchFilter = "(cn=" + username + ")";
        SearchControls searchCtls = new SearchControls();
        searchCtls.setSearchScope(SearchControls.SUBTREE_SCOPE);
        DirContext ctxGC = new InitialDirContext(env);
        
        NamingEnumeration<SearchResult> result = ctxGC.search(domainBean.getDomainSearchBase(), searchFilter, searchCtls);
        
        SearchResult sr = (SearchResult) result.next();
        Attributes attrs = sr.getAttributes();
        String key = "";
        Object value = "";
        Map amap = null;
        if (attrs != null) {
            amap = new HashMap();
            NamingEnumeration ne = attrs.getAll();
            Attribute attr = null;
            while (ne.hasMore()) {
              attr = (Attribute) ne.next();
              key = attr.getID();
              //set value
              if (attr.size() > 1) {
                  ArrayList temps = new ArrayList();
                  NamingEnumeration gg = attr.getAll();
                  while (gg.hasMore()) {
                      String temp = (String) gg.next();
                      temps.add(temp);
                  }
                  value = temps;
              } else {
                  value = attr.get();
              }
              amap.put(key, value);                 
              attr = null;
            }
        }
	}
	
	
}
