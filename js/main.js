(function () {
	document.head = document.head || document.getElementsByTagName('head')[0];

	// Taken from https://gist.github.com/mathiasbynens/428626
	function changeFavicon(src) {
		var link = document.createElement('link'),
		oldLink = document.getElementById('favicon');
		link.id = 'favicon';
		link.rel = 'shortcut icon';
		link.href = src;
		if (oldLink) {
			document.head.removeChild(oldLink);
		}
		document.head.appendChild(link);
	}

	function changeTitle (week) {
		var title = document.getElementById("title");
		title.innerHTML = "Vecka " + week;
	}

	function changeDisplayedWeek (week) {
		var weekContainer = document.getElementById("week");
		weekContainer.innerHTML = week;
	}

	window.onload = function () {
		var week = new Date().getWeek();
		changeFavicon("images/" + week + ".ico");
		changeTitle(week);
		changeDisplayedWeek(week);
	};
})();