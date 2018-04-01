window.onload = function() {
	var a = document.getElementById("toTop")
	a.onclick = scroll;
	function scroll(){	
		var y = window.scrollY;
		console.log(y);
		y = (y - 10);
		if(y > 0){
			window.scrollTo(0, y);
			var b = setTimeout(scroll, 1);
		}
		else{
			clearTimeout(b);
		}
	}
}
