document.getElementById('cinemaSelect').addEventListener('change', function() {
  var cinema = this.value;
  var movieContainer = document.getElementById('movieContainer');
  
 
  movieContainer.innerHTML = '';

  if (cinema === 'cine1') {
      movieContainer.innerHTML = `
          <div class="movie">
              <h3>Películas en Cine Escazú:</h3>
              <p>1. Nombre de la película 1</p>
              <p>2. Nombre de la película 2</p>
              <p>3. Nombre de la película 3</p>
          </div>
      `;
  } else if (cinema === 'cine2') {
      movieContainer.innerHTML = `
          <div class="movie">
              <h3>Películas en Cine Santa Ana:</h3>
              <p>1. Nombre de la película A</p>
              <p>2. Nombre de la película B</p>
              <p>3. Nombre de la película C</p>
          </div>
      `;
  } else if (cinema === 'cine3') {
      movieContainer.innerHTML = `
          <div class="movie">
              <h3>Películas en Cine San Carlos:</h3>
              <p>1. Nombre de la película X</p>
              <p>2. Nombre de la película Y</p>
              <p>3. Nombre de la película Z</p>
          </div>
      `;
  } else {
      movieContainer.innerHTML = '<p>No se encontró información para este cine.</p>';
  }
});
