package allmap.bean;

import java.util.List;

public class UserBean {

	private Integer userId;
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String domainId;
	private boolean external;
	
	private List<LayerBean> lstLayer;
	
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getDomainId() {
		return domainId;
	}
	public void setDomainId(String domainId) {
		this.domainId = domainId;
	}
	public boolean isExternal() {
		return external;
	}
	public void setExternal(boolean external) {
		this.external = external;
	}
	public List<LayerBean> getLstLayer() {
		return lstLayer;
	}
	public void setLstLayer(List<LayerBean> lstLayer) {
		this.lstLayer = lstLayer;
	}

	
}
