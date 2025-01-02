document.addEventListener('DOMContentLoaded', () => {
    // 스타일
    const style = document.createElement('style');
    style.innerHTML = `
        #DRAG-SEARCH{position:fixed;z-index:3;padding:.5rem 1rem;display:none;border-radius:1rem;background-color:var(--md-default-bg-color);box-shadow:var(--md-shadow-z1);transition-property:top,right,bottom,left;transition-duration:.25s}
        #DRAG-SEARCH ul{list-style:none;padding:0;margin:0;display:flex;align-items:center;gap:1rem}
        #DRAG-SEARCH li{display:flex;align-items:center}
        #DRAG-SEARCH button{outline:none;border:none;padding:0;background-color:transparent;cursor:pointer}
        #DRAG-SEARCH img{display:block;width:16px;height:16px}
    `;
    document.head.appendChild(style);

    // HTML
    const dragSearch = document.createElement('div');
    dragSearch.id = 'DRAG-SEARCH';
    dragSearch.innerHTML = `
        <ul>
            <li>
                <button type="button" title"GOOGLE" aria-label="SEARCH GOOGLE" onclick="window.open('//google.com/search?q=' + window.getSelection().toString().trim(),'_blank')">
                    <img src="/assets/google.avif" alt="GOOGLE">
                </button>
            </li>
            <li>
                <button type="button" title"YOUTUBE" aria-label="SEARCH YOUTUBE" onclick="window.open('//youtube.com/results?search_query=' + window.getSelection().toString().trim(),'_blank')">
                    <img src="/assets/youtube.avif" alt="YOUTUBE">
                </button>
            </li>
            <li>
                <button type="button" title"NAVER" aria-label="SEARCH NAVER" onclick="window.open('//search.naver.com/search.naver?query=' + window.getSelection().toString().trim(),'_blank')">
                    <img src="/assets/naver.avif" alt="NAVER">
                </button>
            </li>
        </ul>
    `;
    document.body.appendChild(dragSearch);

    // 텍스트 드래그(선택)
    document.addEventListener('selectionchange', () => {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();
        if (selectedText) {
            // 먼저 보여야 위치 계산 가능
            dragSearch.style.display = 'block';

            const selectionRect = selection.getRangeAt(0).getBoundingClientRect();
            const dragSearchWidth = dragSearch.getBoundingClientRect().width;
            const dragSearchHeight = dragSearch.getBoundingClientRect().height;

            const centerX = selectionRect.left + selectionRect.width / 2 - dragSearchWidth / 2;
            dragSearch.style.left = `${Math.max(0, Math.min(centerX, window.innerWidth - dragSearchWidth))}px`; 

            const posY = selectionRect.bottom + (dragSearchHeight + 16);
            dragSearch.style.bottom = `${window.innerHeight - posY}px`;

            return;
        }

        dragSearch.style.display = 'none';
    });
});