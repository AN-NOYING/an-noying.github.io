---
authors: [annoying]
date: 2024-07-29
title: 사람 나이 계산기
comments: true
---

# 사람 나이 계산기

<!-- more -->

## 개요

2023년 06월 28일부터 한국식 나이(세는 나이)에서 만 나이로 통일되었습니다. 예전부터 만 나이로 통일화하자는 말이 많았는데, 결국 통과되었습니다.

### 세는 나이

세는 나이는 한국식 나이라고 부르는데요... 대한민국과 일부 국가를 제외하면 거의 사용하지 않는 나이 계산 방식이기 때문입니다.

세는 나이는 태어난 해의 나이를 1살로 취급하여 그 다음 해의 01월 01일이 되면 +1살을 합니다. 이 계산 방식은 국제 표준이 아니고... 나이가 더 많아보인다는 단점(?)이 있습니다.

생년월일이 <input class="AGE1" type="text" placeholder="YYYY-MM-DD">이라면, 세는 나이로 <input class="AGE_RESULT1" type="number" readonly>살입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        function calcAge1(birthday) {
            let current_year = new Date().getFullYear();
            let birthday_year = new Date(birthday).getFullYear();

            return (current_year - birthday_year) + 1;
        }

        const X1 = document.querySelector('.AGE1');
        const R1 = document.querySelector('.AGE_RESULT1');

        function update() {
            if (!isNaN(X1.value)) {
                R1.value = calcAge1(X1.value);
            }
        }

        X1.addEventListener('input', update);
    });
</script>

### 만 나이

만 나이는 태어날 때 0살로 취급하여 매년 자신의 생일이 될 때마다 +1살하는 방식입니다. 즉, 생일이 될 때마다 +1살되는 거죠. 가장 정확한 나이 계산 기준이라 할 수 있습니다.

만 나이는 대한민국에서 윤석열 나이라 부르기도 합니다. 윤석열 대통령이 추진한 법안 중 하나라서 그렇습니다.

현재 대한민국 민법상 표준 나이는 **만 나이**입니다. 법안이 통과되기 전에도 사실 사용되고 있었고, [연 나이](#_5)를 기준으로 하기도 했습니다.

생년월일이 <input class="AGE2" type="text" placeholder="YYYY-MM-DD">이라면, 만 나이로 <input class="AGE_RESULT2" type="number" readonly>살입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        function calcAge2(birthday) {
            let today = new Date();
            let birthday2 = new Date(birthday);

            let age = today.getFullYear() - birthday2.getFullYear();

            let b1 = today.getMonth() < birthday2.getMonth();
            let b2 = (today.getMonth() == birthday2.getMonth() && today.getDate() < birthday2.getDate());
            if (b1 || b2) {
                age -= 1;
            }

            return age;
        }

        const X1 = document.querySelector('.AGE2');
        const R1 = document.querySelector('.AGE_RESULT2');

        function update() {
            if (!isNaN(X1.value)) {
                R1.value = calcAge2(X1.value);
            }
        }

        X1.addEventListener('input', update);
    });
</script>

!!! info "같은 반인데 나이가 달라요!"
    만 나이를 기준으로 하면 같은 학급이여도 각자의 생일이 다르기 때문에 나이 차이가 날 수 있습니다. 1월 생일인 친구와 2월 생일인 친구가 있다면 1월 생일인 친구의 나이가 +1살 더 많게된다는 거죠.

    뭐... 보통은 같은 학년 / 기수 / 년도를 가지면 크게 신경쓰진 않습니다.

### 연 나이

연 나이는 태어날 때 0살로 취급하여 매년 01월 01일이 되면 +1살하는 방식입니다. 즉, 현재년도에서 자신의 태어난 년도를 뺀 숫자가 나이가 되는 방식입니다.

보통 병역법과 청소년보호법에서 연 나이를 기준으로 판단하고 있습니다.

생년월일이 <input class="AGE3" type="text" placeholder="YYYY-MM-DD">이라면, 연 나이로 <input class="AGE_RESULT3" type="number" readonly>살입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        function calcAge3(birthday) {
            let today = new Date();
            let birthday2 = new Date(birthday);

            let age = today.getFullYear() - birthday2.getFullYear();

            return age;
        }

        const X1 = document.querySelector('.AGE3');
        const R1 = document.querySelector('.AGE_RESULT3');

        function update() {
            if (!isNaN(X1.value)) {
                R1.value = calcAge3(X1.value);
            }
        }

        X1.addEventListener('input', update);
    });
</script>