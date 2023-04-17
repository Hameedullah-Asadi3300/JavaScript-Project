


let slideIndex = 1;
showSlides(slideIndex);


 //Next/Previous controls
function pluseSlides(n) {
    showSlides(SlideIndex += n);
}

//Thumbnail image control
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let: i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slidesIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideindex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}




















function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time is up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}


