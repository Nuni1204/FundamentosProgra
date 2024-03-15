document.addEventListener("DOMContentLoaded", function() {
    const modelSelect = document.getElementById("model");
    const versionSelect = document.getElementById("version");
    const calculateButton = document.getElementById("calculate-button");
    const vehicleImage = document.getElementById("vehicle-image");
    const vehiclePrice = document.getElementById("vehicle-price");

    calculateButton.addEventListener("click", function() {
        const selectedModel = modelSelect.value;
        const selectedVersion = versionSelect.value;

        let price = 0;
        let imageSrc = "";

        if (selectedModel === "frontier") {
            if (selectedVersion === "manual") {
                price = 15;
                imageSrc = "img/nissan-frontier.jpg";
            } else if (selectedVersion === "automatico") {
                price = 20;
                imageSrc = "img/nissan-frontier.jpg";
            }
        } else if (selectedModel === "qashqai") {
            if (selectedVersion === "manual") {
                price = 8;
                imageSrc = "img/nissan-qashqai.jpg";
            } else if (selectedVersion === "automatico") {
                price = 13;
                imageSrc = "img/nissan-qashqai.jpg";
            }
        }

        vehiclePrice.textContent = price;
        vehicleImage.src = imageSrc;
    });

    modelSelect.addEventListener("change", function() {
        const selectedModel = modelSelect.value;

        let imageSrc = "";

        if (selectedModel === "frontier") {
            imageSrc = "imagen_frontier.jpg";
        } else if (selectedModel === "qashqai") {
            imageSrc = "imagen_qashqai.jpg";
        }

        vehicleImage.src = imageSrc;
    });
});
