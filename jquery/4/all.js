function showGradeComment(){
    let a = $("#grade").val();
    if(a >= 90){
        $("#gradeComment").html("優秀");
    }else if (a >= 80){
        $("#gradeComment").html("良好");
    }else if(a >= 70){
        $("#gradeComment").html("一般");
    }else if(a >= 60){
        $("#gradeComment").html("及格");
    }else{
        $("#gradeComment").html("不及格");
    }
}