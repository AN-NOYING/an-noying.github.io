document.addEventListener('DOMContentLoaded', () => {
    // LazyLoading
    document.querySelectorAll('img').forEach(img=>img.loading='lazy');
    
    // MARK
    const marks = document.querySelectorAll('mark.half-line');
    const iObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: .1 });
    marks.forEach(mark => iObserver.observe(mark));
});