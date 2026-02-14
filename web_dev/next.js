const music = new Audio("music/us.mp3");
music.loop = true;
music.volume = 0.7;


const card = document.getElementById("questionCard");
const imageArea = document.getElementById("cardImageArea");
const questionText = document.getElementById("cardQuestion");

const proposalButtons = document.getElementById("proposalButtons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const noCard = document.getElementById("noCard");
const noCardText = document.getElementById("noCardText");

const finalText = document.getElementById("finalText");

let started = false;
let slideTimers = [];

function showSlide(imagePath, question) {
    imageArea.style.backgroundImage = `url("${imagePath}")`;
    questionText.textContent = question;
}

document.addEventListener("click", function startSequence() {

    if (started) return;
    started = true;

    music.play().catch(() => {});

    card.style.display = "flex";

    showSlide("images/cut.jpg", "Why are you so beautiful?");

    slideTimers.push(setTimeout(() => {
        showSlide("images/san.png", "Why are u so adorable?");
    }, 5000));

    slideTimers.push(setTimeout(() => {
        showSlide("images/OMG.jpg", "Why are you so hot?");
    }, 10000));

    slideTimers.push(setTimeout(() => {
        showSlide("images/wife.jpg", "Will you be my wife?");
        proposalButtons.style.display = "flex";
    }, 15000));

});


yesBtn.addEventListener("click", () => {

    slideTimers.forEach(timer => clearTimeout(timer));

    card.style.display = "none";
    noCard.style.display = "none";

    finalText.style.display = "block";
    finalText.textContent = "";

    const message = "my cute little wife";
    const words = message.split(" ");
    let index = 0;

    const wordInterval = setInterval(() => {
        if (index < words.length) {
            finalText.textContent += words[index] + " ";
            index++;
        } else {
            clearInterval(wordInterval);

          
            setTimeout(() => {

                finalText.style.display = "none";

                const guessCard = document.getElementById("guessCard");
                const guessText = document.getElementById("guessText");

                guessText.textContent =
                    "we would even look so good together , no wonder we got each other";

                guessCard.style.display = "flex";

            }, 2000);
        }
    }, 500);

});


noBtn.addEventListener("click", () => {

    noCard.style.display = "flex";
    noCardText.textContent = "even uk that is not an option";

    setTimeout(() => {

        noCard.style.display = "none";

    
        noBtn.classList.add("noExit");

        setTimeout(() => {
            noBtn.disabled = true;
        }, 3000);

    }, 5000);

});

