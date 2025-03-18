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
            document.querySelector("body").style.overflow = "auto"
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
            gsap.to('.video-btn',{
                opacity: 1,
                y: -50,
                duration: 1,
                ease: "power2.out"  
            })
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
        }
    });
});



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
                    // intro-container가 존재하는 경우에만 scrollTo 실행
                    const introContainer = document.querySelector('.intro-container');
                    if (introContainer){
                        introContainer.remove();
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth" // 부드러운 스크롤 효과
                        });
                    }
                    const wrap = document.querySelector('.wrap');
                    wrap.style.position = 'relative'; // 고정 제거
                    wrap.style.height = 'auto';       // 콘텐츠에 맞게 높이 변경
                    wrap.style.opacity = 1;
                    document.body.style.height = 'auto';
                    document.documentElement.style.height = 'auto';
                    setTimeout(() => {
                        ScrollTrigger.refresh();
                    }, 1000)
                    // if (introContainer) {
                    //     window.scrollTo({
                    //         top: 0,
                    //         behavior: "smooth" // 부드러운 스크롤 효과
                    //     });
                    //     setTimeout(() => {
                    //         // intro-container 제거 및 wrap 스타일 복원
                    //         if (introContainer) introContainer.remove();
                    //         const wrap = document.querySelector('.wrap');
                    //         wrap.style.position = 'relative'; // 고정 제거
                    //         wrap.style.height = 'auto';       // 콘텐츠에 맞게 높이 변경
                    //         wrap.style.opacity = 1;
                    //         document.body.style.overflowY = 'auto';
                    //         ScrollTrigger.refresh();
                    //         // activateMainAnimations();
                    //     }, 1000);
                    // }
                    
                    
                }
            });
        }
    }
});

document.querySelector(".skip").addEventListener("click", () => {
    const intro = document.querySelector(".intro-container");

    gsap.to(intro, {
        opacity: 0,
        duration: 1, 
        ease: "power2.out", 
        onComplete: () => {
            const introContainer = document.querySelector('.intro-container');
            if (introContainer){
                introContainer.remove();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth" // 부드러운 스크롤 효과
                });
            }
            const wrap = document.querySelector('.wrap');
            wrap.style.position = 'relative'; // 고정 제거
            wrap.style.height = 'auto';       // 콘텐츠에 맞게 높이 변경
            wrap.style.opacity = 1;
            document.body.style.height = 'auto';
            document.documentElement.style.height = 'auto';
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 1000)
        }
    });
});


    gsap.to(".s1", {
        yPercent: -100, 
        ease: "none",
        scrollTrigger: {
            trigger: ".s1",
            start: "top top",
            end: "bottom top",
            scrub: 1, 
        }
    },'0');

    gsap.to(".s3", {
        yPercent: -100, 
        ease: "none",
        scrollTrigger: {
            trigger: ".s3",
            start: "0% 100%",
            end: "bottom bottom",
            scrub: 1, 
        }
    },'0');

    gsap.to(".s4 .project__list", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".s4",
            start: "top top",
            end: "bottom bottom",
            scrub: 1, 
        },
    });

    gsap.to(".s4", {
        yPercent: -30, 
        ease: "none",
        scrollTrigger: {
            trigger: ".s5",
            start: "top 30%",
            end: "bottom top",
            scrub: 1,
        }
    },'1');

    gsap.to(".s6", {
        yPercent: -100, 
        ease: "none",
        scrollTrigger: {
            trigger: ".s6",
            start: "0% 100%",
            end: "bottom bottom",
            scrub: 1, 
        }
    }),'1';

document.addEventListener("DOMContentLoaded", function () {
    const careerList = document.querySelector(".career__list");
    if (!careerList) return;

    // 리스트 내부의 모든 li 요소 가져오기
    const items = Array.from(careerList.children);

    // 리스트를 3배로 복제하여 무한 루프 구현
    for (let i = 0; i < 2; i++) {  // 기존 리스트 + 2배 복제(총 3배)
        items.forEach(item => {
            const clone = item.cloneNode(true);
            careerList.appendChild(clone);
        });
    }

    // 각 li 요소들이 개별적으로 위로 이동하는 GSAP 애니메이션
    gsap.to(".career__list", {
        y: "-100%", // 개별 li가 위로 이동
        duration: 20, // 속도 조절 (클수록 느림)
        ease: "none",
        repeat: -1, // 무한 반복
        stagger: 1, // 요소별 시간 차이 적용 (자연스럽게 움직이도록)
        modifiers: {
            y: function (y) {
                return (parseFloat(y) % 100) + "%"; // 부드러운 무한 루프 적용
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const topBtn = document.querySelector(".top-btn");

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 부드러운 스크롤 효과
        });
    });
});