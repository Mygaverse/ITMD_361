function init(){
//add your javascrip between these two lines of code
  var alert_btn = document.getElementById("entrybutton");

  function show_text(){
    var textbox = document.getElementById("entryinput");
    document.getElementById("textoutput").innerHTML = textbox.value;
    alert("Alan Lu: " + textbox.value);
  }
  
  alert_btn.addEventListener("click", show_text);
}

window.addEventListener('load', init);
