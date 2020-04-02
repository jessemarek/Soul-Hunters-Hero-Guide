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
    document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
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
    console.log(`The Document is loaded!`);
    
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