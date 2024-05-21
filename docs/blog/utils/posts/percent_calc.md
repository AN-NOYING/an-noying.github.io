---
authors: [annoying]
date: 2024-05-17
# readtime: 5
title: 백분율, 증감률 계산기
comments: true
---

# 백분율, 증감률 계산기

<!-- more -->

## 개요
백분율<sup>Percentage, Percent</sup>은 수학 개념 중 하나로, 정해진 수를 100의 비율로 나타내는 것을 말합니다. 백분율 표기 시 `%` 기호를 사용하며, 한국에선 종종 '프로'라고 발음하는 경우가 있습니다. 하지만 이 발음은 영어권 국가에서 알아듣지 못하니 '퍼센트'라고 발음하도록 합시다.

백분율 계산이 암산으로 되시는 분들은 필요없지만, 수치가 복잡해질 수록 암산은 더욱 어려워지니 계산기가 필요합니다. 아래의 계산 결과는 <ins>소수점 2번째 자리</ins>까지 표기합니다.


### 전체 값의 일정 비율

$$(X \times Y) \div 100$$

<input class="X1" type="number" placeholder="전체 값"> 의 <input class="Y1" type="number" placeholder="일정 비율"> %는 <input readonly class="R1" type="number" placeholder="산출 값"> 입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const X1 = document.querySelector('.X1');
        const Y1 = document.querySelector('.Y1');
        const R1 = document.querySelector('.R1');

        function update() {
            const x = parseFloat(X1.value);
            const y = parseFloat(Y1.value);

            if (!isNaN(x) && !isNaN(y)) {
                R1.value = ((x * y) / 100.0).toFixed(2);
            }
        }

        X1.addEventListener('input', update);
        Y1.addEventListener('input', update);
    });
</script>


### 전체 값 중 일정 값의 비율

$$(Y \div X) \times 100$$

<input class="X2" type="number" placeholder="전체 값"> 중 <input class="Y2" type="number" placeholder="일정 값"> 은 <input readonly class="R2" type="number" placeholder="산출 값"> %입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const X2 = document.querySelector('.X2');
        const Y2 = document.querySelector('.Y2');
        const R2 = document.querySelector('.R2');

        function update() {
            const x = parseFloat(X2.value);
            const y = parseFloat(Y2.value);

            if (!isNaN(x) && !isNaN(y)) {
                R2.value = ((y / x) * 100.0).toFixed(2);
            }
        }

        X2.addEventListener('input', update);
        Y2.addEventListener('input', update);
    });
</script>


### 일정 값에서 일정 비율 증가

$$X \times (1 + (Y \div 100.0))$$

<input class="X3" type="number" placeholder="일정 값"> 에서 <input class="Y3" type="number" placeholder="일정 비율"> % 증가하면 <input readonly class="R3" type="number" placeholder="산출 값"> 입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const X3 = document.querySelector('.X3');
        const Y3 = document.querySelector('.Y3');
        const R3 = document.querySelector('.R3');

        function update() {
            const x = parseFloat(X3.value);
            const y = parseFloat(Y3.value);

            if (!isNaN(x) && !isNaN(y)) {
                R3.value = (x * (1.0 + (y / 100.0))).toFixed(2);
            }
        }

        X3.addEventListener('input', update);
        Y3.addEventListener('input', update);
    });
</script>


### 일정 값에서 일정 비율 감소

$$X \times (1 - (Y \div 100.0))$$

<input class="X4" type="number" placeholder="일정 값"> 에서 <input class="Y4" type="number" placeholder="일정 비율"> % 감소하면 <input readonly class="R4" type="number" placeholder="산출 값"> 입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const X4 = document.querySelector('.X4');
        const Y4 = document.querySelector('.Y4');
        const R4 = document.querySelector('.R4');

        function update() {
            const x = parseFloat(X4.value);
            const y = parseFloat(Y4.value);

            if (!isNaN(x) && !isNaN(y)) {
                R4.value = (x * (1.0 - (y / 100.0))).toFixed(2);
            }
        }

        X4.addEventListener('input', update);
        Y4.addEventListener('input', update);
    });
</script>


### 증감률

$$((Y - X) \div X) \times 100.0$$

<input class="X5" type="number" placeholder="일정 값"> 에서 <input class="Y5" type="number" placeholder="일정 값"> 이(가) 되면 <input readonly class="R5" type="number" placeholder="산출 값"> <span class="result-text"></span>입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const X5 = document.querySelector('.X5');
        const Y5 = document.querySelector('.Y5');
        const R5 = document.querySelector('.R5');
        const RT = document.querySelector('.result-text');

        function update() {
            const x = parseFloat(X5.value);
            const y = parseFloat(Y5.value);

            if (!isNaN(x) && !isNaN(y)) {
                let val = (((y - x) / x) * 100.0).toFixed(2);
                R5.value = val;
                R5.textContent = `${val}%`;

                if (val > 0.0) {
                    RT.textContent = `% 증가`;
                    RT.style.color = 'red';
                } else {
                    RT.textContent = `% 감소`;
                    RT.style.color = 'blue';
                }
            }
        }

        X5.addEventListener('input', update);
        Y5.addEventListener('input', update);
    });
</script>


### X%가 Y라면 전체 값은? (Y가 X%라면 전체 값은?)

$$(Y \times 100.0) \div X$$

<input class="X6" type="number" placeholder="X"> %가 <input class="Y6" type="number" placeholder="Y"> (이)라면 전체 값은 <input readonly class="R6" type="number" placeholder="산출 값"> 입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const X6 = document.querySelector('.X6');
        const Y6 = document.querySelector('.Y6');
        const R6 = document.querySelector('.R6');

        function update() {
            const x = parseFloat(X6.value);
            const y = parseFloat(Y6.value);

            if (!isNaN(x) && !isNaN(y)) {
                R6.value = ((y * 100.0) / x).toFixed(2);
            }
        }

        X6.addEventListener('input', update);
        Y6.addEventListener('input', update);
    });
</script>