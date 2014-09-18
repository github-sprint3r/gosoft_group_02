package allmap.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;

import allmap.bean.MenuBean;
import allmap.service.MenuService;

@WebServlet("/menu")
public class Menu extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	MenuService menuService = new MenuService();
	
    private void doSubmit(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	String userId = request.getParameter("userId");
		try {
			List<MenuBean> menuList = menuService.generateMenuList(userId);
			printJsonObject(menuList,response);
		} catch (RuntimeException e) {
			printJsonObject(new MenuBean(),response);
		}
    	
    }
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doSubmit(request,response);
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doSubmit(request,response);

	}
	private void  printJsonObject(Object obj,HttpServletResponse response)throws IOException{
		PrintWriter out = response.getWriter();
		ObjectMapper jacksonMapper = new ObjectMapper();
		out.print(jacksonMapper.writeValueAsString(obj));
		out.flush();
		out.close();
	}

}
