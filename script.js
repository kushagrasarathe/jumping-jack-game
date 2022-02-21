// variables

const hero = document.querySelector(".hero");
const heroboy =  document.querySelector("hero-boy");
const villain = document.querySelector(".villain");

// score variables
const score = document.querySelector(".score");
const resetNum = document.querySelector(".reset");

// functions

const jump = () => {
    if (hero.classList != "animate") {
        hero.classList.add("animate");
        villain.style.animation = "move 1s infinite linear";       
    }
    
    // setTimeout function calls a finction only once
    setTimeout(() => {
        hero.classList.remove("animate");
    }, 300);

};

document.addEventListener("keydown", (e) => {
    if (e.code == "Space"){
        let initialScore = 0;
        score.innerHTML++  ;
        jump();
    } 
});

// functionality when boy clashes with wolf

let isAlive = setInterval(() => {
    
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    //console.log(heroTop);
    let villianLeft = parseInt(window.getComputedStyle(villain).getPropertyValue("left"));
    //console.log(villianLeft);
    
    if (villianLeft < 40 && villianLeft > 20 && heroTop >= 130) {
        villain.style.animation = "none";
        alert("Game Over Boiii...", score.innerHTML = 0);
    }
}, 10);

