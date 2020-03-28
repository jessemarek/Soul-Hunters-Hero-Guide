//Load in the DOM elements that will be modified by the buttons and inout field
const allHeroes = document.getElementsByClassName("hero-card");
const frontHeroes = document.getElementsByClassName("front-hero");
const midHeroes = document.getElementsByClassName("mid-hero");
const backHeroes = document.getElementsByClassName("back-hero");
const searchInput = document.getElementById("searchInput");

//The currently active button
const activeBtn = document.getElementsByClassName("active-btn");

//Listeners for each filter button
const allBtn = document.getElementById("filter-all").addEventListener("click", function() {
    activeBtn[0].classList.remove("active-btn");
    this.classList.add("active-btn");
    filterAll();
});

const frontBtn = document.getElementById("filter-front").addEventListener("click", function() {
    activeBtn[0].classList.remove("active-btn");
    this.classList.add("active-btn");
    filterFront();
});

const midBtn = document.getElementById("filter-mid").addEventListener("click", function() {
    activeBtn[0].classList.remove("active-btn");
   this.classList.add("active-btn");
    filterMid();
});

const backBtn = document.getElementById("filter-back").addEventListener("click", function() {
    activeBtn[0].classList.remove("active-btn");
    this.classList.add("active-btn");
    filterBack();
});

//Functions

//Remove hidden status from any filtered Heroe Cards
function filterAll(){

    for(let i = 0; i < allHeroes.length; i++){
        allHeroes[i].classList.remove("hidden");
    }
}
//Hide all but the Heroes who stand on the front line
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
//Hide all but the Heroes who stand on the mid line
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
//Hide all but the Heroes who stand on the back line
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

//Input search filter
function searchByName(){
    const filterBy = searchInput.value.toUpperCase();
    let heroName;
    let txtValue;

    for(let i = 0; i < allHeroes.length; i++){
        heroName = allHeroes[i].getElementsByTagName("p")[0];
        txtValue = heroName.textContent || heroName.innerHTML;

        if(txtValue.toUpperCase().indexOf(filterBy) > -1){
            allHeroes[i].style.display = "";
        }else {
            allHeroes[i].style.display = "none";
        }
    }
}