$(function() {
  // 모바일 메뉴 버튼
  $(".mbmenu").click(function () {
    $(this).toggleClass("active");
    $(".open_nav").toggleClass("active");
  });

  // 스크롤 시 aboutme 애니메이션
  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    const aboutOffset = $(".aboutme").offset().top - 400;

    if (scrollTop > aboutOffset) {
      $(".aboutme").addClass("on");
    }
  });

  // Top 버튼 노출
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".top_btn > a").fadeIn();
    } else {
      $(".top_btn > a").fadeOut();
    }
  });

  // 탭 전환
  $(".skill_list a").click(function (e) {
    e.preventDefault();
    $(".skill_list a").removeClass("active");
    $(this).addClass("active");

    // 탭에 맞는 데이터 전환하려면 AJAX 또는 클래스에 따라 변경 가능
  });
});

//skill 탭
$('.skill_tab').hide();
$('.skill_tab').eq(0).show();
$('.skill_list > ul > li').click(function () {
  var i = $(this).index();

  $('.skill_list > ul > li').find('a').removeClass('active'); 
  $(this).find('a').addClass('active'); 

  $('.skill_txtcon').removeClass('on')
  $(this).parents('.skill_box').find('.skill_txtcon').addClass('on')

  $('.skill_tab').hide();
  $('.skill_tab').eq(i).show();


  return false;
});