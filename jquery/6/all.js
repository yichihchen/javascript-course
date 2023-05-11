function checkLeapYear(){
    let a = $("#year").val();
    if(a % 4 === 0 && a % 100 !==0){
        $("#leapYearResult").html("是閏年");
    }else if(a % 100 === 0 && a % 400 ===0){
        $("#leapYearResult").html("是閏年");
    }else {
        $("#leapYearResult").html("不是閏年");
    }
}