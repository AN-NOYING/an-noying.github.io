document.addEventListener("DOMContentLoaded", () => {
    let transparentBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR42mP8/wIAAgEAQeX8GQAAAABJRU5ErkJggg==";

    let initImage = (img) => {
        if (img?.src) {
            img.removeAttribute("srcset");
            img.setAttribute("data-src", img.src);
            img.setAttribute("data-loaded", "false");
            img.src = transparentBase64;
        }
    };

    let loadImage = (img) => {
        if (img?.hasAttribute("data-src") && img.getAttribute("data-loaded") !== "true") {
            img.src = img.getAttribute("data-src");
            img.onload = () => {
                img.removeAttribute("data-src");
                img.setAttribute("data-loaded", "true");
            };
            img.onerror = () => {
                img.src = transparentBase64;
            };
        }
    };

    // IntersectionObserver로 이미지 로드
    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.25 }
    );

    // 모든 이미지를 Observer에 등록
    document.querySelectorAll("img").forEach(initImage);
    document.querySelectorAll("img").forEach(img => observer.observe(img));
});