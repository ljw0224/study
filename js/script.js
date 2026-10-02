// .btn-menu 요소를 가져와 btn 변수에 저장
const btn = document.querySelector('.btn-menu');
// .main-nav 요소 가져와 nav 변수에 저장
const nav = document.querySelector('.main-nav');

//버튼을 클릭하면
btn.addEventListener('click',() => {
    // nav 요소의 클래스에 open-menu를 토글한다.
    nav.classList.toggle('open-menu');
    //만약 btn 요소의 innerHTML이 'Menu'인 경우
    if(btn.innerHTML === 'Menu') {
        // btn 요소의 innerHTML을 'Close'로 변경
        btn.innerHTML = 'Close'
    } else {
        btn.innerHTML = 'Menu'
    }
});


// 다크모드버튼
const themeBtn = document.querySelector('.btn-theme');

themeBtn.addEventListener("click", () => {
    // body에 dark 클래스를 붙였다 뗀다.
    document.body.classList.toggle('dark');
    // body 클래스에 dark 클래스가 있으면 해 아이콘, 없으면 달 아이콘으로 변경
    if (document.body.classList.contains('dark')) {
        themeBtn.innerHTML = '☀️';
    } else {
        themeBtn.innerHTML = '🌙';
    }
});

// 글자 수 세기
const textarea = document.querySelector('.apply-textarea');
const charCount = document.querySelector('.char-count');

// 글자를 입력할 때마다(input 이벤트) 실행
textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    charCount.textContent = length + ' / 200자';

    // 180자 이상이면 경고 스타일(warn)을 붙이고, 아니면 뗀다
    if (length >= 180) {
        charCount.classList.add('warn');
    } else {
        charCount.classList.remove('warn');
    }
});

// 디지털 시계
const clockDate = document.querySelector('.clock-date');
const clockTime = document.querySelector('.clock-time');
const days = ["일", "월", "화", "수", "목", "금", "토"]

function updateClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = days[now.getDay()];
    clockDate.textContent = year + "년" + month + "월" + date + "일(" + day + ")";

    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockTime.textContent = h + ":" + m + ":" + s;
}

updateClock();
setInterval(updateClock, 1000); // 이후 1초마다 반복 실행


// 커리큘럼 탭 메뉴 
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach((tab) => {
    tab.addEventListener('click', () => {
        // 모든 탭 버튼과 패널에서 active 제거
        tabBtns.forEach((b) => b.classList.remove('active'));
        tabPanels.forEach((p) => p.classList.remove('active'));
        
        // 클릭한 버튼과, 그 버튼의 data-tab 값과 같은 id를 가진 패널에 active를 붙인다
        tab.classList.add('active'); // 클릭한 버튼 켜기
        document.getElementById(tab.dataset.tab).classList.add('active'); //짝 패널 켜기
    })
})

// 스터디 사진 갤러리
const galleryMain = document.querySelector('.gallery-main');
const galleryThumbs = document.querySelectorAll('.gallery-thumbs img')

galleryThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        galleryMain.src = thumb.src;
        galleryMain.alt = thumb.alt;
    

        galleryThumbs.forEach((t) => t.classList.remove('active'));
        thumb.classList.add('active')
    });
});