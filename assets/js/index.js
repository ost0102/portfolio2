// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector("#header").remove();
//     document.querySelector(".main").remove();
// });

let introSplit1 = new SplitType(".intro-label.label1", { types: "chars", tagName: "span" });
let introSplit2 = new SplitType(".intro-label.label2", { types: "chars", tagName: "span" });
gsap.fromTo(
    ".intro-label.label1 .char", 
    { filter: "blur(5px)", opacity: 0 }, 
    { 
        filter: "blur(0px)", opacity: 1,  
        duration: 2, 
        ease: "power2.out",
        stagger: 0.05, 
        onComplete: () => {
            $(".intro-label.label1").css("z-index",-1),
            gsap.to(".intro-label.label1 .char", {
                filter: "blur(5px)", 
                opacity: 0, 
                duration: 2, 
                stagger: 0.05,
                ease: "power2.Out",
            });
            gsap.to(".intro-label.label2 .char", {
                filter: "blur(0px)", opacity: 1,  
                duration: 1.5, 
                ease: "power2.out",
                stagger: 0.05, 
            })
        }
    }
);

document.querySelector(".intro-label.label2").addEventListener("click", () => {
    gsap.to(".intro-label.label2", {
        opacity: 0,
        duration: 0.5, 
        ease: "power2.out", 
        onComplete: () => {
            document.documentElement.style.overflow = 'auto';
            document.querySelector(".intro-wrap").style.display = "none"; 
            setTimeout(() => {
                document.querySelector(".intro-wrap").remove();
            }, 100); 
            gsap.to(".intro-video", {
                opacity: 1,
                duration: 1,
                ease: "power2.out"  
            });
            gsap.to("video", {
                y: 0,
                ease: "power2.out"  
            });
            gsap.to('.video-scroll',{
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"  
            });
            gsap.to('.mo-img svg:nth-child(1)',{
                opacity:1,
                duration:2,
                ease: "power2.out",
            }, '0')
            gsap.to('.mo-label.label1',{
                opacity:1,
                duration:2,
                ease: "power2.out"
            }, '0')
        }
    });
});


const video = document.getElementById("video");

video.addEventListener("loadedmetadata", () => {
    gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
            trigger: ".intro-container",
            start: "0% -40%", 
            end: "100% 100%", 
            scrub: true, 
            anticipatePin: 1,
        }
    });
});
let m_scrollTl1 = gsap.timeline({
    scrollTrigger:{
        trigger: '.intro-container',
        start: "4% 0%",
        end: "15% 15%",
        ease: "power2.out",
        scrub: true,
    }
})
m_scrollTl1
    .to('.mo-img svg:nth-child(1)',{opacity:0}, '0')
    .to('.mo-img svg:nth-child(2)',{opacity:1}, '0')
    .to('.mo-label.label1', {opacity:0}, '0')
    .to('.mo-label.label2', {opacity:1}, '0')
let m_scrollTl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.intro-container',
        start: "19% 19%",
        end: "30% 30%",
        ease: "power2.out",
        scrub: true,
    }
})
m_scrollTl2
    .to('.mo-img svg:nth-child(2)',{opacity:0}, '0')
    .to('.mo-img svg:nth-child(3)',{opacity:1}, '0')
let m_scrollTl3 = gsap.timeline({
    scrollTrigger:{
        trigger: '.intro-container',
        start: "34% 34%",
        end: "45% 45%",
        ease: "power2.out",
        scrub: true,
    }
})
m_scrollTl3
    .to('.mo-img svg:nth-child(3)',{opacity:0}, '0')
    .to('.mo-img svg:nth-child(4)',{opacity:1}, '0')
let m_scrollTl4 = gsap.timeline({
    scrollTrigger:{
        trigger: '.intro-container',
        start: "49% 49%",
        end: "60% 60%",
        ease: "power2.out",
        scrub: true,
    }
})
m_scrollTl4
    .to('.mo-img svg:nth-child(4)',{opacity:0}, '0')
    .to('.mo-img svg:nth-child(5)',{opacity:1}, '0')
    .to('.mo-label.label2', {opacity:0}, '0')
    .to('.mo-label.label3', {opacity:1}, '0')
