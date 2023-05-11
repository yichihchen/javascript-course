function checkAverage(){
    let a =parseInt( $("#number4").val());
    let b = parseInt($("#number5").val());
    let c = parseInt($("#number6").val());
    let average = (a + b + c) / 3;
    if(average >= 60){
        $("#averageResult").html("true");
    }else{
        $("#averageResult").html("false");
    }
}