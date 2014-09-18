package allmap.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class AppConnection {
	
	private static AppConnection  appConnection;
	
	
	public static AppConnection getInstance() {
		if(appConnection == null) {
			appConnection = new AppConnection();
		}
		return appConnection;
	}
	
	public Connection getConnection() throws SQLException {
		
		Connection conn = null;


		try {
			//Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://192.168.100.9/som_allmap?" +
		                                   "user=som_allmap&password=som_allmap");

		    // Do something with the Connection

		} catch (SQLException ex) {
		    // handle any errors
			throw ex;
		}
		
		return conn;
	}
}




