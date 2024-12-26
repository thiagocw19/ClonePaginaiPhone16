// seletor de elementos
const button = document.querySelectorAll("#image-picker li");
const img = document.querySelector("#product-image");

// funções

// eventos
button.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("teste");
    });
});