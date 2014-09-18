package allmap.service;

import static org.junit.Assert.fail;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;


public class LdapServiceTest {

	LdapService ldapService = new LdapService();
	String domainId = "1"; // CPALL
	String usernameAdmin = "sukit";
	String passwordAdmin = "sk12345";
	String usernameLocation = "thanakrit";
	String passwordLocation = "1234";
	
	@Test
	public void admin_login_should_success() {
		try {
			ldapService.authenUser(usernameAdmin, passwordAdmin, domainId);
		} catch (Exception ex) {
			fail(ex.getMessage());
		}
	}
	
	@Test
	public void location_login_should_success() {
		try {
			ldapService.authenUser(usernameLocation, passwordLocation, domainId);
		} catch (Exception ex) {
			fail(ex.getMessage());
		}
	}
	
//
//	@Test
//	public void testMenuAdminUser() {
//		
//		List<String> expectedMenuList = new ArrayList<String>();
//		List<String> resultMenuList = new ArrayList<String>();
//		expectedMenuList.add("Home");
//		expectedMenuList.add("การบริหารจัดการสิทธิ์");
//		
//		resultMenuList = loginAuthen.checkMenu(usernameAdmin, domainId);
//		
//		assertEquals(expectedMenuList, resultMenuList);
//		
//	}
//	
//	@Test
//	public void testMenuLocationUser() {
//		
//		List<String> expectedMenuList = new ArrayList<String>();
//		List<String> resultMenuList = new ArrayList<String>();
//		expectedMenuList.add("Home");
//		
//		resultMenuList = loginAuthen.checkMenu(usernameLocation, domainId);
//		
//		assertEquals(expectedMenuList, resultMenuList);
//		
//	}
//	
//	@Test
//	public void testShowLayerAdminUser() {
//		
//		int resultLayerAmount = loginAuthen.checkLayerAmount(usernameAdmin, domainId);
//		
//		assertEquals(20, resultLayerAmount);
//	}
//	
//	@Test
//	public void testShowLayerLocationUser() {
//		
//		int resultLayerAmount = loginAuthen.checkLayerAmount(usernameLocation, domainId);
//		
//		assertEquals(15, resultLayerAmount);
//	}
	
	class FakeLdapService {
		
		public Boolean authenUser(String username, String password, String domain) {

			Boolean result = false;
			if (domain == "CPALL") {

				if (username == "sukit" && password == "sk12345") {
					result = true;
				}
				else if (username == "thanakrit" && password == "1234"){
					result = true;
				}else
				{
					result = false;
				}
					
			}

			return result;
		}
		
		
		
		public List<String> checkMenu(String username, String domain) {

			List<String> menuList = new ArrayList<String>();
			if (domain == "CPALL") {

				if (username == "sukit") {
					menuList.add("Home");
					menuList.add("การบริหารจัดการสิทธิ์");
				}
				else if (username == "thanakrit"){
					menuList.add("Home");
				}
					
			}

			return menuList;
		}


		public int checkLayerAmount(String username, String domain) {
			
			int layerAmount = 0;
			
			if (domain == "CPALL") {

				if (username == "sukit") {
					layerAmount = 20;
				}
				else if (username == "thanakrit"){
					layerAmount = 15;
				}
					
			}
			return layerAmount;
		}

	}

	
}
