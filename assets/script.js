const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let indexImage= 0

// Code Arrow left right 

// Variable**********
const arrowleft = document.querySelector('.arrow_left')

const arrowright = document.querySelector('.arrow_right')

const baniere = document.getElementsByClassName ("banner-img")

const texte = document.getElementById ('texteimg')

// Arrow Left**********
arrowleft.addEventListener('click',() =>{
	indexImage--
	if(indexImage < 0)
	indexImage = slides.length - 1
	
	baniere.src = "./assets/images/slideshow/" + slides[indexImage].image

	// console.log(document.getElementById('banner').children[1].innerHTML = slides[indexImage].tagLine)
	texte.innerHTML = slides[indexImage].tagLine

	activ_dot(indexImage)

})

// Arrow Right**********
arrowright.addEventListener('click',() =>{
	indexImage++
	if(indexImage > slides.length - 1 )
	indexImage = 0

	baniere.src = "./assets/images/slideshow/" + slides[indexImage].image

	// console.log(document.getElementById('banner').children[1].innerHTML = slides[indexImage].tagLine)
	texte.innerHTML = slides[indexImage].tagLine

	activ_dot(indexImage)

});


// Code Bullet Points

const dots = document.getElementById("dots")

// Create Bullet Points**********

function createDots() {
	for (i=0; i < slides.length; i++) {
	let divdot = document.createElement("div")
	divdot.className = "dot"
	dots.appendChild(divdot)
	};
	dots.children[0].classList.add  ('dot_selected')

}

createDots()

const dotArray = document.getElementsByClassName("dot")

// Activation Bullet Points**********
function activ_dot(indexImage){
	let dotselected = document.getElementsByClassName('dot_selected')
	dotselected[0].classList.remove ('dot_selected')

	dots.children[indexImage].classList.add ('dot_selected')

}
