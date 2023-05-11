function checkLeapYear(){
    let a = parseInt(document.getElementById('year').value);
    if(a % 4 === 0 && a %100 !== 0){
        document.getElementById('leapYearResult').innerHTML = "是閏年";
    }else if(a%400===0 && a %100 ===0){
        document.getElementById('leapYearResult').innerHTML = "是閏年";
    }else{
        document.getElementById('leapYearResult').innerHTML = "不是閏年";
    }
}