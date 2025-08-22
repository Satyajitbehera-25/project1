const initSlider = () => {
    const imageList = document.querySelector(".day-slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".day-slider-wrapper .day-chevron");

    slideButtons.forEach(button => {
        button.addEventListener("click",() => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientwidth*direction;
            imageList.scrollby({ left:scrollAmount,behavio:"smooth" })
        });
    });
}



window.addEventListener("load", initSlider);



