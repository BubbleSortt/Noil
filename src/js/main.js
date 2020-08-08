let divImages = document.querySelector('.our-features__bg');
let summonLeftBg = document.querySelector('.summon-left-bg');
let summonRightBg = document.querySelector('.summon-right-bg');
//let summonCenBg = document.querySelector('.summon-center-bg');
let portfolioLeft = document.querySelector('.portfolio-left-bg');
let images = divImages.querySelectorAll('img');
let summonLeftBgImg = summonLeftBg.querySelectorAll('img');
let summonRightBgImg = summonRightBg.querySelectorAll('img');
//let summonCenBgImg = summonCenBg.querySelectorAll('img');
let portfolioLeftBg = portfolioLeft.querySelectorAll('img');

//setObserver(summonCenBgImg, 'opacity', 0.1);
setObserver(summonLeftBgImg , 'fadeInLeft', 0.1);
setObserver(images, 'fadeInUp', 0.5);
setObserver(summonRightBgImg , 'fadeInRight', 0.5);
setObserver(portfolioLeftBg, 'fadeInLeft', 0.1);
 function setObserver(el, className, threshold) {

    const options = {
        root: null,
        threshold: threshold
    };
    function handleView(img, observer) {
        img.forEach(elo => {
            if (elo.intersectionRatio > threshold) {
                setAnim(elo.target);
            }
        })

    }
    function setAnim(image) {
        image.classList.add('animated', className);

    }

    const observer = new IntersectionObserver(handleView, options);
    el.forEach(img => {
        observer.observe(img)
    });
}

