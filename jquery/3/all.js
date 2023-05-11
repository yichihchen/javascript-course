function checkEven() {
  let a = parseInt($("#number3").val());
  if (a <= 0) {
    $("#evenResult").html("請輸入0以上數字");
  } else if (a % 2 === 0) {
    $("#evenResult").html("是偶數");
  } else {
    $("#evenResult").html("不是偶數");
  }
}
