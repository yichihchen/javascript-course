function checkEven(){
    let a = document.getElementById('number3').value;
    if(a <= 0){
       document.getElementById('evenResult').innerHTML = "請輸入0以上數字";
    }else if(a % 2=== 0){
       document.getElementById('evenResult').innerHTML = "true";
    }else{
       document.getElementById('evenResult').innerHTML = "false";
    }

}