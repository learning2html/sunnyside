function show(id) {
	var show = document.getElementById(id);
	console.log(show);
	if (show.style.display==="block") {
		show.style.display = "none";
	} else {
		show.style.display = "block";
	}
}