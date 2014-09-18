<jsp:include page="layout/header.jsp" flush="false" />
<script type="text/javascript">
	$(document.body).on(
			'click',
			'.dropdown-menu li',
			function(event) {
				var $target = $(event.currentTarget);
				$target.closest('.btn-group').find('[data-bind="label"]').text(
						$target.text()).end().children('.dropdown-toggle')
						.dropdown('toggle');

				return false;

			});

	function submitLogin() {
		/* 		if ($("#username").val() == "") {
		 alert("กรุณากรอก username");
		 return false;
		 } else if ($("#password").val() == "") {
		 alert("กรุณากรอก password");
		
		 } */
		/* else if($("#domain").val() == "") {
			alert("กรุณากรอก เลือก Domain");
		} */
/* 
		var frmData = $("#loginfrom").serializeArray();
		$.ajax({
			url : "../login",
			data : frmData,
		}).done(function(data) {
			alert(data);
		}); */
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
						id="errorUsername" style="color: red; display: none;">กรุณากรอก
						Username</span>
				</div>
			</div>
			<div class="form-group">
				<label for="password" class="col-sm-3 control-label">Password</label>
				<div class="col-sm-7">
					<input type="password" class="form-control" id="password"
						name="password" class="form-control" maxlength="100"> <span
						id="errorPassword" style="color: red; display: none;">กรุณากรอก
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
</form>


<jsp:include page="layout/footer.jsp" flush="false" />