var menuButton = document.querySelector('#menu-button')
var closeButton = document.querySelector('#close-button')
var myNav = document.querySelector('#myNav')
var menuItems = document.querySelectorAll('.overlay a')
var menuTitle = document.querySelector('.overlay-title')

menuButton.addEventListener('click', function() {
	myNav.style.width = '100%'
	for (i = 0; i < menuItems.length; i++) {
		menuItems[i].style.transition = 'opacity 0.2s ease-in 0.2s'
		menuItems[i].style.opacity = 1
	}
	closeButton.style.transition = 'opacity 0.2s ease-in 0.2s'
	menuTitle.style.transition = 'opacity 0.2s ease-in 0.2s'
	closeButton.style.opacity = 1
	menuTitle.style.opacity = 1
})

closeButton.addEventListener('click', function() {
	myNav.style.width = '0%'
	for (i = 0; i < menuItems.length; i++) {
		menuItems[i].style.transition = 'none'
		menuItems[i].style.opacity = 0
	}
	this.style.transition = 'none'
	menuTitle.style.transition = 'none'
	this.style.opacity = 0
	menuTitle.style.opacity = 0
})
