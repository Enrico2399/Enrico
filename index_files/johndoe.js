/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link, .js-scroll").on('click', function(event) {

        if (this.hash !== "" && $(this.hash).length) {

            event.preventDefault();

            var hash = this.hash;
            var navHeight = $('.navbar').outerHeight();

            // chiude il menu a tendina su mobile dopo la scelta
            $('#navbarSupportedContent').collapse('hide');

            $('html, body').animate({
                scrollTop: $(hash).offset().top - (hash === '#home' ? 0 : navHeight)
            }, 700, function(){
                history.replaceState(null, '', hash);
            });
        }
    });
});

// tema scuro/chiaro: lo stato iniziale lo imposta lo script nel <head>
$(document).ready(function() {
	var $toggle = $('#theme-toggle');

	function applyTheme(theme) {
		var isDark = theme === 'dark';
		var label = isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro';
		document.documentElement.setAttribute('data-theme', theme);
		$('#theme-icon').text(isDark ? '☀️' : '🌙');
		$toggle.attr({ 'aria-pressed': isDark, 'aria-label': label, 'title': label });
		$('meta[name="theme-color"]').attr('content', isDark ? '#121212' : '#ffffff');
	}

	applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

	$toggle.on('click', function() {
		var theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
		applyTheme(theme);
		try { localStorage.setItem('theme', theme); } catch (e) {}
	});
});

// custom functions
$(document).ready(function() {
	$('#current-year').text(new Date().getFullYear());
});
