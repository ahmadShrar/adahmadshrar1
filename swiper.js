var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  preventClicks: false,
  preventClicksPropagation: false,
  simulateTouch: true,
  touchStartPreventDefault: false,
});

// تحديث زرار المشروع مع كل سلايد
function updateProjectButton() {
  const activeSlide = swiper.slides[swiper.activeIndex];
  const link = activeSlide.getAttribute("data-link") || "javascript:void(0)";
  document.querySelector("#project-link").setAttribute("href", link);
}

// أول ما يشتغل السلايدر
updateProjectButton();

// كل ما السلايد يتغير
swiper.on("slideChange", updateProjectButton);