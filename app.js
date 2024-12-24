
//Funktion som uppdaterar "character length siffran när man sliderar på slidern"
//Först behöver det finnas en eventlistener på slidern
//Denna eventlisterner lyssnar på om det är 1-10
//Den ska sedan uppdatera siffran som är till höger
updatesSliderNumber()
copyPassword()







let password = document.getElementById("generatedPassword")
function generatePassword() {
    const sliderValueElement = document.getElementById("sliderValue");
    const sliderValue = Number(sliderValueElement.textContent);
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for (let i = 0; i < sliderValue; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    document.getElementById("generatedPassword").textContent = password
}

function copyPassword() {
    let copy = document.getElementById("copyImage")
    copy.addEventListener("click", copyPasswordToClipboard);
}

function copyPasswordToClipboard() {
    const generatedPassword = document.getElementById("generatedPassword");
    navigator.clipboard.writeText(generatedPassword.textContent);

}

function updatesSliderNumber() {
    const slider = document.querySelector(".slider");
    const sliderValue = document.getElementById("sliderValue");

    if (!slider || !sliderValue) {
        return;
    }

    function updateSlider() {
        const value = slider.value;
        sliderValue.textContent = value;
        const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.background = `linear-gradient(to right, #A638F6 ${percent}%, #24232C ${percent}%)`;
    }

    slider.addEventListener("input", updateSlider);

    updateSlider();
}




