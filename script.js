const dynamicText = document.querySelector(".mac span");
const words = ["developpeuse", "creative","commerciale", "autodidacte", "challengeuse", "dynamique", "corporate", "persévérante", "autonome", "equipe", "souriante", "ponctuelle"];

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
    setTimeout(typeEffect, 50);
  } else if (isDeleting && chardndex > 0) {
    chardndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordndex = !isDeleting ? (wordndex + 1) % words.length : wordndex;
    setTimeout(typeEffect, 1000);
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

const fname =document.getElementById('fname');
const lname =document.getElementById('lname');
const email =document.getElementById('email');
const phone =document.getElementById('phone');
const message =document.getElementById('message');
const submit =document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
	e.preventDefault();
	console.log("clicked");

let ebody = `
<b>Name: </b>${fname.value}&nbsp;${lname.value}
<br>
<b>Email: </b>${email.value}
<br>
<b>Phone: </b>${phone.value}
<br>
<b>Message: </b>${message.value}
`

	Email.send({
		SecureToken : "5f4c8539-03e2-433a-906f-f771157650ed",
		To : 'virginie.bm13@icloud.com',
		From : "virginie.bm13@icloud.com",
		Subject : "Vous avez recu un email de "+ email.value,
		Body : ebody
	}).then(
	  message => alert(message)
	);
})

function startStopClicked() {
	if(document.getElementById("start_stop_btn").innerHTML == "STOP") {
		stopGame()
	} else {
		startGame()
	}
}

function startGame() {
	obstacles.style.animation = "anime-obstacles 2.5s infinite";
	document.getElementById("start_stop_btn").innerHTML = "STOP"
}

function stopGame() {
	obstacles.style.animation = "none";
	document.getElementById("start_stop_btn").innerHTML = "START"
}

var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

function sauter() {
    if (perso.classList != "animation") {
        perso.classList.add('animation');
    }
    setTimeout(function() {
        perso.classList.remove('animation');
    }, 500)
}

var verification = setInterval(function() {
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));

    if (obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 90) {
        stopGame();
        alert("Vous êtes mort...!")
    }
}, 1);

const countdownEls = document.querySelectorAll(".countdown")
countdownEls.forEach(countdownEl => createCountdown(countdownEl))

function createCountdown(countdownEl){
  const target = new Date(new Date(countdownEl.dataset.targetDate).toLocaleString('en', ))
  const parts = {
    days: {text: ["days","day"], dots: 30},
    hours: {text: ["hours","hour"], dots: 24},
    minutes: {text: ["minutes","minute"], dots: 60},
    seconds: {text: ["seconds","second"], dots: 60},
  }

  Object.entries(parts).forEach(([key, value])=>{
    const partEl = document.createElement("div");
    partEl.classList.add("part", key);
    partEl.style.setProperty("--dots", value.dots);
    value.element = partEl;

    const remainingEl = document.createElement("div");
    remainingEl.classList.add("remaining");
    remainingEl.innerHTML = `
      <span class="number"></span>
      <span class="text"></span>
    `
    partEl.append(remainingEl);
    for(let i = 0; i < value.dots; i++){
      const dotContainerEl = document.createElement("div");
      dotContainerEl.style.setProperty("--dot-idx", i);
      dotContainerEl.classList.add("dot-container")
      const dotEl = document.createElement("div");
      dotEl.classList.add("dot")
      dotContainerEl.append(dotEl);
      partEl.append(dotContainerEl);
    }
    countdownEl.append(partEl);
  })
  getRemainingTime(target, parts)
}

function getRemainingTime(target, parts, first=true){
  const now = new Date()
  if(first) console.log({target, now})
  const remaining = {}
  let seconds = Math.floor((target - (now))/1000);
  let minutes = Math.floor(seconds/60);
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);
  hours = hours-(days*24);
  minutes = minutes-(days*24*60)-(hours*60);
  seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
  Object.entries({days, hours, minutes, seconds}).forEach(([key, value])=>{
    const remaining = parts[key].element.querySelector(".number");
    const text = parts[key].element.querySelector(".text");
    remaining.innerText = value;
    text.innerText = parts[key].text[Number(value==1)]
    const dots = parts[key].element.querySelectorAll(".dot")
    dots.forEach((dot, idx)=>{
      dot.dataset.active = idx <= value;
      dot.dataset.lastactive = idx == value;
    })
  })
  if(now <= target){
    window.requestAnimationFrame(()=>{
      getRemainingTime(target, parts, false)
    });
  }
}
