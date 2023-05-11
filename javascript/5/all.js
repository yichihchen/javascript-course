function isAverageAbove60(){
  let number4 = parseInt(document.getElementById('number4').value);
  let number5 = parseInt(document.getElementById('number5').value);
  let number6 = parseInt(document.getElementById('number6').value);
   let average = (number4 + number5 + number6) / 3;
   if(average >= 60){
     document.getElementById('averageResult').innerHTML = "true";
   }else{
     document.getElementById('averageResult').innerHTML = "false";
   }
}