const allHeroes = document.getElementsByClassName("hero-card");
const frontHeroes = document.getElementsByClassName("front-hero");
const midHeroes = document.getElementsByClassName("mid-hero");
const backHeroes = document.getElementsByClassName("back-hero");

const activeBtn = document.getElementsByClassName("active-btn");

const allBtn = document.getElementById("filter-all").addEventListener("click", function(){
    activeBtn[0].classList.remove("active-btn");
    this.classList.add("active-btn");
    filterAll();
});

const frontBtn = document.getElementById("filter-front").addEventListener("click", function(){
    activeBtn[0].classList.remove("active-btn");
    this.classList.add("active-btn");
    filterFront();
});

const midBtn = document.getElementById("filter-mid").addEventListener("click", function(){
    activeBtn[0].classList.remove("active-btn");
   this.classList.add("active-btn");
    filterMid();
});

const backBtn = document.getElementById("filter-back").addEventListener("click", function(){
    activeBtn[0].classList.remove("active-btn");
    this.classList.add("active-btn");
    filterBack();
});

function filterAll(){

    for(let i = 0; i < allHeroes.length; i++){
        allHeroes[i].classList.remove("hidden");
    }
}

function filterFront(){
    
    for(let i = 0; i < allHeroes.length; i++){
        allHeroes[i].classList.remove("hidden");
    }

    for(let i = 0; i < midHeroes.length; i++){
        midHeroes[i].classList.add("hidden");
    }

    for(let i = 0; i < backHeroes.length; i++){
        backHeroes[i].classList.add("hidden");
    }
}

function filterMid(){
    
    for(let i = 0; i < allHeroes.length; i++){
        allHeroes[i].classList.remove("hidden");
    }

    for(let i = 0; i < frontHeroes.length; i++){
        frontHeroes[i].classList.add("hidden");
    }

    for(let i = 0; i < backHeroes.length; i++){
        backHeroes[i].classList.add("hidden");
    }
}

function filterBack(){
    
    for(let i = 0; i < allHeroes.length; i++){
        allHeroes[i].classList.remove("hidden");
    }

    for(let i = 0; i < frontHeroes.length; i++){
        frontHeroes[i].classList.add("hidden");
    }

    for(let i = 0; i < midHeroes.length; i++){
        midHeroes[i].classList.add("hidden");
    }
}