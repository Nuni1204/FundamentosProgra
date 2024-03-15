document.addEventListener("DOMContentLoaded", function() {
  const colorOptions = document.querySelectorAll(".color-option");
  const carImages = document.querySelectorAll(".car-images img");

  colorOptions.forEach(function(option, index) {
    option.addEventListener("click", function() {
      
      carImages.forEach(function(image) {
        image.classList.remove("active");
      });

      
      carImages[index].classList.add("active");
    });
  });
});
