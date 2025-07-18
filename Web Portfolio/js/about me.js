window.addEventListener('DOMContentLoaded', function () {
  // 모바일 메뉴 toggle
  const mbMenu = document.querySelector('.mbmenu');
  const openNav = document.querySelector('.open_nav');

  mbMenu.addEventListener('click', function () {
    mbMenu.classList.toggle('active');
    openNav.classList.toggle('active');
  });

  // 스크롤 애니메이션 (life 이미지 등장)
  window.addEventListener('scroll', function () {
    const lifeItems = document.querySelectorAll('.life_area li');
    lifeItems.forEach(el => {
      const rect = el.getBoundingClientRect().top;
      if (rect < window.innerHeight - 100) {
        el.classList.add('on');
      }
    });
  });

  // Swiper 초기화
  const swiper1 = new Swiper('.swiper1', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const swiper2 = new Swiper('.swiper2', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
  });

  // Top 버튼
  const topBtn = document.querySelector('.top_btn > a');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  });

  topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