let m_scrollTl5 = gsap.timeline({
    scrollTrigger:{
        trigger: '.intro-container',
        start: "64% 64%",
        end: "75% 75%",
        ease: "power2.out",
        scrub: true,
    }
})
m_scrollTl5
    .to('.mo-img svg:nth-child(5)',{opacity:0}, '0')
    .to('.mo-img svg:nth-child(6)',{opacity:1}, '0')
let m_scrollTl6 = gsap.timeline({
    scrollTrigger:{
        trigger: '.intro-container',
        start: "80% 80%",
        end: "98% 98%",
        ease: "power2.out",
        scrub: true,
    }
})
m_scrollTl6
    .to('.mo-img svg:nth-child(6)',{opacity:0}, '0')
    .to('.mo-img svg:nth-child(7)',{opacity:1, scale:2}, '0')
    .to('.mo-label.label3', {opacity:0}, '0')
    .to('.mo-label.label4', {opacity:1, scale:2}, '0')

let scrollTl = gsap.timeline({
    scrollTrigger:{
        trigger: '.intro-container',
        start: "3% 0%",
        end: "8% 8%",
        ease: "power2.out",
        scrub: true,
    }
})
scrollTl
    .to('.video-scroll',{
        'font-size':'10px',
        opacity:0
    })


let videoSplit1 = new SplitType(".video-label.label1", { types: "chars", tagName: "span" });
videochars1 = videoSplit1.chars;

gsap.from(videochars1, {
    opacity: 0,  
    rotationX: 100,  
    stagger: 0.1,  
    ease: 'back',  
    duration: 1.5,   
    scrollTrigger: {
        trigger: '.intro-container',
        start: "20% 0%",
        end: "30% 30%",
        onEnter: () => {
            gsap.to(videochars1, {
                opacity: 1,    
                rotationX: 0,  
                stagger: 0.1,   
                ease: 'back',   
                duration: 1.5    
            });
        },
        onLeave: () => {
            gsap.to(videochars1, {
                opacity: 0,    
                rotationX: 100,
                stagger: 0.1, 
                ease: 'back',  
                duration: 1.5  
            });
        },
        onEnterBack: () => {
            gsap.to(videochars1, {
                opacity: 1,     
                rotationX: 0,   
                stagger: 0.1,  
                ease: 'back', 
                duration: 1.5    
            });
        },
        onLeaveBack: () => {
            gsap.to(videochars1, {
                opacity: 0,     
                rotationX: 100,
                stagger: 0.1,   
                ease: 'back',   
                duration: 1.5   
            });
        }
    }
});
    

let videoSplit2 = new SplitType(".video-label.label2", { types: "chars", tagName: "span" });
videochars2 = videoSplit2.chars;

gsap.from(videochars2, {
    opacity: 0,  
    rotationX: 100,  
    stagger: 0.1,  
    ease: 'back',  
    duration: 1.5,   
    scrollTrigger: {
        trigger: '.intro-container',
        start: "35% 0%",
        end: "55% 55%",
        onEnter: () => {
            gsap.to(videochars2, {
                opacity: 1,    
                rotationX: 0,  
                stagger: 0.1,   
                ease: 'back',   
                duration: 1.5    
            });
        },
        onLeave: () => {
            gsap.to(videochars2, {
                opacity: 0,    
                rotationX: 100,
                stagger: 0.1, 
                ease: 'back',  
                duration: 1.5  
            });
        },
        onEnterBack: () => {
            gsap.to(videochars2, {
                opacity: 1,     
                rotationX: 0,   
                stagger: 0.1,  
                ease: 'back', 
                duration: 1.5    
            });
        },
        onLeaveBack: () => {
            gsap.to(videochars2, {
                opacity: 0,     
                rotationX: 100,
                stagger: 0.1,   
                ease: 'back',   
                duration: 1.5   
            });
        }
    }
});
    

let videoSplit3 = new SplitType(".video-label.label3", { types: "chars", tagName: "span" });
videochars3 = videoSplit3.chars;

