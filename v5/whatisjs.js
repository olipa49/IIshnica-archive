function copyy(){ 
    var text = document.getElementById("left"); 
    text.select(); 
    document.execCommand("copy"); 
    document.getSelection().removeAllRanges(); 
}
function copyy2(){ 
    var text = document.getElementById("right"); 
    text.select(); 
    document.execCommand("copy"); 
    document.getSelection().removeAllRanges(); 
}
function del(){ 
    var val = document.getElementById("left"); 
    val.value = ''; 
}
function apisokr() {

}
function apiper() {

}
function testfetch() {
    var pole = document.getElementById("number").value;
    var val = document.getElementById("left").value;
    fetch(`http://127.0.0.1:8000/${pole}/${val}`)
}
function sync1() {
    var pole = document.getElementById("number");
    var polz = document.getElementById("range");
    polz.value = pole.value;
}
function sync2() {
    var pole = document.getElementById("number");
    var polz = document.getElementById("range");
    pole.value = polz.value;
}