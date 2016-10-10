var content = document.getElementById("container");
var button = document.getElementById("lets-play");
var content2 = document.getElementById("info");

button.onclick=function() {
	// body...
	if(content2.className=="openn")
	{	content2.className="";
		content.className="";
		button.innerHTML="show less";
    }
    else{
    	content2.className="openn";
		content.className="close";
		button.innerHTML="Continue Game";
    }

};