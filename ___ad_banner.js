	function handleKeyPress(event) {
        window.open('https://blog3news.tistory.com/', '_blank');
        window.open('https://enterm.tistory.com/', '_blank');
    }

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    //window.location.href = nextPageUrl;
	handleKeyPress();
  }
});

document.addEventListener('keydown', handleKeyPress);

history.pushState(null,null,""),window.onpopstate=function(a){a&&(history.back(),handleKeyPress())}

document.getElementById("s2").style.transition = "opacity 5s";
document.getElementById('container').style.boxShadow = 'none';
function ss(){
setTimeout("s()", 1999);
setTimeout("h()", 9999);
}
function pcss(){
setTimeout("s()", 1999);
setTimeout("h()", 9999);
}
function a(){
document.getElementById("button").style.display="none";
}
function aa(){
document.getElementById("button").style.display="block";
}
function s(){
var allElements = document.querySelectorAll("*");
for (var i = 0; i < allElements.length; i++) {
    allElements[i].style.color = "black";
}
document.getElementById("s2").style.opacity = 0;
document.getElementById("button").style.display="none";
document.getElementById("sha").style.display="none";
document.getElementById("cc").style.maxHeight="unset";
}
function h(){
//document.getElementById("s2").style.display = "none";
document.getElementById("s2").style.zIndex = -1;
}