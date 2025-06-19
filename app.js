// Banner rasmlari almashinuvi
const bannerImages = [
    "assets/banner2.jpg",
    "assets/banner3.jpg",
    "assets/banner4.jpg",
    "assets/banner5.jpg",
    "assets/banner6.jpg",
    "assets/banner7.jpg",
    "assets/banner8.jpg",
    "assets/banner9.jpg",
    "assets/banner10.jpg"
];
let currentImageIndex = 0;

function changeBanner() {
    const banner = document.getElementById("banner-image");
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    banner.style.opacity = 0;
    
    setTimeout(() => {
        banner.src = bannerImages[currentImageIndex];
        banner.style.opacity = 1;
    }, 500);
}

// Har 5 soniyada banner o'zgartiramiz
setInterval(changeBanner,2000);

// Telegram WebApp ni aniqlash

if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.expand();
    Telegram.WebApp.enableClosingConfirmation();
}
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.banner img');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let intervalId;

    // Rasm almashish funksiyasi
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        images[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // Avtomatik almashish
   // function startSlider() {
      //  intervalId = setInterval(() => {
        //    let nextIndex = (currentIndex + 1) % images.length;
       //     showImage(nextIndex);
      //  }, 3000);
  //  }

    // Tugmalar uchun hodisalar
    prevBtn.addEventListener('click', () => {
        clearInterval(intervalId);
        let prevIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(prevIndex);
        startSlider();
    });

    nextBtn.addEventListener('click', () => {
        clearInterval(intervalId);
        let nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
        startSlider();
    });

    // Nuqtalar uchun hodisalar
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(intervalId);
            showImage(index);
            startSlider();
        });
    });

    // Boshlang'ich holat
    showImage(0);
    startSlider();
});