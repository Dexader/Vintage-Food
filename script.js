document.addEventListener('DOMContentLoaded', function () {
	let burger = document.querySelector('.burger');
	let menu = document.querySelector('.burger__menu');
	let menuItems = document.querySelectorAll('.burger__item');

	function closeMenu() {
		burger.classList.remove('open');
		menu.classList.remove('open');
		menu.classList.add('close');
	}

	menuItems.forEach(function (item) {
		item.addEventListener('click', closeMenu);
	});

	document.addEventListener('click', function (event) {
		if (!menu.contains(event.target) && !burger.contains(event.target)) {
			closeMenu();
		}
	});

	burger.addEventListener('click', function () {
		if (menu.classList.contains('open')) {
			closeMenu();
		} else {
			this.classList.add('open');
			menu.classList.add('open');
			this.classList.remove('close');
			menu.classList.remove('close');
		}
	});
});