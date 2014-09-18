package allmap.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;

import allmap.bean.MenuBean;
import allmap.util.AppConnection;

public class MenuService {

	
	
	public List<MenuBean> generateMenuList(String userId){
		List<MenuBean> menuList =  new ArrayList<MenuBean>();
		MenuBean menu;
		Connection con = null ;
		try {
			 con = AppConnection.getInstance().getConnection();
			String sql = "SELECT m.* "
					+ " FROM MENU m" 
				    +" LEFT JOIN ROLE_MENU rm ON m.MENU_ID = rm.MENU_ID " 
				    +" LEFT JOIN USER_ROLE ur ON rm.ROLE_ID = ur.ROLE_ID "
				    +" WHERE USER_ID = ?  ORDER BY m.SEQ ";
			 PreparedStatement queryMenu = con.prepareStatement(sql);
			 queryMenu.setString(1, userId);
			 ResultSet resultMenu = queryMenu.executeQuery();
			 while(resultMenu.next()){
				 menu = new MenuBean();
				 menu.setMenuId(resultMenu.getString("MENU_ID"));
				 menu.setMenuName(resultMenu.getString("MENU_NAME"));
				 menuList.add(menu);
			 }
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			 try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return menuList;
	}
	
	
}
