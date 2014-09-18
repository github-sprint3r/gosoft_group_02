package allmap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import allmap.bean.UserBean;
import allmap.util.AppConnection;

import com.mysql.jdbc.PreparedStatement;

public class User {
	private Connection conn = null;
	private PreparedStatement ps = null;
	private ResultSet rs = null;

	private static final String SQL_USER = "SELECT * FROM USER WHERE USER_NAME=? AND PASSWORD=? AND IS_ACTIVE=1";
	public UserBean selectUser(String username, String password) throws SQLException {
		UserBean userBean = null;
		
		try {
			conn = AppConnection.getInstance().getConnection();
			ps = (PreparedStatement) conn.prepareStatement(SQL_USER);
			ps.setString(1, username);
			ps.setString(2, password);
			rs = ps.executeQuery();
			
			if(rs.next()) {
				userBean = new UserBean();
				userBean.setUsername(rs.getString("USER_NAME"));
				userBean.setDomainId(rs.getString("DOMAIN_ID"));
				userBean.setFirstName(rs.getString("FIRSTNAME"));
				userBean.setLastName(rs.getString("LASTNAME"));
			}
		} catch(SQLException ex) {
			throw ex;
		} finally{
			if(conn != null){
				conn.close();
			}
		}
		
		return userBean;
	}
	
	private static final String SQL_USERNAME = "SELECT USER_NAME FROM USER WHERE USER_NAME=?";
	public boolean checkUsername(String username) throws SQLException {
		Boolean hasUsername = false;
		
		try {
			conn = AppConnection.getInstance().getConnection();
			ps = (PreparedStatement) conn.prepareStatement(SQL_USERNAME);
			ps.setString(1, username);
			rs = ps.executeQuery();
			
			if(rs.next()) {
				hasUsername = true;
			}	
		} catch(SQLException ex) {
			throw ex;
		} finally{
			if(conn != null){
				conn.close();
			}
		}
		
		return hasUsername;
	}
}
