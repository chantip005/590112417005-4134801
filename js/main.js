function getData() {
		var in1 = document.getElementById("in1").value;
		showData (in1);

	};
	function showData(msg) {
		document.getElementById("in1").innerHTML = msg;
	};
