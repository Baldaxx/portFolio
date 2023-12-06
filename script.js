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