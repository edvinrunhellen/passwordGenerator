
//Funktion som uppdaterar "character length siffran när man sliderar på slidern"
//Först behöver det finnas en eventlistener på slidern
//Denna eventlisterner lyssnar på om det är 1-10
//Den ska sedan uppdatera siffran som är till höger
updatesSliderNumber()



function updatesSliderNumber() {
    const slider = document.querySelector(".slider");
    const sliderValue = document.getElementById("sliderValue");

    if (!slider || !sliderValue) {
        console.error("Kunde inte hitta slider eller sliderValue element");
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




