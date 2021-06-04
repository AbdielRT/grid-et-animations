const navbar = document.querySelector('.main-header');

// Rename html and window heights
var top_html = document.documentElement.scrollTop;
var height_html = document.documentElement.scrollHeight;
var height_client = document.documentElement.clientHeight;

var scrollpercent = (top_html) / (height_html - height_client);
var a = (1 - (scrollpercent/2) );

window.onscroll = function (){
	if (window.pageYOffset >= 2){
		navbar.classList.add('fixed-bar');
		navbar.style.backgroundColor = `rgba(240, 240, 240,${a})`;
	} else {
		navbar.classList.remove('fixed-bar');
		navbar.style.backgroundColor = `rgb(240, 240, 240)`;
	}
}