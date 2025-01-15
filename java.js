// 햄버거 버튼
var burger = $(".menu-trigger");

burger.each(function (index) {
  var $this = $(this);

  $this.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active-" + (index + 1));
  });
});

// 햄버거 버튼 클릭 시 메뉴 토글
document.querySelector(".menu-trigger").addEventListener("click", function () {
  document.querySelector(".navbar .menu").classList.toggle("show");
});

// 상위 카테고리 클릭 시 하위 카테고리 표시
const menuItems = document.querySelectorAll(".navbar .menu > li");

menuItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    // 현재 클릭한 상위 카테고리만 active 클래스 추가하여 하위 메뉴 표시
    e.stopPropagation(); // 이벤트 전파를 막아 다른 상위 메뉴가 클릭되지 않도록 함
    item.classList.toggle("active");

    // 다른 상위 카테고리들에 active 클래스 제거 (하위 카테고리가 한 번에 하나만 열리도록)
    menuItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});

// 첫번째 section

(function () {
  window.addEventListener(`scroll`, () => {
    const introText = document.querySelectorAll("span");
    let firstSectionContent = document.querySelector(`.section1 .section1_img`);
    let firstSection = document.querySelector(`.section1`).offsetTop;
    let timer = 100;
    console.log(firstSection);
    if (window.scrollY >= firstSection - 500) {
      firstSectionContent.classList.add(`active`);
      introText.forEach((item) => {
        item.style.animation = `fade 500ms ${(timer += 60)}ms ease forwards`;
      });
    } else {
      firstSectionContent.classList.remove(`active`);
      introText.forEach((item) => {
        item.style.animation = ``;
      });
    }
  });
})();

//swiper

const swiperSlides = document.querySelectorAll(".swiper");

swiperSlides.forEach(function (element, index) {
  element.classList.add("swiper-" + index);
  let swiper = new Swiper(".swiper-" + index, {
    autoplay: {
      delay: 1,
      // 슬라이드가 자동으로 전환되기까지의 시간 간격
      desableOnInteraction: false,
      // arrow나 pagination이용 후 자동 재생을 비활성화 할지의 여부
    },
    speed: 4000,
    // 슬라이드가 자동으로 전환되는 속도를 설정
    loop: true,
    // 슬라이드가 무한 순환
    slidesPerView: "auto",
    // 슬라이드가 표시되는 갯수를 설정
    freemode: true,
    // 슬라이드가 자유롭게 스와이프 되도록 설정
  });
});

//말풍선 fade 애니메이션

(function () {
  window.addEventListener(`scroll`, () => {
    let thirdSection = document.querySelector(`.section3`);
    let thirdSectionOffset = document.querySelector(`.section3`).offsetTop;
    if (window.scrollY >= thirdSectionOffset - 500) {
      thirdSection.classList.add(`active`);
    } else {
      thirdSection.classList.remove(`active`);
    }
  });
})();
