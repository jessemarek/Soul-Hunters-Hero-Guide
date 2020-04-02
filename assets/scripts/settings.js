//Settings Menu features and cookies to store preferences


//Sets the stored values and expiration in the cookie
function setCookie(cname, cvalue) {
    //Create the expiration date
    const date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    const expires = `expires=${date.toUTCString()};`;

    //Sets the cookie value and expiration
    document.cookie = `${cname}=${cvalue}; ${expires}`;
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

function setDarkMode() {

    if(darkModeToggle.checked) {
        body.classList.add("dark-mode");
        setCookie("darkMode", true);
    }
    else {
        body.classList.remove("dark-mode");
        setCookie("darkMode", false);
    }
    /* if(!darkModeToggle.checked) {
        document.getElementsByTagName("body")[0].classList.remove("dark-mode");
        setCookie("darkMode", false);
    } */
}

function setSpoilerMode() {
    
    if(spoilerToggle.checked) {
        setCookie("spoilers", true);
    }
    else setCookie("spoilers", false);
}

//Checks cookies for stored User preferences
function setUserPrefs() {
    const darkMode = getCookie("darkMode");
    setDarkMode(darkMode);
   /*  if(darkMode) {
        setDarkMode(darkMode);
    } */

    const spoilers = getCookie("spoilers");

    if(spoilers) {
        setSpoilerMode();
    }
}