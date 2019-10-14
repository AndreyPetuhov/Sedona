var form = document.querySelector(".search-hotel-form"),
    formButton = document.querySelector(".open-search-form");
console.log(form), console.log(formButton), formButton.addEventListener("click", function (e) {
    e.preventDefault(), form.classList.toggle("hidden")
}), window.addEventListener("keydown", function (e) {
    27 === e.keyCode && (e.preventDefault(), form.classList.contains("hidden") || form.classList.add("hidden"))
});