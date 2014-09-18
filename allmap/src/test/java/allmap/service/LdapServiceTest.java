package allmap.service;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;


public class LdapServiceTest {

	FakeLdapService loginAuthen = new FakeLdapService();
	String domain = "CPALL";
	String usernameAdmin = "sukit";
	String passwordAdmin = "sk12345";
	String usernameLocation = "thanakrit";
	String passwordLocation = "1234";
	
	@Test
	public void testLoginAdminUser() {

		Boolean authenResult = loginAuthen.checkAuthen(usernameAdmin, passwordAdmin, domain);
		
		assertEquals(true, authenResult);
		
	}
	
	@Test
	public void testLoginLocationUser() {
		
		Boolean authenResult = loginAuthen.checkAuthen(usernameLocation, passwordLocation, domain);
		
		assertEquals(true, authenResult);
		
	}
	

	@Test
	public void testMenuAdminUser() {
		
		List<String> expectedMenuList = new ArrayList<String>();
		List<String> resultMenuList = new ArrayList<String>();
		expectedMenuList.add("Home");
		expectedMenuList.add("บริหารจัดการเมนู");
		
		resultMenuList = loginAuthen.checkMenu(usernameAdmin, domain);
		
		assertEquals(expectedMenuList, resultMenuList);
		
	}
	
	@Test
	public void testMenuLocationUser() {
		
		List<String> expectedMenuList = new ArrayList<String>();
		List<String> resultMenuList = new ArrayList<String>();
		expectedMenuList.add("Home");
		
		resultMenuList = loginAuthen.checkMenu(usernameLocation, domain);
		
		assertEquals(expectedMenuList, resultMenuList);
		
	}
	
	@Test
	public void testShowLayerAdminUser() {
		
		int resultLayerAmount = loginAuthen.checkLayerAmount(usernameAdmin, domain);
		
		assertEquals(20, resultLayerAmount);
	}
	
	@Test
	public void testShowLayerLocationUser() {
		
		int resultLayerAmount = loginAuthen.checkLayerAmount(usernameLocation, domain);
		
		assertEquals(15, resultLayerAmount);
	}
	
	class FakeLdapService {
		
		public Boolean checkAuthen(String username, String password, String domain) {

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
					menuList.add("บริหารจัดการเมนู");
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
