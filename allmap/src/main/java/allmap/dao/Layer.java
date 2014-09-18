package allmap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import allmap.bean.LayerBean;
import allmap.util.AppConnection;

import com.mysql.jdbc.PreparedStatement;

public class Layer {
	private Connection conn = null;
	private PreparedStatement ps = null;
	private ResultSet rs = null;
	
	private static final String SQL_LAYER = "SELECT * FROM USER u "
			+ " inner join USER_ROLE ur on u.USER_ID = ur.ROLE_ID"
			+ " inner join ROLE_LAYER rl on ur.ROLE_ID = rl.ROLE_ID"
			+ " inner join LAYER l on rl.LAYER_ID = l.LAYER_ID"
			+ " WHERE u.USER_ID = ?"
			+ " ORDER BY LAYER_INDEX";
	
	public List<LayerBean> selectLayer(Integer userId) throws SQLException {
		List<LayerBean> lstLayer = new ArrayList<LayerBean>();
		
		try {
			conn = AppConnection.getInstance().getConnection();
			ps = (PreparedStatement) conn.prepareStatement(SQL_LAYER);
			ps.setInt(1, userId);
			rs = ps.executeQuery();
			
			while(rs.next()) {
				LayerBean layerBean = new LayerBean();
				layerBean.setLayerId(rs.getInt("LAYER_ID"));
				layerBean.setLayerName(rs.getString("LAYER_NAME"));
				layerBean.setLayerURL(rs.getString("LAYER_URL"));
				layerBean.setLayerIndex(rs.getString("LAYER_INDEX"));
				lstLayer.add(layerBean);
			}
		} catch(SQLException ex) {
			ex.printStackTrace();
			throw ex;
		} finally{
			if(conn != null){
				conn.close();
			}
		}
		
		return lstLayer;
	}
}
