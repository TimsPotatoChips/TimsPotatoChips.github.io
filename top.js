topButton = document.getElementById("top-button");

window.onscroll = function() {scroll()};

function scroll(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.opacity = "1";
      topButton.style.scale = "1";
      topButton.style.pointerEvents = "all"; 
    }
    
    else {
      topButton.style.opacity = "0";
      topButton.style.scale = "1.2";
      topButton.style.pointerEvents = "none";
    }
}

function topButtonFunction(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}