// 모바일 메뉴 열고 닫기
const mbMenu = document.getElementById('mbmenu');
const openNav = document.getElementById('openNav');

mbMenu.addEventListener('click', function () {
  mbMenu.classList.toggle('active');
  openNav.classList.toggle('active');
});

// 팝업 열기
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

// 팝업 닫기
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// 탭 버튼 클릭 이벤트
document.querySelectorAll(".main_tab button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".main_tab button").forEach(b => b.classList.remove("on"));
    btn.classList.add("on");
    // 실제 탭 콘텐츠 전환은 필요 시 추가
  });
});