gsap.from(videochars3, {
    opacity: 0,  
    rotationX: 100,  
    stagger: 0.1,  
    ease: 'back',  
    duration: 1.5,   
    scrollTrigger: {
        trigger: '.intro-container',
        start: "55% 0%",
        end: "80% 80%",
        onEnter: () => {
            gsap.to(videochars3, {
                opacity: 1,    
                rotationX: 0,  
                stagger: 0.1,   
                ease: 'back',   
                duration: 1.5    
            });
        },
        onLeave: () => {
            gsap.to(videochars3, {
                opacity: 0,    
                rotationX: 100,
                stagger: 0.1, 
                ease: 'back',  
                duration: 1.5  
            });
        },
        onEnterBack: () => {
            gsap.to(videochars3, {
                opacity: 1,     
                rotationX: 0,   
                stagger: 0.1,  
                ease: 'back', 
                duration: 1.5    
            });
        },
        onLeaveBack: () => {
            gsap.to(videochars3, {
                opacity: 0,     
                rotationX: 100,
                stagger: 0.1,   
                ease: 'back',   
                duration: 1.5   
            });
        }
    }
});


let videoSplit4 = new SplitType(".video-label.label4", { types: "chars", tagName: "span" });
videochars4 = videoSplit4.chars;

gsap.from(videochars4, {
    opacity: 0,  
    rotationX: 100,  
    stagger: 0.1,  
    ease: 'back',  
    duration: 1.5,   
    scrollTrigger: {
        trigger: '.intro-container',
        start: "70% 0%",
        end: "95% 95%",
        onEnter: () => {
            gsap.to(videochars4, {
                opacity: 1,    
                rotationX: 0,  
                stagger: 0.1,   
                ease: 'back',   
                duration: 1.5    
            });
        },
        onLeave: () => {
            gsap.to(videochars4, {
                opacity: 0,    
                rotationX: 100,
                stagger: 0.1, 
                ease: 'back',  
                duration: 1.5  
            });
        },
        onEnterBack: () => {
            gsap.to(videochars4, {
                opacity: 1,     
                rotationX: 0,   
                stagger: 0.1,  
                ease: 'back', 
                duration: 1.5    
            });
        },
        onLeaveBack: () => {
            gsap.to(videochars4, {
                opacity: 0,     
                rotationX: 100,
                stagger: 0.1,   
                ease: 'back',   
                duration: 1.5   
            });
        }
    }
});


let videoTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.intro-container',
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,
        onLeave: () => {
            gsap.to('.intro-container', {
                opacity: 0,
                duration: 1,
                'z-index': -1,
                onComplete: () => {
                    // intro-container 제거
                    const introContainer = document.querySelector('.intro-container');
                    if (introContainer) {
                        introContainer.remove();
                        window.scrollTo({
                            top: 0,
                        });
                    }

                    // main을 다시 보이게 설정
                    const main = document.querySelector('main');
                    main.style.position = 'relative';
                    main.style.opacity = 1;

                    // ScrollTrigger 새로고침 후 fullPage.js 실행
                    setTimeout(() => {
                        if (window.innerWidth > 768 && !$.fn.fullpage.isFullpage) { // 769px 이상일 때만 fullPage.js 실행
                            initFullPage(); // fullPage.js 실행
                        }
                    });
                }
            });
        }
    }
});

// fullPage.js 실행 함수
function initFullPage() {
    if (typeof $.fn.fullpage !== "undefined") {
        $('.fullpage').fullpage({
            autoScrolling: true,
            scrollingSpeed: 1000
        });
        $.fn.fullpage.isFullpage = true; // fullPage.js 초기화 상태 표시
    } else {
        console.error("fullPage.js가 로드되지 않았습니다.");
    }
}

document.querySelectorAll('.link').forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        const showImg = this.closest('.section').querySelector('.show-behind');
        if (showImg) {
            showImg.classList.add('on');
        }
    });

    link.addEventListener('mouseleave', function() {
        const showImg = this.closest('.section').querySelector('.show-behind');
        if (showImg) {
            showImg.classList.remove('on');
        }
    });
});

document.querySelectorAll('.work-link').forEach(function(worklink) {
    worklink.addEventListener('mouseenter', function() {
        const showWrap = this.querySelector('.show-wrap');
        if (showWrap) {
            gsap.to(showWrap,{
                opacity: 1,
                'clip-path': 'inset(0% 0% 0% 0%)',
                duration: .3
            })
        }
    });

    worklink.addEventListener('mouseleave', function() {
        const showWrap = this.querySelector('.show-wrap');
        if (showWrap) {
            gsap.to(showWrap, {
                opacity: 0,
                'clip-path': 'inset(50% 0% 50% 0%)', // 기본 상태로 되돌리기
                duration: .3
            });
        }
    });
});

