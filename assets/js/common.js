window.onload = function() {
  setTimeout(function() {
      window.scrollTo(0, 0); 
  }, 100);  
};

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 800);
});

gsap.ticker.lagSmoothing(0);

$(window).scroll(function() {
  if ($(window).scrollTop() > 2) {
    $('header').addClass('difference');
  }else{
    $('header').removeClass('difference');
  }
});

let cursorTag = `
<div class="__cursor">
  <div class="n1"></div>
  <div class="n2"></div>
  <div class="n3"></div>
</div>
`
$('body').parent().append(cursorTag);

let cursorPosition = { x: 0, y: 0 };  // 현재 커서 위치
let targetPosition = { x: 0, y: 0 };  // 목표 위치 (마우스 위치)

$(window).on('mousemove', function(e) {
    // 실제 마우스 위치를 목표 위치로 설정
    targetPosition.x = e.clientX;
    targetPosition.y = e.clientY;
});

// 커서가 천천히 이동하도록 설정
function moveCursor() {
    // 현재 위치에서 목표 위치로 점진적으로 이동
    cursorPosition.x += (targetPosition.x - cursorPosition.x) * 0.1; // 10%만큼 목표 위치에 가까워짐
    cursorPosition.y += (targetPosition.y - cursorPosition.y) * 0.1; // 10%만큼 목표 위치에 가까워짐

    // .__cursor의 위치를 업데이트
    $('.__cursor').css({
        'left': `${cursorPosition.x - $('.__cursor').width() / 2}px`,
        'top': `${cursorPosition.y - $('.__cursor').height() / 2}px`
    });

    requestAnimationFrame(moveCursor); // 애니메이션 계속 업데이트
}

moveCursor(); // 초기 호출로 커서 이동 시작

$('a, button, .intro-label.label2').hover(function() {
    $('.__cursor').addClass('hover');
}, function() {
    $('.__cursor').removeClass('hover');
});