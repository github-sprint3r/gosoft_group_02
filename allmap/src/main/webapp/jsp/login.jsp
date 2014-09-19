<jsp:include page="layout/header.jsp" flush="false" />
<script type="text/javascript">

	function submitLogin() {
		
		var canLogin = true;
		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		var domain = document.getElementById('domain').value;
		
		if (username == "") {
			document.getElementById("errorUsername").style.display="inline-block";
			canLogin = false;
		} else {
			document.getElementById("errorUsername").style.display="none";
		}
		
		if (password == "") {
			document.getElementById("errorPassword").style.display="inline-block";
			canLogin = false;
		} else {
			document.getElementById("errorPassword").style.display="none";
		}
		
		
		if(canLogin){
			require([ "dojo/ready", "dojo/_base/lang", "dijit/registry",
						"dojo/request/xhr", "dojo/json" ], function(ready, lang,
						registry, xhr, JSON) {
					ready(function() {
						xhr("../login", {
								query: {
								'username': username,
								'password': password,
								'domain': domain
								},
							handleAs : "json"
						}).then(function(data) {
							if(typeof data.username == 'undefined'){
								setErrorCode(JSON.stringify(data));
								openDialogError();
							}
							else{
								window.location = "./main.jsp?userId="+data.userId;
							}
						});
					});
			});
		}
		//test set error code  by yeamgood 
		//setErrorCode("6002");
		//openDialogError();
		//setDomain();
		
	}
	
	function encodePassword(){
		var salt = $("#password").val();
		var key128Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, { keySize: 128/32 });
		$("#password").val(key128Bits);
	}
	
	function openDialogError(){
		dijit.byId('errorDialog').show();
	}
	
	function closeDialogError(){
		document.getElementById('username').value = "";
		document.getElementById('password').value = "";
		document.getElementById("errorUsername").style.display="none";
		document.getElementById("errorPassword").style.display="none";
		dijit.byId('errorDialog').hide();
	}
	
	function setErrorCode(errorCode){
		document.getElementById('errorCode').innerHTML = errorCode;
	}
	
	function setDomain(){
		var optionData = "";
		optionData = optionData + "<option value='1'>CPALL</option>";
		optionData = optionData + "<option value='2'>OTHER</option>";
		document.getElementById('domain').innerHTML = optionData;
	}
	
</script>

<form class="form-horizontal" id="loginfrom" name="loginfrom">
	<div class="container">
		<div class="col-md-4 col-md-offset-4">
			<!-- <h2 class="form-signin-heading">Login</h2> -->
			<br> <br>
			<div class="form-group">
				<label for="username" class="col-sm-3 control-label">Username</label>
				<div class="col-sm-7">
					<input type="text" class="form-control" id="username"
						name="username" class="form-control" maxlength="100"> <span
						id="errorUsername" style="color: red;display: none;">กรุณากรอก
						Username</span>
				</div>
			</div>
			<div class="form-group">
				<label for="password" class="col-sm-3 control-label">Password</label>
				<div class="col-sm-7">
					<input type="password" class="form-control" id="password"
						name="password" class="form-control" maxlength="100"> <span
						id="errorPassword" style="color: red;display: none;">กรุณากรอก
						Password</span>
				</div>
			</div>
			<div class="form-group">
				<label for="domain" class="col-sm-3 control-label">Domain</label>
				<div class="col-sm-7">
					<select id="domain" name="domain" class="form-control">
						<option value="1">CPALL</option>
						<option value="2">OTHER</option>
					</select>
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-3 col-sm-7">
					<button type="button" id="loginButton" class="btn btn-lg btn-primary btn-block"
						onClick="submitLogin();">LOGIN</button>
				</div>
			</div>
		</div>
	</div>

		<div class="dijitHidden">
		<div data-dojo-type="dijit/Dialog" style="width:200px;" data-dojo-props="title:'แจ้งเตือน'" id="errorDialog">
			<div style="text-align: center;">
				<div><span>Log in ไม่สำเร็จ</span></div>
				<div><span>Error Code : </span><span id="errorCode"></span></div>
				<button type="button" id="okButton" class="btn btn-primary btn-xs"
						onClick="closeDialogError();">Ok</button>
			</div>
		</div>
		</div>

		<!-- load dojo and provide config via data attribute -->
		<!-- load dojo -->
		<script>
			// Require the Dialog class
			require(["dijit/registry", "dojo/parser", "dijit/Dialog", "dijit/form/Button", "dojo/domReady!"], function(registry, parser){
				// Show the dialog
				window.showDialog = function() {
					registry.byId("errorDialog").show();
				}
				// Hide the dialog
				window.hideDialog = function() {
					registry.byId("errorDialog").hide();
				}
				// Force them to provide an answer
				window.doAlert = function() {
					alert("You must agree!");
				}

				parser.parse();
			});
		</script>
	
</form>


<jsp:include page="layout/footer.jsp" flush="false" />