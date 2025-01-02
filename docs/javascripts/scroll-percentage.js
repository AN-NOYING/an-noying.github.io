document.addEventListener('DOMContentLoaded', () => {
    // 스타일 추가
    const style = document.createElement('style');
    style.innerHTML = `
        #SCROLL-PERCENTAGE{position:fixed;z-index:3;top:50%;right:1rem;transform:translateY(-50%)}
    `;
    document.head.appendChild(style);
    
    // SVG
    const scrollPercentage = document.createElement('div');
    scrollPercentage.id = 'SCROLL-PERCENTAGE';
    scrollPercentage.innerHTML = `
        <svg width="48" height="48">
            <circle cx="24" cy="24" r="20" style="fill:none;stroke-width:3px;stroke:lightgray;"></circle>
            <circle cx="24" cy="24" r="20" style="fill:none;stroke-width:3px;stroke:var(--md-primary-fg-color);stroke-dasharray:125.6;stroke-dashoffset:125.6;transition:stroke-dashoffset .25s"></circle>
            <text x="24" y="28" text-anchor="middle" font-size="12px" fill="var(--md-default-fg-color)">0%</text>
        </svg>
    `;
    document.body.appendChild(scrollPercentage);

    // 스크롤 이벤트
    const getScrollPercentage = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        return scrollHeight === 0 ? 0 : Math.min((scrollTop / scrollHeight) * 100, 100);
    }

    const circle = scrollPercentage.querySelector('circle:nth-of-type(2)');
    const updateProgress = () => {
        const percentage = getScrollPercentage();
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percentage / 100) * circumference;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;

        const text = scrollPercentage.querySelector('text');
        (text) && (text.textContent = `${Math.ceil(percentage)}%`);
    }

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
});