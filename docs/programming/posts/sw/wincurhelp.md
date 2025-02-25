---
title: 윈도우 마우스 커서 구성표 자동 생성기
authors:
  - annoying
categories:
    - 소프트웨어
date: 
    created: 2025-02-25T00:00:00
    updated: 2025-02-26T00:00:00
readtime: 5
tags:
  - 마우스 커서
  - 자동
  - 구성표
  - 스키마
comments: true
---

# 윈도우 마우스 커서 구성표 자동 생성기

<!-- more -->

## 개요
<figure markdown="span">
    ![IMAGE-1](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXlnN2oyN2p2cW4weW81ZWdzdGJ6b2YxOWN4YmN3c3BmcTNycTU2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mcsPU3SkKrYDdW3aAU/giphy.gif)
    <figcaption>컴퓨터 중</figcaption>
</figure>

평범하지 않은 날(?) 컴퓨터를 하던 중에 매우 거슬리는 사항을 하나 발견합니다.

<figure markdown="span">
    ![IMAGE-2](https://www.jjalbang.today/jjv1Kq.png)
    <figcaption>으악!</figcaption>
</figure>

그거슨 바로 윈도우즈의 기본 마우스 커서가 매우 못생겼다는 겁니다.

몇 년... 아니... 10년 이상을 윈도우즈의 기본 마우스 커서를 사용하고 있었는데 이상하게 유독 거슬립니다. 그래서 바꾸기로 했습니다.

<div class="grid" markdown>

![IMAGE-3](https://i.ibb.co/Lh8mR5vH/1.webp)

![IMAGE-4](https://www.memeatlas.com/images/pepes/pepe-fat-head-mouth-open.jpg)

</div>

마우스 커서를 바꾸는 일은 생각보다 귀찮습니다. 마우스 커서 파일(.cur 또는 .ani)을 구한 후 찾아보기로 하나씩 불러와 적용해야 합니다.

게다가 기본 구성표(스키마)는 백업용으로 둬야하기 때문에 다른 이름으로 저장 후 작업해야 합니다.

그래서 구성표를 생성하는 프로그램을 만들기로 했습니다.

## 다운로드
[WinCursorHelper Download](https://github.com/AN-NOYING/WinCursorHelper/releases/tag/Download "WinCursorHelper Download"){ .md-button }

마우스 커서를 손쉽게 적용해주는 프로그램이 따로 있는 지 잘 모르겠습니다. 그래서 직접 C# 언어를 통해 구성표만이라도 쉽게 생성해주는 프로그램을 만들었습니다.

## 사용법

<div class="annotate" markdown>

1. WinCursorHelper.exe에 <mark class="half-line">17개의 마우스 커서 파일</mark>을(1) D&D<sup>Drag &amp; Drop</sup>한다.
2. 마우스 설정 창으로 이동한다.
3. 포인터 탭으로 이동한다.
4. 생성된 구성표를 선택한 후 적용 버튼을 클릭한다.

</div>

1.   윈도우즈에서 기본적으로 17개의 마우스 커서를 사용 중이기 때문.

!!! info "파일은 아래와 같이"
    ![IMAGE-4](https://i.ibb.co/gFfzWgmB/3.webp)

    파일의 이름은 무조건 위 사진과 같이 되어있어야 합니다.

## 결론

<figure markdown="span">
    ![IMAGE-5](https://i.ibb.co/tpr8hbvM/2.webp)
    <figcaption>흡족</figcaption>
</figure>

마우스 커서 파일(.cur 또는 .ani)은 `%LOCALAPPDATA%`에 cursor 폴더를 새롭게 생성한 후 해당 폴더에서 관리됩니다.

다운로드한 마우스 커서 파일을 삭제해도 아무 문제 없습니다.