window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const zoomWrapper = document.querySelector('.zoom-wrapper');
    
    const scrollPosition = window.pageYOffset;
    const maxScroll = heroSection.offsetHeight - window.innerHeight;
    
    let scrollPercent = scrollPosition / maxScroll;
    if (scrollPercent > 1) scrollPercent = 1;

    const zoomMultiplier = 5; 
    
    const currentScale = 1 + (scrollPercent * zoomMultiplier);
    zoomWrapper.style.transform = `scale(${currentScale})`;
});
