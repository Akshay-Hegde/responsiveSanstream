/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-fontheart' : '&#x21;',
			'icon-fontasterisk' : '&#x22;',
			'icon-fontbolt' : '&#x23;',
			'icon-fontpacman' : '&#x24;',
			'icon-fontenvelope' : '&#x25;',
			'icon-fontcomment' : '&#x26;',
			'icon-fontuser' : '&#x27;',
			'icon-fontbullhorn' : '&#x28;',
			'icon-fontpodcast' : '&#x29;',
			'icon-fonttwitter' : '&#x2a;',
			'icon-fontfacebook' : '&#x2b;',
			'icon-fontfeed' : '&#x2c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-font[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};