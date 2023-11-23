const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
  // 속성을 추가해서 브라우저에서 보여줌
  // (첫 번째 인자 : 속성 이름, 두 번째 인자 : 속성에 들어갈 실제 값)
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    // 윈도우를 스크롤 했을 때 함수가 수십 개가 한 번에 실행되는데,
    // 0.3초 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지하는 용도로
    // 로데시에서 제공하는 throttle 기능을 도입.
    // _.throttle(함수, 시간)

    if (window.scrollY > 500) {
      // 배지가 나타나거나 사라지는게 너무 부자연스러워서 애니메이션 라이브러리 gsap 도입.
      // gsap.to(요소, 지속시간, 옵션)

      // 배지 숨기기
      // badgeEl.style.display = "none";

      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 배지 보이기
      // badgeEl.style.display = "block";

      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
