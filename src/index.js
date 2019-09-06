const remote = require('electron').remote;

function init() {
	let window = remote.getCurrentWindow();

	document.getElementById("current-device").addEventListener("click", function (event) {
		document.getElementById("device-list").classList.toggle("open");
	});

	document.getElementById("minimize").addEventListener("click", function (event) {
		window = remote.getCurrentWindow();
		window.minimize();
	});

	document.getElementById("close").addEventListener("click", function (event) {
		window = remote.getCurrentWindow();
		window.close();
	});

}

// When document has loaded, initialise
document.onreadystatechange = function (event) {
	if (document.readyState == "complete") {
		init();
	}
};