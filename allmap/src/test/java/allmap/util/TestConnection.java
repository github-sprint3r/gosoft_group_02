package allmap.util;
import org.junit.Test;

import allmap.util.AppConnection;


public class TestConnection {
	
	@Test
	public void login_success_userbean_isnotnull() throws Exception{
		
		AppConnection.getInstance().getConnection();
	}
	
}
