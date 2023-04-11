function verifyCountry(inputCountry) {
    let allCountries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Costa Rica",
        "Cote d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Republic of the Congo",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City (Holy See)",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];
    return allCountries.includes(inputCountry);
}

function fieldVerifCountry() {
    let countryDiv = document.querySelector("div.country");
    let countryInput = document.querySelector(".country input");
    let countryMessage = document.querySelector(".country .message");
    let counter = 0;

    countryDiv.addEventListener(
        "focusout",
        (e) => {
            counter++;
            validateField(e.target.value);
        },
        { once: true }
    );

    countryDiv.addEventListener("input", (e) => {
        if (counter === 0) return;
        validateField(e.target.value);
    });

    function validateField(value) {
        // let words = e.target.value;
        let country = capitalizeFirstLetter(value);
        countryInput.value = country;

        if (country === "") {
            undoValidation(countryDiv);
            countryMessage.textContent = "";
        } else if (!verifyCountry(country)) {
            toggleClasses(countryDiv, "invalid");
            countryMessage.textContent =
                "You might have misspeled that country name.";
        } else if (verifyCountry(country)) {
            toggleClasses(countryDiv, "valid");
            countryMessage.textContent = "";
        }
    }

    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

function fieldVerifEmail() {
    let emailDiv = document.querySelector("div.email");
    let emailMessage = document.querySelector(".email .message");
    let counter = 0;
    emailDiv.addEventListener(
        "focusout",
        (e) => {
            counter++;
            validateField(e.target.value);
        },
        { once: true }
    );

    emailDiv.addEventListener("input", (e) => {
        if (counter === 0) return;
        validateField(e.target.value);
    });

    function validateField(value) {
        if (value === "") {
            undoValidation(emailDiv);
            emailMessage.textContent = "";
        } else if (!emailValidation(value)) {
            toggleClasses(emailDiv, "invalid");
            emailMessage.textContent = "Please enter a valid email.";
        } else {
            toggleClasses(emailDiv, "valid");

            emailMessage.textContent = "";
        }
    }
    function emailValidation(email) {
        if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            return true;
        } else {
            return false;
        }
    }
}

function fieldVerifZip() {
    let zipDiv = document.querySelector("div.zip");
    let zipInput = document.querySelector(".zip input");
    let zipMessage = document.querySelector(".zip .message");
    let counter = 0;

    // get all letters in uppercase
    // get all letters in uppercase
    zipDiv.addEventListener("input", (e) => {
        zipInput.value = e.target.value.toUpperCase();
    });

    //  validate field
    zipDiv.addEventListener(
        "focusout",
        (e) => {
            counter++;
            validateField(e.target.value);
        },
        { once: true }
    );

    zipDiv.addEventListener("input", (e) => {
        if (counter === 0) return;
        validateField(e.target.value);
    });

    function validateField(value) {
        // let words = e.target.value;
        if (value === "") {
            undoValidation(zipDiv);
        } else {
            toggleClasses(zipDiv, "valid");
        }
    }

    function capitalizeAllLetter(value) {
        return value.toUpperCase();
    }
}

function fieldVerifPassword1() {
    let passwordDiv = document.querySelector(".password-1");
    let password = document.querySelector(".password-1 input");

    password.addEventListener("input", (e) => {
        validateField(e.target.value);
    });

    function validateField(pwd) {
        if (pwd == "") {
            console.log("it's empty");
            undoValidation(passwordDiv);
            return;
        }

        // check capital letter
        let capitalMessage = document.querySelector(".password-1 .pwdCapital");
        let capitalIcon = document.querySelector(".password-1 .pwdCapital i");

        if (hasOneCapital(pwd)) {
            toggleClasses(capitalMessage, "valid");
            capitalIcon.className = "ri-checkbox-circle-line";
        } else {
            toggleClasses(capitalMessage, "invalid");
            capitalIcon.className = "ri-close-circle-line";
        }

        // check length
        let lengthMessage = document.querySelector(".password-1 .pwdLength");
        let lengthIcon = document.querySelector(".password-1 .pwdLength i");

        if (isLongEnough(pwd)) {
            toggleClasses(lengthMessage, "valid");
            lengthIcon.className = "ri-checkbox-circle-line";
        } else {
            toggleClasses(lengthMessage, "invalid");
            lengthIcon.className = "ri-close-circle-line";
        }

        // check special charactesr
        let charMessage = document.querySelector(".password-1 .pwdChar");
        let charIcon = document.querySelector(".password-1 .pwdChar i");

        if (hasSpecialChar(pwd)) {
            toggleClasses(charMessage, "valid");
            charIcon.className = "ri-checkbox-circle-line";
        } else {
            toggleClasses(charMessage, "invalid");
            charIcon.className = "ri-close-circle-line";
        }

        // check if all previous test have been passed
        if (hasOneCapital(pwd) && isLongEnough(pwd) && hasSpecialChar(pwd)) {
            toggleClasses(passwordDiv, "valid");
        } else {
            console.log("lksdjf");
            toggleClasses(passwordDiv, "invalid");
        }
    }

    function hasOneCapital(value) {
        let specialChar = /[A-Z]/;
        return specialChar.test(value);
    }

    function isLongEnough(value) {
        return value.length >= 8;
    }
    function hasSpecialChar(value) {
        let specialChar = /[!@#$%^&*`(),.?":{}|<>]/;
        return specialChar.test(value);
    }
}

function fieldVerifPassword2() {
    let passwordDiv2 = document.querySelector(".password-2");
    let password2 = document.querySelector(".password-2 input");

    let counter = 0;

    password2.addEventListener(
        "focusout",
        (e) => {
            counter++;
            validateField(e.target.value);
        },
        { once: true }
    );

    password2.addEventListener("input", (e) => {
        if (counter === 0) return;
        validateField(e.target.value);
    });

    function validateField(value) {
        let otherPassword = document.querySelector(".password-1 input");
        let passwordDiv = document.querySelector(".password-2");
        let message = document.querySelector(".password-2 .message");

        if (value === "") {
            undoValidation(passwordDiv);
            undoValidation(message);
            message.textContent = "";

            return;
        }

        if (isSame(otherPassword.value, value)) {
            toggleClasses(passwordDiv, "valid");
            toggleClasses(message, "valid");
            message.textContent = "Password is the same!";
        } else {
            toggleClasses(passwordDiv, "invalid");
            toggleClasses(message, "invalid");
            message.textContent = "Password is not the same. Check again.";
        }
    }

    function isSame(a, b) {
        return a === b;
    }
}

function undoValidation(element) {
    // returns to default state
    if (element.classList.contains("valid")) {
        element.classList.remove("valid");
    }
    if (element.classList.contains("invalid")) {
        element.classList.remove("invalid");
    }
}

function toggleClasses(element, makeValidorInvalid) {
    // to make it invalid
    if (makeValidorInvalid === "invalid") {
        if (element.classList.contains("valid")) {
            element.classList.remove("valid");
        }
        element.classList.add("invalid");

        // to make it valid
    } else if (makeValidorInvalid === "valid") {
        if (element.classList.contains("invalid")) {
            element.classList.remove("invalid");
        }
        element.classList.add("valid");
    }
}

(function init() {
    fieldVerifEmail();
    fieldVerifCountry();
    fieldVerifZip();
    fieldVerifPassword1();
    fieldVerifPassword2();
})();
