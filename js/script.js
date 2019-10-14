var form = document.querySelector(".search-hotel-form");
var formButton = document.querySelector(".open-search-form");
console.log(form);
console.log(formButton);

formButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("fuck");
    form.classList.toggle("hidden");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (!form.classList.contains("hidden")) {
            form.classList.add("hidden");
        }

    }
});