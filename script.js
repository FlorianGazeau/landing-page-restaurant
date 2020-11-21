var last_scroll_position = 0;
var ticking = false;

function addClassHeader(position_scroll) {
    if(position_scroll > 30) {
        const header = document.querySelector('header')
        header.classList.add("fixed")
    }
    else if (position_scroll < 30) {
        const header = document.querySelector('header')
        header.classList.remove("fixed")
    }
}

window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      addClassHeader(last_scroll_position);
      ticking = false;
    });
  }

  ticking = true;
});