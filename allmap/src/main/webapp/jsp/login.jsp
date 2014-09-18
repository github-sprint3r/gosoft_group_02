<jsp:include page="layout/header.jsp" flush="false" />
<script type="text/javascript">
$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {
	   var $target = $( event.currentTarget );
	   $target.closest( '.btn-group' )
	      .find( '[data-bind="label"]' ).text( $target.text() )
	         .end()
	      .children( '.dropdown-toggle' ).dropdown( 'toggle' );
	 
	   return false;
	 
});
</script>

<form class="form-horizontal" id="loginfrom" name="loginfrom">
	<div class="container">
		<div class="col-md-4 col-md-offset-4">
			<!-- <h2 class="form-signin-heading">Login</h2> -->
			<br><br>
			<div class="form-group">
				<label for="username" class="col-sm-3 control-label">Username</label>
				<div class="col-sm-7">
					<input type="text" class="form-control" id="username" name="username" class="form-control" maxlength="100">
				</div>
			</div>
			<div class="form-group">
				<label for="password" class="col-sm-3 control-label">Password</label>
				<div class="col-sm-7">
					<input type="password" class="form-control" id="password" name="password" class="form-control" maxlength="100">
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-labeln" >Domain</label>
				<div class="col-sm-7">
				<div class="btn-group btn-input clearfix" style="width: 190px">
					  <button id="domain_id" type="button" class="btn btn-default dropdown-toggle form-control" data-toggle="dropdown">
					    <span data-bind="label">กรณาเลือก</span> <span class="caret"></span>
					  </button>
					  <ul class="dropdown-menu" role="menu">
					    <li id="cpall"><a href="#">CPALL</a></li>
					    <li id="other"><a href="#">OTHER</a></li>
					  </ul>
				</div>
			   </div>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-3 col-sm-7">
					<button type="button" class="btn btn-lg btn-primary btn-block" onClick="location.href='../jsp/bench.jsp'">login</button> 
				</div>
			</div>
		</div>
	</div>
</form>


<jsp:include page="layout/footer.jsp" flush="false" />