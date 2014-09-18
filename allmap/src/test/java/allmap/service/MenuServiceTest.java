package allmap.service;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import allmap.bean.MenuBean;

public class MenuServiceTest {
    MenuService menuService = new MenuService();
	
	@Test
	public void admin_should_2menu() {
		List<MenuBean> menu =  menuService.generateMenuList("1");
		assertEquals(2, menu.size());
	}
	
	@Test
	public void location_should_1menu() {
		List<MenuBean> menu =  menuService.generateMenuList("2");
		assertEquals(1, menu.size());
	}
	
	/*private  MenuBean initMenu(String menuId,String menuName){
		List<MenuBean> list =new ArrayList<MenuBean>();
		MenuBean tempMenu = new MenuBean(); 
		
		tempMenu.setMenuId(menuId);
		tempMenu.setMenuName(menuName);
		
		return null;
	}*/

}
