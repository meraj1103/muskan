// STARS

for(let i=0;i<120;i++){

let star=document.createElement("div");

star.className="star";

star.style.top=Math.random()*100+"vh";
star.style.left=Math.random()*100+"vw";

document.body.appendChild(star);

}

// FLOATING HEARTS

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{heart.remove()},6000)

},600);

// CONFETTI

function confettiExplosion(){

for(let i=0;i<120;i++){

let conf=document.createElement("div");

conf.className="confetti";

conf.style.left=Math.random()*100+"vw";

conf.style.backgroundColor=
"hsl("+Math.random()*360+",100%,50%)";

document.body.appendChild(conf);

setTimeout(()=>{conf.remove()},3000)

}

}

// OPEN GIFT

function openGift(){

document.getElementById("page1").style.display="none";
document.getElementById("page2").style.display="block";

confettiExplosion();
typingEffect();

}

// TYPING MESSAGE

let text="Muskan, today is your special day! 🎉 May your life always shine like the stars ✨ Keep smiling and enjoy every moment. Happy Birthday! 🎂";

let i=0;

function typingEffect(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typingEffect,40);

}

}

// MUSIC

document.getElementById("musicBtn").onclick=()=>{
document.getElementById("birthdayMusic").play();
}

// BLOW CANDLE

document.getElementById("blowBtn").onclick=async()=>{

try{

const stream=await navigator.mediaDevices.getUserMedia({audio:true});

const audioContext=new AudioContext();

const mic=audioContext.createMediaStreamSource(stream);

const analyser=audioContext.createAnalyser();

mic.connect(analyser);

const data=new Uint8Array(analyser.frequencyBinCount);

function detect(){

analyser.getByteFrequencyData(data);

let volume=data.reduce((a,b)=>a+b)/data.length;

if(volume>60){

document.getElementById("flame").style.display="none";

alert("🎉 Candle Blown! Happy Birthday Muskan!");

stream.getTracks().forEach(track=>track.stop());

}else{

requestAnimationFrame(detect);

}

}

detect();

}catch{

alert("Microphone permission needed");

}


}
