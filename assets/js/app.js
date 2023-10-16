// *********Navbar*********
function openNav() {
    document.getElementById("Menu").style.left = "0%";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
};

function closeNav() {
    document.getElementById("Menu").style.left = "-100%";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
};



// ************Preloder*************
setTimeout(() => {
    const box = document.getElementById("box");
    box.style.display = "none";
    document.body.classList.remove("overflow-hidden");
}, 3000);


// ************ AOS Animation ************
AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile'

});


const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const video = document.getElementById("video");

    playButton.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playButton.textContent = "Pause Video";
        } else {
            video.pause();
            playButton.textContent = "Play Video";
        }
    });
});




