// IMAGE SLIDER

var carouselSlide = document.querySelector('.slider-slides');
var carouselImages = document.querySelectorAll('.slider-slides img');

// Individual Images
var lastCloneImage = document.querySelector('#lastClone');
var slide1Image = document.querySelector('#slide1');
var slide2Image = document.querySelector('#slide2');
var slide3Image = document.querySelector('#slide3');
var firstCloneImage = document.querySelector('#firstClone');

// Image Dots
var dot1 = document.querySelector('#dot1');
var dot2 = document.querySelector('#dot2');
var dot3 = document.querySelector('#dot3');
dot1.style.background = "#fff";

// Check for Mobile Images
if (window.innerWidth <= 600) {
	lastCloneImage.src = "images/slide-placeholder-small-03.png";
	slide1Image.src = "images/slide-placeholder-small-01.png";
	slide2Image.src = "images/slide-placeholder-small-02.png";
	slide3Image.src = "images/slide-placeholder-small-03.png";
	firstCloneImage.src = "images/slide-placeholder-small-01.png";
}

// Buttons
var prevBtn = document.querySelector('#prevBtn');
var nextBtn = document.querySelector('#nextBtn');

// Counter
var counter = 1;

// Size
var size;
size = carouselImages[0].width;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';



// Next/Prev Button Functions
var nextAction = function() {
	if (counter >= carouselImages.length -1) return;
	size = carouselImages[0].clientWidth;
	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
	counter ++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

var prevAction = function() {
	if (counter <= 0) return;
	size = carouselImages[0].clientWidth;
	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
	counter --;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Automatic Slide
function autoSlide() {
	console.log("fired");
	nextAction();
}
//setInterval(autoSlide, 4000);

// Button Listeners
nextBtn.addEventListener('click', nextAction);
prevBtn.addEventListener('click', prevAction);

// Move slider function
function moveSlider() {
	carouselSlide.style.transition = 'none';
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Dot Button Listeners
dot1.addEventListener('click', function() {
	if (counter == 1 || counter == 4) {
		return;
	} else if (counter == 2) {
		prevAction();
	} else {
		nextAction();
	}	
});
dot2.addEventListener('click', function() {
	if (counter == 1 || counter == 4) {
		nextAction();
	} else if (counter == 3) {
		prevAction();
	} else {
		return;
	}	
});
dot3.addEventListener('click', function() {
	if (counter == 1 || counter == 4) {
		prevAction();
	} else if (counter == 2) {
		nextAction();
	} else {
		return;
	}	
});


// Transition Listener
carouselSlide.addEventListener('transitionend', function() {
	if (carouselImages[counter].id === 'lastClone') {
		counter = carouselImages.length -2;
		moveSlider();		
	}
	if (carouselImages[counter].id === 'firstClone') {
		counter = carouselImages.length -counter;
		moveSlider();	
	}
	// dot colour change
	dot1.style.background = "transparent";
	dot2.style.background = "transparent";
	dot3.style.background = "transparent";
	if (counter == 1) {
		dot1.style.background = "#fff";
	} else if (counter == 2) {
		dot2.style.background = "#fff";
	}  else if (counter == 3) {
		dot3.style.background = "#fff";
	}  else if (counter == 4) {
		dot1.style.background = "#fff";
	}
})

// Resize Listener
window.addEventListener('resize', function() {
	if (window.innerWidth <= 600) {
		lastCloneImage.src = "images/slide-placeholder-small-03.png"
		slide1Image.src = "images/slide-placeholder-small-01.png"
		slide2Image.src = "images/slide-placeholder-small-02.png"
		slide3Image.src = "images/slide-placeholder-small-03.png"
		firstCloneImage.src = "images/slide-placeholder-small-01.png"
	} else {
		lastCloneImage.src = "images/slide-placeholder-large-03.png"
		slide1Image.src = "images/slide-placeholder-large-01.png"
		slide2Image.src = "images/slide-placeholder-large-02.png"
		slide3Image.src = "images/slide-placeholder-large-03.png"
		firstCloneImage.src = "images/slide-placeholder-large-01.png"	
	}
	size = carouselImages[0].clientWidth;
	moveSlider();	
});