package allmap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import allmap.bean.DomainBean;
import allmap.util.AppConnection;

import com.mysql.jdbc.PreparedStatement;

public class Domain {
	private Connection conn = null;
	private PreparedStatement ps = null;
	private ResultSet rs = null;

	private static final String SQL_DOMAIN = "SELECT DOMAIN_ID, DOMAIN_NAME, "
			+ " DOMAIN_URL, DOMAIN_CODE, DOMAIN_SEARCH_BASE FROM DOMAIN WHERE DOMAIN_ID = ?";

	public List<DomainBean> selectDomain(Integer domainId) throws SQLException {
		List<DomainBean> lstDomain = new ArrayList<DomainBean>();

		try {
			conn = AppConnection.getInstance().getConnection();
			ps = (PreparedStatement) conn.prepareStatement(SQL_DOMAIN);
			ps.setInt(1, domainId);
			rs = ps.executeQuery();

			while (rs.next()) {				
				DomainBean domainBean = new DomainBean();
				domainBean.setDomainId(rs.getInt("DOMAIN_ID"));
				domainBean.setDomainName(rs.getString("DOMAIN_NAME"));
				domainBean.setDomainURL(rs.getString("DOMAIN_URL"));
				domainBean.setDomainCode(rs.getString("DOMAIN_CODE"));
				domainBean.setDomainSearchBase(rs.getString("DOMAIN_SEARCH_BASE"));
				lstDomain.add(domainBean);
			}
		} catch (SQLException ex) {
			ex.printStackTrace();
			throw ex;
		} finally {
			if (conn != null) {
				conn.close();
			}
		}

		return lstDomain;
	}
}
