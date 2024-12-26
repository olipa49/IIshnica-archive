async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Qwen/QwQ-32B-Preview",
		{
			headers: {
				Authorization: "Bearer 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",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}
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
    var text = document.getElementById("right"); 
    /*fetch(`http://localhost:8000/${pole}/${val}`, {mode: "no-cors"});*/
    query({"inputs": `Сократи следующий текст на ${pole} процентов: ${val}.`}).then((response) => {
        text.value = Object.values(JSON.stringify(response));
    });
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