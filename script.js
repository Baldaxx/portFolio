const dynamicText = document.querySelector(".mac span");
const words = ["developpeuse", "commerciale", "autodidacte", "challengeuse", "dynamique", "corporate", "Persévérante", "autonome", "equipe"];

let wordndex = 0;
let chardndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordndex];
  const currentChar = currentWord.substring(0, chardndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && chardndex < currentWord.length) {
    chardndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && chardndex > 0) {
    chardndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordndex = !isDeleting ? (wordndex + 1) % words.length : wordndex;
    setTimeout(typeEffect, 2000);
  }
};

typeEffect();

var demoTexte = {};
demoTexte.opacityIn = [0, 1];
demoTexte.scaleIn = [0.2, 1];
demoTexte.scaleOut = 2;
demoTexte.durationIn = 800;
demoTexte.durationOut = 600;
demoTexte.delay = 500;
anime.timeline({
	loop: true
}).add({
	targets: '.demo-texte-js .phrase1',
	opacity: demoTexte.opacityIn,
	scale: demoTexte.scaleIn,
	duration: demoTexte.durationIn
}).add({
	targets: '.demo-texte-js .phrase1',
	opacity: 0,
	scale: demoTexte.scaleOut,
	duration: demoTexte.durationOut,
	easing: "easeInBack",
	delay: demoTexte.delay
}).add({
	targets: '.demo-texte-js .phrase2',
	opacity: demoTexte.opacityIn,
	scale: demoTexte.scaleIn,
	duration: demoTexte.durationIn
}).add({
	targets: '.demo-texte-js .phrase2',
	opacity: 0,
	scale: demoTexte.scaleOut,
	duration: demoTexte.durationOut,
	easing: "easeInBack",
	delay: demoTexte.delay
}).add({
	targets: '.demo-texte-js .phrase3',
	opacity: demoTexte.opacityIn,
	scale: demoTexte.scaleIn,
	duration: demoTexte.durationIn
}).add({
	targets: '.demo-texte-js .phrase3',
	opacity: 0,
	scale: demoTexte.scaleOut,
	duration: demoTexte.durationOut,
	easing: "easeInBack",
	delay: demoTexte.delay
}).add({
	targets: '.demo-texte-js .phrase4',
	opacity: demoTexte.opacityIn,
	scale: demoTexte.scaleIn,
	duration: demoTexte.durationIn
}).add({
	targets: '.demo-texte-js .phrase4',
	opacity: 0,
	scale: demoTexte.scaleOut,
	duration: demoTexte.durationOut,
	easing: "easeInBack",
	delay: demoTexte.delay
}).add({
	targets: '.demo-texte-js',
	opacity: 0,
	duration: 500,
	delay: 500
});

document.querySelectorAll('.nav-link').forEach(function(button) {
	button.addEventListener('click', function() {
	  document.querySelectorAll('.nav-link').forEach(function(btn) {
		btn.classList.remove('active');
		btn.classList.remove('statique');
	  });
  
	  button.classList.add('active');
	  button.classList.add('statique');
	});
});
  
