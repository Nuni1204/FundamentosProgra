document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("opcion");
    const contenidoElements = document.querySelectorAll(".contenido");

    selectElement.addEventListener("change", function() {
        const selectedOption = selectElement.value;
        contenidoElements.forEach(contenido => {
            contenido.style.display = "none";
        });
        document.getElementById(selectedOption).style.display = "block";
    });
});
