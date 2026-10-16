// Every page holds its text in English and in French. The language shown is the one picked
// with the buttons, else the browser's; the choice is remembered on this device only.
(function () {
	var root = document.documentElement;
	var saved = null;
	try { saved = localStorage.getItem("lang"); } catch (e) {}
	var browser = (navigator.language || "en").slice(0, 2) === "fr" ? "fr" : "en";

	function use(lang) {
		root.classList.toggle("fr", lang === "fr");
		root.lang = lang;
		document.querySelectorAll(".lang button").forEach(function (b) {
			b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
		});
		var title = document.querySelector('meta[name="title-' + lang + '"]');
		if (title) document.title = title.content;
	}

	use(saved || browser);
	document.addEventListener("DOMContentLoaded", function () {
		use(saved || browser);
		document.querySelectorAll(".lang button").forEach(function (b) {
			b.addEventListener("click", function () {
				try { localStorage.setItem("lang", b.dataset.lang); } catch (e) {}
				saved = b.dataset.lang;
				use(saved);
			});
		});
	});
})();
