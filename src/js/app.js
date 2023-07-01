import * as Turbo from "@hotwired/turbo";

document.addEventListener('turbo:load', () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const greetingEl = document.getElementById("greeting");
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    if (greetingEl) {
        greetingEl.innerHTML = greeting;
    }

    const userNameInput = document.getElementById("name");
    const userAgeInput = document.getElementById("age");
    const saveUserNameBtn = document.getElementById("saveUserName");
    const saveUserAgeBtn = document.getElementById("saveUserAge");

    if (userNameInput) {
        userNameInput.addEventListener("input", (e) => {
            saveUserNameBtn.addEventListener("click", () => {
                localStorage.setItem("le-username", e.target.value);
            });
        });

        userNameInput.value = localStorage.getItem("le-username"); 
    }

    if (userAgeInput) {
        userAgeInput.addEventListener("input", (e) => {
            saveUserAgeBtn.addEventListener("click", () => {
                localStorage.setItem("le-userage", e.target.value);
            });
        });

        userAgeInput.value = localStorage.getItem("le-userage"); 
    }

    
    const lifeExpectancy = 70 - localStorage.getItem("le-userage");
    const convertToDays = (lifeExpectancy * 365).toLocaleString(undefined, {maximumFractionDigits: 2}) + ' days left';

    if (localStorage.getItem("le-userage") > 70) {
        document.getElementById("life-expectancy").innerText = 'You meet you life expectancy and yet your still alive be thankful everyday.';
    } else {
        document.getElementById("life-expectancy").innerText = convertToDays ?? '16,425 days left';
    }

    document.getElementById("le-username").innerText = localStorage.getItem("le-username") ?? 'Mark Paul'; 
    document.getElementById("le-userage").innerText = localStorage.getItem("le-userage") + ' years old' ?? '25 years old'; 
});
