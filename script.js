function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

var scroll = document.getElementsByClassName("scroll-btn")[0];

window.onscroll = function() {showScroll()};

function showScroll() {
    if(!scroll) {
        scroll = document.getElementsByClassName("scroll-btn")[0];
    }
    if (document.body.scrollTop > document.body.scrollHeight/5 || document.documentElement.scrollTop > document.documentElement.scrollHeight/5) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
  }
}
