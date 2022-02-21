// variables

const hero = document.querySelector(".hero");
const hero_boy =  document.querySelector("hero-boy");
const villain = document.querySelector(".villain");

// functions

const jump = () => {
    if (hero.classList != "animate") {
        hero.classList.add(".animate");
        villain.style.animation = "move 1s infinite linear";       
    }
}


document.addEventListener("keydown", (e) => {
    if (e.code == "Space"){
        jump();
    }
});