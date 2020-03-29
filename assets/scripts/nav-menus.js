//Nav Btn, Menu Bars and Links
const mobileNavBtn = document.getElementById("mobile-nav-btn")
const barOne = document.getElementById("bar-one");
const barTwo = document.getElementById("bar-two");
const barThree = document.getElementById("bar-three");
const navLinks = document.getElementsByClassName("nav-links");

//Bookmarks Btn and Bookmarks menu
const bookmarksBtn = document.getElementById("bookmarks-btn");
const sectionBookmarks = document.getElementsByClassName("section-bookmarks");

//Settings Btn and Settings menu
const settingsBtn = document.getElementById("settings-btn");


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
});

//Guide Bookmarks Animation
if(bookmarksBtn){
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
    });
}

//Settings Menu Animation
settingsBtn.addEventListener("click", () => {
    //Open the Settings menu
    settingsBtn.classList.toggle("change");

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