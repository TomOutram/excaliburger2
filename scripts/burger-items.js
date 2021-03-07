// menu links
const menuLinks = document.querySelectorAll('.item');
console.log(menuLinks)
// container divs
const menuDiv = document.querySelector('.main-menu');
const itemDiv = document.querySelector('.item-display-container');
// item info
const webItemsHeading = document.querySelector('#web-item-heading');
const mobileItemsHeading = document.querySelector('#mobile-item-heading');
const itemDescription = document.querySelector('.item-description-text');
const energy = document.querySelector('.energy');
const protein = document.querySelector('.protein');
const fatTotal = document.querySelector('.fat-total');
const fatSaturated = document.querySelector('.fat-saturated');
const carbohydrate = document.querySelector('.carbohydrate');
const sugar = document.querySelector('.sugar');
const fibre = document.querySelector('.fibre');
const sodium = document.querySelector('.sodium');
const itemImage = document.querySelector('#large-item-image');
//back button
const backBtn = document.querySelector('.back-btn');
// array for item info
const allMyItems = [];
// item info
const burger1 = {
	name: "burger1",
	mobileHeading: "Triple Mega Stacker",
	webHeading: "Triple Mega Stacker",
	itemDesc: "With flame-grilled beef, crispy bacon, mouth-watering onion rings, and smothered in smoky BBQ sauce, The OUTLAW and OUTLAW XL are New Zealand’s most wanted burgers. Draw your eatin’ hands before they ride outta town.",
	energyData: "67",
	proteinData: "177",
	fatTotalData: "33",
	fatSatData: "12",
	carbsData: "130",
	sugarData: "45",
	fibreData: "12",
	sodiumData: "0.6",
	imageName: "hamburger",
	imageAlt: "hamburger-1",
	imageTitle: "hamburger-1"
};

const burger2 = {
	name: "burger2",
	mobileHeading: "A piece of Steak",
	webHeading: "A piece of Steak",
	itemDesc: "A brand new description. A brand new description. A brand new description. A brand new description. A brand new description. A brand new description. A brand new description. A brand new description.",
	energyData: "42",
	proteinData: "42",
	fatTotalData: "42",
	fatSatData: "42",
	carbsData: "42",
	sugarData: "42",
	fibreData: "42",
	sodiumData: "42",
	imageName: "burger-button",
	imageAlt: "hamburger-2",
	imageTitle: "hamburger-2"
};

allMyItems.push(burger1);
allMyItems.push(burger2);

function getItem(itemID) {
	for (i=0; i < allMyItems.length; i++) {
		if (allMyItems[i].name == itemID) {
			webItemsHeading.innerHTML = allMyItems[i].mobileHeading;
			mobileItemsHeading.innerHTML = allMyItems[i].webHeading;
			itemDescription.innerHTML = allMyItems[i].itemDesc;
			energy.innerHTML = allMyItems[i].energyData;
			protein.innerHTML = allMyItems[i].proteinData;
			fatTotal.innerHTML = allMyItems[i].fatTotalData;
			fatSaturated.innerHTML = allMyItems[i].fatSatData;
			carbohydrate.innerHTML = allMyItems[i].carbsData;
			sugar.innerHTML = allMyItems[i].sugarData;
			fibre.innerHTML = allMyItems[i].fibreData;
			sodium.innerHTML = allMyItems[i].sodiumData;
			itemImage.src = 'images/' + allMyItems[i].imageName + '.png';
			itemImage.alt = allMyItems[i].imageAlt;
			itemImage.title = allMyItems[i].imageTitle;
		}
	}
	
	
	/*for (let item of allMyItems) {
		if (item.name == itemID) {
			webItemsHeading.innerHTML = item.mobileHeading;
			mobileItemsHeading.innerHTML = item.webHeading;
			itemDescription.innerHTML = item.itemDesc;
			energy.innerHTML = item.energyData;
			protein.innerHTML = item.proteinData;
			fatTotal.innerHTML = item.fatTotalData;
			fatSaturated.innerHTML = item.fatSatData;
			carbohydrate.innerHTML = item.carbsData;
			sugar.innerHTML = item.sugarData;
			fibre.innerHTML = item.fibreData;
			sodium.innerHTML = item.sodiumData;
			itemImage.src = `images/${item.imageName}.png`;
			itemImage.alt = `${item.imageAlt}`;
			itemImage.title = `${item.imageTitle}`;
		}
	}*/
}
function addLinkListeners() {
	for (i=0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', function() {
			menuDiv.style.display = 'none';
			itemDiv.style.display = 'block';
			getItem(this.id);
		});
	}
	/*for (let link of menuLinks) {
		link.addEventListener('click', function() {
			menuDiv.style.display = 'none';
			itemDiv.style.display = 'block';
			getItem(this.id);
		});
	}*/
}
function addbackBtnListener() {
	backBtn.addEventListener('click', function() {
		menuDiv.style.display = 'block';
		itemDiv.style.display = 'none';
	})
}
addLinkListeners();
addbackBtnListener();
