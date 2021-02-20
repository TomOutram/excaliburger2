const menuButton = document.querySelector('#menu-button')
const closeButton = document.querySelector('#close-button')
const myNav = document.querySelector('#myNav')
const menuItems = document.querySelectorAll('.overlay a')

menuButton.addEventListener('click', () => {
	myNav.style.width = '100%'
	for (let menuItem of menuItems) {
		console.log(menuItem)
		menuItem.style.transition = 'opacity 0.2s ease-in 0.2s'
		menuItem.style.opacity = 1
	}
})

closeButton.addEventListener('click', () => {
	myNav.style.width = '0%'
	for (let menuItem of menuItems) {
		menuItem.style.transition = 'none'
		menuItem.style.opacity = 0
	}
})
