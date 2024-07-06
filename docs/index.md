# 어노잉의 블로그

<span id="app"></span>

<script defer src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        let app = document.getElementById('app');
        let typewriter = new Typewriter(app, {
            loop: true,
            delay: 100,
        });

        typewriter.pauseFor(2500).typeString('안녕하세요. 어노잉의 블로그입니다.').pauseFor(1000).deleteAll(50)
            .typeString("Hi, This is An-Noying's Blog.").pauseFor(1000).deleteAll(50)
            .start();
    });
</script>

!!! calendar-clock "D-DAY"
    === ":sunrise: 올해"
        <span class="dday-end"></span>

    === ":christmas_tree: 크리스마스"
        <span class="dday-christmas"></span>

    === ":birthday: 생일"
        <span class="dday-birthday"></span>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        function calcDays(startDate, endDate) {
            const remainDays = ((endDate - startDate) / (1000 * 60 * 60 * 24));
            return remainDays;
        }

        function getTotalDaysOfYear() {
            const today = new Date();
            const startOfYear = new Date(today.getFullYear(), 0, 1); // 올해의 1월 1일
            const nextYear = new Date(today.getFullYear() + 1, 0, 1); // 다음 해의 1월 1일

            const totalDaysOfYear = ((nextYear - startOfYear) / (1000 * 60 * 60 * 24));
            return totalDaysOfYear;
        }

        const today = new Date();
        const birthday = new Date(today.getFullYear(), 5, 2);

        const result1 = calcDays(today, new Date(today.getFullYear() + 1, 0, 1)).toFixed(2);
        const progressPercent = (100.0 - (((result1 - 1) / getTotalDaysOfYear()) * 100)).toFixed(2);
        const output1 = `올해가 지나가기까지 ${result1}일 남았으며, ${progressPercent}%만큼 진행되었습니다.`;
        document.querySelector('.dday-end').textContent = output1;

        const result2 = calcDays(today, new Date(today.getFullYear(), 11, 25)).toFixed(2);
        const output2 = `올해의 크리스마스까지 ${result2}일 남았습니다.`;
        document.querySelector('.dday-christmas').textContent = output2;

        // 생일
        if (today > birthday) {
            birthday.setFullYear(today.getFullYear() + 1);
        }
        const result3 = calcDays(today, birthday).toFixed(2);
        const output3 = `주인장의 생일까지 ${result3}일 남았습니다.`;
        document.querySelector('.dday-birthday').textContent = output3;
});
</script>

??? license "License"
    === "블로그"
        본 블로그는 [squidfunk](https://github.com/squidfunk "squidfunk")의 [MkDocs-Material](https://squidfunk.github.io/mkdocs-material/ "MkDocs Material") 프로젝트를 사용하여 운영 중에 있습니다.

    === "글꼴"
        본문은 [Spoqa Han Sans NEO](https://spoqa.github.io/spoqa-han-sans/ "스포카 한 산스 네오") 글꼴을 사용 중이며, 소스 코드는 [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono "Roboto Mono")를 사용하고 있습니다. ~~폰트병 오짐~~

    === "이미지"
        게시글에 포함되는 이미지의 경우 [ImgBB](https://ko.imgbb.com/ "ImgBB")라는 무료 이미지 호스팅을 이용하고 있습니다.

    === "파일"
        아직 파일 공유를 사용 중이지 않지만 사용한다면 [GoFile](https://gofile.io/welcome "GoFile")이나 [Dropbox](https://www.dropbox.com/ko/ "Dropbox")를 사용합니다.

        CDN은 [jsDelivr](https://www.jsdelivr.com/ "jsDelivr")을 사용 중에 있습니다.

    === "플러그인"    
        - [jhammann - sakura](https://github.com/jhammann/sakura "Sakura")

??? Abstract "History"
    ??? calendar-clock "2024"
        === "May"
            - 2024/05/29
                - [개발](blog/development/index.md "개발") 게시판 추가
                - 인덱스 페이지의 내용 수정
        
        === "June"
            - 2024/06/01                
                - [후기](blog/review/index.md "후기") 게시판 및 그외 카테고리 추가
                - 스크롤 시 헤더가 따라오지 않던 오류 수정
                - 본문에 사용되는 일부 스타일 수정
            - 2024/06/12
                - [통계 및 분석](blog/stat_anal/index.md "통계 및 분석") 게시판 추가
                - 프리텐다드 글꼴에서 세종학당체 글꼴로 변경
                - [프로그래밍](blog/programming/index.md "프로그래밍") 게시판 추가
            - 2024/06/13
                - [markdown-exec](https://pawamoy.github.io/markdown-exec/ "markdown-exec") 플러그인 추가
                - [vanilla-lazyload](https://github.com/verlok/vanilla-lazyload "vanilla-lazyload") 추가
            - 2024/06/26
                - [넥슨 Lv.2 고딕](https://brand.nexon.com/ko/ci-brand-guidelines/typeface#section-lv2-gothic "넥슨Lv.2고딕") 글꼴로 변경
                - 유튜브 채널 주소 수정
            - 2024/06/28
                - [윈도 한글](https://windos.quiple.dev/ "윈도 한글") 글꼴로 변경
                - 실시간 구글 트렌드 추가
            - 2024/06/29
                - CSS 수정
            - 2024/06/30
                - CSS 수정
                - 메인 문서 수정
                - D-DAY 추가

        === "July"
            - 2024/07/01
                - 통계 및 분석 게시판에 카테고리 추가
                - 본문 및 코드 글꼴 변경
            - 2024/07/04
                - TWEMOJI로 변경(MSEMOJI 제거)
            - 2024/07/06
                - [Spoqa Han Sans NEO](https://spoqa.github.io/spoqa-han-sans/ "스포카 한 산스 네오")로 변경
                - 실시간 트렌드 제거
                - 신규 Admonition Icon 추가
                - 메인 화면 개편
            - 2024/07/07
                - [일상](blog/daily/index.md "일상") 게시판 추가