  $(document).ready(function() {

$(".submenu-wrap").hide()
$(".main-nav-wrap").hover(
    function() {
      $(this).find(".submenu-wrap")
             .stop(true, true)  // 애니메이션 큐 초기화
             .slideDown(200);      // 자연스럽게 페이드인
    },
    function() {
      $(this).find(".submenu-wrap")
             .stop(true, true)
             .slideUp(200);     // 자연스럽게 페이드아웃
    }
  );


  // 햄버거 버튼 클릭
  $(".hamburger").click(function(e) {
    e.preventDefault(); // <a> 기본 이동 막기
    $(".mobile-nav").toggleClass("active");
    $(".mobile-overlay").toggleClass("active");
    $(".mobile-nav .submenu").slideUp();
  });

  // 오버레이 클릭 → 닫기
  $(".mobile-overlay").click(function() {
    $(".mobile-nav").removeClass("active");
    $(this).removeClass("active");
    $(".mobile-nav .submenu").slideUp();
  });

  // 모바일 메뉴 아이템 클릭
  $(".mobile-nav .mobile-item").click(function(e) {
    e.preventDefault(); // button 기본 동작 방지
    let submenu = $(this).next(".submenu");

    // 다른 서브메뉴 닫기
    $(".mobile-nav .submenu").not(submenu).slideUp();

    // 현재 서브메뉴 열기/닫기
    submenu.slideToggle();
  });
});


const slides = document.querySelectorAll(".main-invest-list .swiper-slide");

slides.forEach(slide => {
  const overlay = slide.querySelector(".overlay-txt");
  slide.addEventListener("mouseenter", () => {
    overlay.style.opacity = "1";
  });
  slide.addEventListener("mouseleave", () => {
    overlay.style.opacity = "0";
  });
});
