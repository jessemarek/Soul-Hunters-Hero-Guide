//Nav Btn, Menu Bars and Links
const mobileNavBtn = document.getElementById("mobile-nav-btn")
const barOne = document.getElementById("bar-one");
const barTwo = document.getElementById("bar-two");
const barThree = document.getElementById("bar-three");
const navLinks = document.getElementsByClassName("nav-links");

//Bookmarks Btn and Bookmarks menu
const bookmarksBtn = document.getElementById("bookmarks-btn");
const sectionBookmarks = document.getElementsByClassName("section-bookmarks");
//Side Footer on pages with a bookmarks at Desktop screen
const sideFooter = document.getElementsByTagName("footer");

//Settings Btn and Settings menu
const body = document.getElementsByTagName("body")[0];
const settingsBtn = document.getElementById("settings-btn");
const settingsMenu = document.getElementsByClassName("settings-menu");

const settingsCheckbox = document.getElementsByClassName("settingsCheckbox");
const darkMode = document.getElementById("darkMode");
const spoilerMode = document.getElementById("spoilerMode");


//Nav Btn Animation
mobileNavBtn.addEventListener("click", () => {
    //Open the bookmarks menu
    barOne.classList.toggle("change");
    barTwo.classList.toggle("change");
    barThree.classList.toggle("change");
    navLinks[0].classList.toggle("change");

    //Close bookmarks if open
    if(bookmarksBtn){
        bookmarksBtn.classList.remove("change");
        sectionBookmarks[0].classList.remove("change");
    }

     //Close Settings menu if open
     settingsBtn.classList.remove("change");
     settingsMenu[0].classList.remove("change");
});

//Guide Bookmarks Animation
if(bookmarksBtn){
    //Change Footer to Side Footer
    sideFooter[0].classList.add("side-footer");

    bookmarksBtn.addEventListener("click", () => {
        //Open the bookmarks menu
        bookmarksBtn.classList.toggle("change");
        sectionBookmarks[0].classList.toggle("change");
    
        //Close Nav menu if open
        barOne.classList.remove("change");
        barTwo.classList.remove("change");
        barThree.classList.remove("change");
        navLinks[0].classList.remove("change");

        //Close Settings menu if open
        settingsBtn.classList.remove("change");
        settingsMenu[0].classList.remove("change");
    });
}

//Settings Menu Animation
settingsBtn.addEventListener("click", () => {
    //Open the Settings menu
    settingsBtn.classList.toggle("change");
    settingsMenu[0].classList.toggle("change");

    //Close Nav menu if open
    barOne.classList.remove("change");
    barTwo.classList.remove("change");
    barThree.classList.remove("change");
    navLinks[0].classList.remove("change");

    //Close bookmarks if open
    if(bookmarksBtn){
        bookmarksBtn.classList.remove("change");
        sectionBookmarks[0].classList.remove("change");
    }
});


//Settings Toggle Switch Listeners
for(let i = 0; i < settingsCheckbox.length; i++) {
    settingsCheckbox[i].addEventListener("change", function() {
        setMode(this.id, this.checked);
    });
}

function setCookie(cname, cvalue) {
    //Create the expiration date
    const date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    const expires = `expires=${date.toUTCString()};`;

    //Sets the cookie value and expiration
    document.cookie = `${cname}=${cvalue}; ${expires}; path=/; samesite=strict`;
}

//Gets the cookies for the site if any exist
function getCookie(cname) {

    //Cookie name to search for
    const name = `${cname}=`;
    
    //Decode the cookies
    const decodedCookie = decodeURIComponent(document.cookie);
    
    //Split the decoded cookies into an array
    const cArr = decodedCookie.split(";");

    //Loop through array of cookies and return a match for cname if found
    for(let i = 0; i < cArr.length; i++) {
        let cookie = cArr[i];

        while(cookie.charAt(0) === " ") {
            cookie.substring(1);
        }
        //If cookie is found return it
        if(cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    //If no cookie is found
    return "";
}

function setMode(mname, mvalue) {
    const mode = document.getElementById(mname);

    switch(mname) {
        case "darkMode": {
            mode.checked = mvalue;
            
            if(mvalue){
                body.classList.add("dark-mode");
            }
            else body.classList.remove("dark-mode");
        } 
        break;

        case "spoilerMode": {
            mode.checked = mvalue;
            const spoilers = document.getElementsByClassName("spoiler-card");
            
            if(mvalue){
               for(let i = 0; i < spoilers.length; i++){
                   spoilers[i].classList.remove("spoiler-off");
               }
            }
            else {
                for(let i = 0; i < spoilers.length; i++){
                    spoilers[i].classList.add("spoiler-off");
                }
            }
        } 
        break;
    }
    setPrefs(mname, mvalue);
}

function setPrefs(key, value) {
    //Get the prefs from the cookie
    const cvalue = getCookie("userPrefs");

    //Convert cvalue from str to obj
    const newPrefs = JSON.parse(`${cvalue}`);
    newPrefs[key] = value;
    //Convert obj back to str
    const newCookie = JSON.stringify(newPrefs);

    //Store new prefs in cookie
    setCookie("userPrefs", `${newCookie}`);
}

function loadPrefs(cvalue){
    const userPrefs = JSON.parse(`${cvalue}`);
    
    const settings = Object.entries(userPrefs);
    settings.forEach(item => {
        document.getElementById(item[0]).checked = item[1];
        setMode(item[0], item[1]);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    
    let cvalue = getCookie("userPrefs");
    
    //If cookie exists load it else create a new cookie with default prefs
    if(cvalue != ""){
        loadPrefs(cvalue);
    }
    else {
        cvalue = '{"darkMode": false, "spoilerMode": true}';
    }
    setCookie("userPrefs", `${cvalue}`);
});

//Load in the DOM elements that will be modified by the buttons and inout field
const allHeroes = document.getElementsByClassName("hero-card");
const frontHeroes = document.getElementsByClassName("front-hero");
const midHeroes = document.getElementsByClassName("mid-hero");
const backHeroes = document.getElementsByClassName("back-hero");
const searchInput = document.getElementById("searchInput");

//The currently active button
const activeBtn = document.getElementsByClassName("active-btn");

//Listeners for each filter button
const allBtn = document.getElementById("filter-all");

if(allBtn) {
    allBtn.addEventListener("click", function() {
        activeBtn[0].classList.remove("active-btn");
        this.classList.add("active-btn");
        filterAll();
    });
}


const frontBtn = document.getElementById("filter-front")

if(frontBtn) {
    frontBtn.addEventListener("click", function() {
        activeBtn[0].classList.remove("active-btn");
        this.classList.add("active-btn");
        filterFront();
    });
}

const midBtn = document.getElementById("filter-mid")

if(midBtn) {
    midBtn.addEventListener("click", function() {
        activeBtn[0].classList.remove("active-btn");
       this.classList.add("active-btn");
        filterMid();
    });
}

const backBtn = document.getElementById("filter-back");
    
if(backBtn) {
    backBtn.addEventListener("click", function() {
        activeBtn[0].classList.remove("active-btn");
        this.classList.add("active-btn");
        filterBack();
    });
}

//Functions

//Remove hidden status from any filtered Hero Cards
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