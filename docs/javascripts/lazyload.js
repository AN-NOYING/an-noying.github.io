document.addEventListener('DOMContentLoaded', () => {
    // 투명 1픽셀 이미지 (Base64)
    const transparentBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/ihWj4QAAAAASUVORK5CYII=';

    // 초기화
    const initElement = el => {
        if (el?.src) {
            el.removeAttribute('srcset');
            el.setAttribute('data-src', el.src);
            el.setAttribute('data-loaded', 'false');
            el.src = transparentBase64;
        }
    }

    // 불러오기
    const loadElement = el => {
        if (el?.hasAttribute('data-src') && el.getAttribute('data-loaded') === 'false') {
            el.src = el.getAttribute('data-src');
            el.onload = () => {
                el.removeAttribute('data-src');
                el.setAttribute('data-loaded', 'true');
            }
            el.onerror = () => {
                el.src = transparentBase64;
            }
        }
    }

    // IntersectionObserver
    const iObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .25 });

    // 초기 로드 처리
    document.querySelectorAll('iframe:not([data-loaded]), img:not([data-loaded])').forEach(el => {
        initElement(el);
        iObserver.observe(el);
    });

    // 동적으로 추가되는 요소 처리
    const mObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.tagName === 'IMG' || node.tagName === 'IFRAME') {
                        initElement(node);
                        iObserver.observe(node);
                    } else {
                        node.querySelectorAll('iframe:not([data-loaded]), img:not([data-loaded])').forEach(el => {
                            initElement(el);
                            iObserver.observe(el);
                        });
                    }
                }
            });
        });
    });
    mObserver.observe(document.body, { childList: true, subtree: true });
});