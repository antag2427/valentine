const backgroundMusic = new Audio("music/mine.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.4;

const mainMusic = new Audio("music/me.mp3");
mainMusic.loop = true;
mainMusic.volume = 0.7;

let backgroundStarted = false;
let mainPlaying = false;

document.addEventListener("click", function startBgOnce() {
    if (!backgroundStarted && !mainPlaying) {
        backgroundMusic.play();
        backgroundStarted = true;
    }
    document.removeEventListener("click", startBgOnce);
});

const bgMessageTop = document.getElementById("bgMessageTop");

const messageText =
    "I thought that I was dreaming when you said you love me.";

backgroundMusic.addEventListener("play", () => {

    if (!bgMessageTop) return;

    bgMessageTop.textContent = "";
    bgMessageTop.style.opacity = "1";

    const words = messageText.split(" ");
    let index = 0;

    const totalDuration = 5000;
    const intervalTime = totalDuration / words.length;

    const wordInterval = setInterval(() => {
        if (index < words.length) {
            bgMessageTop.textContent += words[index] + " ";
            index++;
        } else {
            clearInterval(wordInterval);

            setTimeout(() => {
                bgMessageTop.style.opacity = "0";
            }, 2000);
        }
    }, intervalTime);
});

const heartsContainer = document.querySelector(".floating-hearts");

const BPM = 80;
const beatInterval = (60 / BPM) * 1000;
let heartInterval = null;

function spawnHeart() {
    if (!heartsContainer) return;

    const heart = document.createElement("div");
    heart.className = "heart";

    const emojis = ["❤️", "💖", "💕", "💘"];
    heart.textContent =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

function startHearts() {
    if (heartInterval) return;
    spawnHeart();
    heartInterval = setInterval(spawnHeart, beatInterval);
}

function stopHearts() {
    clearInterval(heartInterval);
    heartInterval = null;
}

function toggleMusic() {
    if (!mainPlaying) {

        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;

      mainMusic.play();
startHearts();
showMainSongText();


        mainPlaying = true;

    } else {

        mainMusic.pause();
        stopHearts();

        mainPlaying = false;
    }
}

const nextPageBtn = document.getElementById("nextPageBtn");

window.addEventListener("load", () => {
    setTimeout(() => {
        nextPageBtn.style.opacity = "1";
        nextPageBtn.style.pointerEvents = "auto";
    }, 10000); 
});


nextPageBtn.addEventListener("click", () => {
    window.location.href = "next.html";
});


function showMainSongText() {

    const textElement = document.getElementById("mainSongText");
    const message = "u have kept me under your spell";
    const words = message.split(" ");

    textElement.textContent = "";
    textElement.style.opacity = "1";

    let index = 0;

    const interval = setInterval(() => {
        if (index < words.length) {
            textElement.textContent += words[index] + " ";
            index++;
        } else {
            clearInterval(interval);

            
            setTimeout(() => {
                textElement.style.opacity = "0";
            }, 2000);
        }
    }, 400);
}

const loveBtn = document.getElementById("loveBtn");
const loveOverlay = document.getElementById("loveOverlay");


window.addEventListener("load", () => {
    setTimeout(() => {
        loveBtn.style.opacity = "1";
        loveBtn.style.pointerEvents = "auto";
    }, 10000);
});


loveBtn.addEventListener("click", () => {

    loveOverlay.style.display = "flex";

    setTimeout(() => {
        loveOverlay.style.display = "none";
    }, 5000);

    
    loveBtn.style.opacity = "0";
    loveBtn.style.pointerEvents = "none";
});
