package allmap.service;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;

import allmap.bean.DomainBean;

public class DomainServiceTest {

	@Test
	public void domainId_should_9AI() {
		DomainService domainService = new DomainService();
		List<DomainBean> lstDomainBean = domainService.getDomain("1");
		assertEquals("9AI", lstDomainBean.get(0).getDomainCode());
	}
	
	@Test
	public void domainId_should_empty() {
		DomainService domainService = new DomainService();
		List<DomainBean> lstDomainBean = domainService.getDomain("2");
		assertEquals(null, lstDomainBean.get(0).getDomainCode());
	}

}
