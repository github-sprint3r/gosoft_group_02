package allmap.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mysql.jdbc.StringUtils;

import allmap.bean.LogBean;
import allmap.util.AppConnection;

public class LogService {
    public boolean  insertLog(LogBean logBean) throws Exception{
		Connection con = null ;
		boolean isSuccess = false;
		try {
			 con = AppConnection.getInstance().getConnection();
			String sql = "INSERT INTO LOG (USER_ID,LATITUDE,LONGTITUDE,DEVICE,MENU_ID,LOG_DATE,IP_ADDRESS,USER_NAME)  "
					+" VALUES (?, ?, ?,?,?,SYSDATE(),?,?) ";
					
			 PreparedStatement insert = con.prepareStatement(sql);
			 if(logBean.getUserId() != null)
			     insert.setString(1, logBean.getUserId());
			 else
				 insert.setString(1, null);
			 if(logBean.getLatitude() != null)
			     insert.setString(2, logBean.getLatitude());
			 else   
				 insert.setString(2, null);
			 if(logBean.getLongtitude() != null)
				 insert.setString(3, logBean.getLongtitude());
			 else
				 insert.setString(3,null);
			 if(logBean.getDevice() != null)
				 insert.setString(4, logBean.getDevice());
			 else
				 insert.setString(4, null);
			 if(logBean.getMenuId() != null)
				 insert.setString(5, logBean.getMenuId().toString());
			 else
				 insert.setString(5, null);
			 if(logBean.getIpAddress() != null)
				 insert.setString(6, logBean.getIpAddress());
			 else
				 insert.setString(6, null);
			 if(logBean.getUsername() != null)
				 insert.setString(7, logBean.getUsername());
			 else
				 insert.setString(7, null);
			 
			 int resultSuccess = insert.executeUpdate();
        			
			 if(resultSuccess == 1) isSuccess = true;
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			 try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return isSuccess;
    }
}
