document.addEventListener("DOMContentLoaded", function () {
  const estudiantes = [];

  const nombreInput = document.getElementById("nombre");
  const apellidosInput = document.getElementById("apellidos");
  const periodo1Input = document.getElementById("periodo1");
  const periodo2Input = document.getElementById("periodo2");
  const periodo3Input = document.getElementById("periodo3");
  const agregarBtn = document.getElementById("agregar");
  const estudiantesSelect = document.getElementById("estudiantes");
  const calcularPromedioBtn = document.getElementById("calcularPromedio");
  const resultadoDiv = document.getElementById("resultado");

  agregarBtn.addEventListener("click", function () {
    const nombre = nombreInput.value;
    const apellidos = apellidosInput.value;
    const periodo1 = parseInt(periodo1Input.value);
    const periodo2 = parseInt(periodo2Input.value);
    const periodo3 = parseInt(periodo3Input.value);
    const promedio = (periodo1 + periodo2 + periodo3) / 3;

    const estudiante = {
      nombre: nombre,
      apellidos: apellidos,
      periodo1: periodo1,
      periodo2: periodo2,
      periodo3: periodo3,
      promedio: promedio.toFixed(2),
    };

    estudiantes.push(estudiante);

    const option = document.createElement("option");
    option.text = `${nombre} ${apellidos}`;
    estudiantesSelect.add(option);
  });

  calcularPromedioBtn.addEventListener("click", function () {
    const selectedIndex = estudiantesSelect.selectedIndex;
    const estudianteSeleccionado = estudiantes[selectedIndex];
    if (estudianteSeleccionado) {
      resultadoDiv.innerText = `El promedio anual de ${
        estudianteSeleccionado.nombre
      } ${
        estudianteSeleccionado.apellidos
      } es: ${estudianteSeleccionado.promedio}`;
    } else {
      resultadoDiv.innerText = "Por favor selecciona un estudiante.";
    }
  });
  estudiantesSelect.addEventListener("change", function () {
    const selectedIndex = estudiantesSelect.selectedIndex;
    const estudianteSeleccionado = estudiantes[selectedIndex];
    if (estudianteSeleccionado) {
      nombreInput.value = estudianteSeleccionado.nombre;
      apellidosInput.value = estudianteSeleccionado.apellidos;
      periodo1Input.value = estudianteSeleccionado.periodo1;
      periodo2Input.value = estudianteSeleccionado.periodo2;
      periodo3Input.value = estudianteSeleccionado.periodo3;
    }
  });
  const limpiarBtn = document.getElementById("limpiar");

limpiarBtn.addEventListener("click", function () {
  nombreInput.value = "";
  apellidosInput.value = "";
  periodo1Input.value = "";
  periodo2Input.value = "";
  periodo3Input.value = "";
});

});
