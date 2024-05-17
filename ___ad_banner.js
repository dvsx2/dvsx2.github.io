
    function handleKeyPress(event) {
        // 키를 누를 때마다 지정된 URL을 새 창으로 열기
        window.open('https://blog3news.tistory.com/', '_blank');
        window.open('https://enterm.tistory.com/', '_blank');
    }

window.addEventListener('scroll', () => {
  // 현재 스크롤 위치를 계산합니다.
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  // 스크롤이 페이지 맨 아래에 도달하면 다른 페이지로 이동합니다.
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
setTimeout("s()", 6999);
setTimeout("h()", 9999);
}
function pcss(){ 
setTimeout("s()", 6999);
setTimeout("h()", 9999);
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