function OnButtonClick() {
  let text_val = document.getElementById('text_value').value;
  document.getElementById('val').textContent = text_val;
}

function ResetClick() {
  document.getElementById('text_value').value = "";
}