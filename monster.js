let booleanVar= false;

function boo(){
    if (booleanVar == false) {
        document.getElementById("gato").style.display = "block";
        document.getElementById("bo").style.display = "none";
        booleanVar = true;
    }
    else{
        document.getElementById("gato").style.display = "none";
        document.getElementById("bo").style.display = "block";
        booleanVar = false;
    }
}