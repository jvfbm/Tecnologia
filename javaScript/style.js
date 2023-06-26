window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var windowheight = window.innerHeight;
    var revealtop;
    var revealpoint = 150;

    for (var i = 0; i < reveals.length; i++) {
        revealtop = reveals[i].getBoundingClientRect().top;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }

}