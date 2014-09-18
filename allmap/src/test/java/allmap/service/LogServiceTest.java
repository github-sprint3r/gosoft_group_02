package allmap.service;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import allmap.bean.LogBean;
import allmap.bean.MenuBean;

public class LogServiceTest {

	LogService logService = new LogService();
	
	@Test
	public void log_insert_success_have_user() {
		
		LogBean logBean = initLog("1", "200.245667", "12.1234567", "Computer", "Chrome", "1", "192.168.0.5","sukit");
		
		try {
			assertTrue(logService.insertLog(logBean));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	@Test
	public void log_insert_success_not_have_user() {
		
		LogBean logBean = initLog(null, "124.00543", "134.121323", "Computer", "IE", "2", "192.168.3.2","otheruser");
		
		try {
			assertTrue(logService.insertLog(logBean));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
	private LogBean initLog(String userId , String latitude , String longtitude , String device , String browser , String menuId , String ipAddress ,String username){
		LogBean log = new LogBean();
		log.setUserId(userId);
		log.setLatitude(latitude);
		log.setLongtitude(longtitude);
		log.setDevice(device);
		log.setBrowser(browser);
		log.setMenuId(menuId);
		log.setIpAddress(ipAddress);
		log.setUsername(username);
		return log;
		
	}
	
}
