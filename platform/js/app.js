
	
	function showSaveStatus(status, button = "save") {
		if (status == 1) {
			$("#" + button + "_icon").addClass('icon-spinner');
			$("#" + button + "_icon").addClass('icon-spin');
			$("#" + button + "_icon").removeClass('icon-save');
			$("#" + button + "_button").attr('disabled', 'disabled')
		} else {
			$("#" + button + "_icon").removeClass('icon-spin');
			$("#" + button + "_icon").removeClass('icon-spinner');
			$("#" + button + "_icon").addClass('icon-save');
			$("#" + button + "_button").removeAttr('disabled');
		}
	}


	function getCurrentTime() {
		var currentdate = new Date();
		var datetime = "<small>" + currentdate.getFullYear() + "/" 
						+ (currentdate.getMonth() + 1) + "/" 
						+ currentdate.getDate() + " @ " 
						+ currentdate.getHours() + ":" 
						+ currentdate.getMinutes() + ":" 
						+ currentdate.getSeconds() + "</small>";
		return datetime;
	}


	function ngShowMessage(data, bShowTime)
	{
		//window.location.href = '?message=done';
		var show='<div class="span5">';
		var showError = '<div class="alert">';
		angular.forEach(data.error, function(value, key) {
			showError += value.message + "<br />";
		});
		showError += '</div>';
		show += showError;

		bShowTime = typeof bShowTime !== 'undefined' ? bShowTime : false;
		if (bShowTime)
		{
			show = show + "<small>" + getCurrentTime() + "</small>";
		}
		return show + "</div></div>";
	}