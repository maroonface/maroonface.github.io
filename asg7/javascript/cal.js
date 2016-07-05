
clearDisplay = function(val){
  document.getElementById('display').value = val;
}
setDisplay = function(val){
 document.getElementById('display').value += val;
}
calculate = function(){
  try{
    var total;
  total = eval(document.getElementById('display').value);
  total = total.toFixed(2);
  clearDisplay(total);
}
catch(calculate){
  clearDisplay('Error');
}
}
