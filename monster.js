let booleanVar= false;

function boo(){
    if (booleanVar === false) {
        document.getElementById("bo").style.display = "block";
        document.getElementById("gato").style.display = "none";
        booleanVar = true;
    }
    else{
        document.getElementById("bo").style.display = "none";
        document.getElementById("gato").style.display = "block";
        booleanVar = false;
    }
}