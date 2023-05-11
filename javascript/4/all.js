function showGradeComment(){
    let a = document.getElementById('grade').value;
    if(a >= 90){
        document.getElementById('gradeComment').innerHTML = "優秀";
    }else if(a >= 80){
        document.getElementById('gradeComment').innerHTML = "良好";
    }else if(a >= 70){
        document.getElementById('gradeComment').innerHTML = "一般";
    }else if(a >= 60){
        document.getElementById('gradeComment').innerHTML = "及格";
    }else{
        document.getElementById('gradeComment').innerHTML = "不及格";
    }
}