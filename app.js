const slider = document.getElementById('myRange');
slider.addEventListener('input', function () {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, #d3d3d3 ${value}%, #6c63ff ${value}%, #6c63ff 100%)`;
});