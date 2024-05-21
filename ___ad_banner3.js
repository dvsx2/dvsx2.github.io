document.getElementById("s2").style.transition = "opacity 5s";
document.getElementById('container').style.boxShadow = 'none';
function ss(){
setTimeout("s()", 6999);
setTimeout("h()", 9999);
}
function pcss(){
setTimeout("s()", 6999);
setTimeout("h()", 9999);
}
function a(){
document.getElementById("button").style.display="none";
}
function aa(){
document.getElementById("button").style.display="block";
}
function s(){
document.getElementById("s2").style.opacity = 0;
document.getElementById("button").style.display="none";
document.getElementById("sha").style.display="none";
document.getElementById("cc").style.maxHeight="unset";
}
function h(){
//document.getElementById("s2").style.display = "none";
document.getElementById("s2").style.zIndex = -1;
}