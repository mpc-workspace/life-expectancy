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

    function updateLifeExpectancy() {
        const currentAge = parseInt(localStorage.getItem("le-userage"));
        const remainingLifeExpectancy = 70 - currentAge;
        const remainingDays = remainingLifeExpectancy * 365;

        if (remainingDays > 0) {
            document.getElementById("life-expectancy").innerText = `${remainingDays.toLocaleString(undefined, { maximumFractionDigits: 0 })} days left`;
        } else {
            document.getElementById("life-expectancy").innerText = 'You meet your life expectancy, and yet you are still alive. Be thankful every day.';
        }
    }

    setInterval(updateLifeExpectancy, 86400000); // Update life expectancy every day (86400000 ms = 1 day)

    document.getElementById("le-username").innerText = localStorage.getItem("le-username") || 'Name not set'; 
    document.getElementById("le-userage").innerText = localStorage.getItem("le-userage") || 'Age not set'; 
    updateLifeExpectancy();
    
});
