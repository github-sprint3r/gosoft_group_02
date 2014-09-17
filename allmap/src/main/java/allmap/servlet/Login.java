package allmap.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;

import allmap.bean.UserBean;
import allmap.service.LoginService;

@WebServlet("/login")
public class Login extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	LoginService loginService = new LoginService();

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String domain = request.getParameter("domain");
		
		try {
			UserBean user = loginService.login(username, password, domain);
			printJsonObject(user,response);
		} catch (RuntimeException e) {
			printJsonObject(new UserBean(),response);
		}

	}
	private void  printJsonObject(Object obj,HttpServletResponse response)throws IOException{
		PrintWriter out = response.getWriter();
		ObjectMapper jacksonMapper = new ObjectMapper();
		out.print(jacksonMapper.writeValueAsString(obj));
		out.flush();
		out.close();
	}

}
