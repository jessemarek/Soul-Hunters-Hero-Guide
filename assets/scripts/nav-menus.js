//Nav Btn Menu Bars
const barOne = document.getElementById("bar-one");
const barTwo = document.getElementById("bar-two");
const barThree = document.getElementById("bar-three");
const navLinks = document.getElementsByClassName("nav-links");


//Nav Btn animation
const mobileNavBtn = document.getElementById("mobile-nav-btn").addEventListener("click", () => {
    barOne.classList.toggle("change");
    barTwo.classList.toggle("change");
    barThree.classList.toggle("change");
    navLinks[0].classList.toggle("change");
});