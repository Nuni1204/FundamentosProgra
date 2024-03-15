function showResult() {
  var radios = document.getElementsByName('demoRadio');
  var selectedRadioValue;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedRadioValue = radios[i].value;
      break;
    }
  }

  var checkboxes = document.getElementsByName('demoCheckbox');
  var selectedCheckboxes = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedCheckboxes.push(checkboxes[i].value);
    }
  }

  var result = "Radio seleccionado: " + selectedRadioValue + "<br>";
  result += "Checkboxes seleccionados: " + (selectedCheckboxes.length > 0 ? selectedCheckboxes.join(', ') : "Ninguno");
  
  document.getElementById('result').innerHTML = result;
}
