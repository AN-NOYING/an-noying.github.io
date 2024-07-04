---
authors: [annoying]
date: 2024-06-12
title: 최근 LH 청년매입임대 서울특별시 경쟁률 추이
tags:
    - LH
    - 청년매입임대
    - 경쟁률
comments: true
categories:
    - Analysis
---

# 최근 LH 청년매입임대 서울특별시 경쟁률 추이

2021년부터 2024년 현재까지 LH 청년매입임대 서울특별시 경쟁률 추이를 살펴봅시다.

<!-- more -->

!!! danger
    잘못된 내용이나 오타가 보이면 댓글 등으로 알려주세요.


## 주의사항

!!! info
    - 본 게시글에 사용된 데이터는 [LH청약플러스](https://apple.lh.or.kh/ "LH청약플러스")의 <ins>(정정공고) 청년 매입임대주택 예비입주자 모집공고</ins>를 기반으로 하고 있습니다.
    - 지원자의 나이, 성별, 거주지, 순위 등은 별도로 공개된 정보가 없기 때문에 포함되어 있지 않습니다.
    - 2024년 데이터의 경우 현재 게시글 작성일 기준(2024/06/12) 1차만 진행되었기 때문에 일부 누락되거나 포함되는 사항이 있습니다.
    - 변화율과 추세 확인을 위해 차트에 로그 스케일을 적용하고 있으며, 원하시는 데이터 라벨을 선택하여 단일로 볼 수도 있습니다.

!!! warning
    본 게시글의 통계 내용은 너무 맹신하지 마시기 바랍니다.


## 2021년 ~ 2023년
### 공급호수 추이
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART1" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART1');
        if (ctx) {
            new Chart(ctx, {
                data: {
                    labels: [ '1차', '2차', '3차', '4차' ],
                    datasets: [{
                        type: 'line',
                        label: '2021년 공급호수',
                        data: [ 298, 204, 276, 90 ],
                        tension: 0.1
                    }, {
                        type: 'line',
                        label: '2022년 공급호수',
                        data: [ 260, 263, 372, 47 ],
                        tension: 0.1
                    }, {
                        type: 'line',
                        label: '2023년 공급호수',
                        data: [ 432, 113, 190, 361 ],
                        tension: 0.1
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'logarithmic',
                        }
                    }
                }
            });
        }
    });
</script>

#### 합계 공급호수
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART2" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART2');
        if (ctx) {
            new Chart(ctx, {
                data: {
                    labels: [ '2021', '2022', '2023' ],
                    datasets: [{
                        type: 'line',
                        label: '공급호수',
                        data: [ 298 + 204 +276 + 90, 260 + 263 + 372 + 47, 432 + 113 + 190 + 361 ],
                        tension: 0.1
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'logarithmic',
                        }
                    }
                }
            });
        }
    });
</script>

공급호수는 매년 증가 중인 걸로 보이는데요, LH <ins>사정에 따라 물량을 조절</ins>하는 경우가 있기 때문에 반드시 전년도에 비해 더 많이 공급한다고 보장할 순 없습니다. 데이터가 더 쌓여야 할 것 같습니다. ~~(이전 데이터는 귀찮아서 안 가져온게 아님. 아무튼 아님.)~~  

### 신청건수 추이
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART3" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART3');
        if (ctx) {
            new Chart(ctx, {
                data: {
                    labels: [ '1차', '2차', '3차', '4차' ],
                    datasets: [{
                        type: 'line',
                        label: '2021년 신청건수',
                        data: [ 17943, 14472, 16415, 12552 ],
                        tension: 0.1
                    }, {
                        type: 'line',
                        label: '2022년 신청건수',
                        data: [ 18563, 26910, 32860, 20003 ],
                        tension: 0.1
                    }, {
                        type: 'line',
                        label: '2023년 신청건수',
                        data: [ 39264, 27445, 29839, 45454 ],
                        tension: 0.1
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'logarithmic',
                        }
                    }
                }
            });
        }
    });
</script>

각 차수별 신청건수 추이는 위 차트와 같습니다.

#### 합계 신청건수
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART4" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART4');
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [ '2021년', '2022년', '2023년' ],
                    datasets: [{
                        label: '합계 신청건수',
                        data: [ 17943 + 14472 + 16415 + 12552, 18563 + 26910 + 32860 + 20003, 39264 + 27445 + 29839 + 45454 ],
                        tension: 0.1
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'logarithmic',
                        }
                    }
                }
            });
        }
    });
</script>

차수별로 보았을 때랑은 다르게 합계로 보았을 때 매년 증가 추세에 있음을 확인할 수 있습니다. 2023년은 전년대비 약 44.4% 증가하였습니다.

이러한 증가 추세는 LH가 공급하는 주택의 메리트와 **전세사기**의 영향이 큰 것으로 보입니다. 2022년 말 전세 보증금을 돌려 받지 못한 전세사기 범죄가 일어나면서 상대적으로 매우 안전하고 저렴하게 주택을 공급하는 LH의 인기가 높아지며 영향 받은 걸로 추측됩니다.

### 경쟁률 추이
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART5" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART5');
        if (ctx) {
            new Chart(ctx, {
                data: {
                    labels: [ '1차', '2차', '3차', '4차' ],
                    datasets: [{
                        type: 'line',
                        label: '2021년 신청건수',
                        data: [ 17943 / 298, 14472 / 204, 16415 / 276, 12552 / 90 ],
                        tension: 0.1
                    }, {
                        type: 'line',
                        label: '2022년 신청건수',
                        data: [ 18563 / 260, 26910 / 263, 32860 / 372, 20003 / 47    ],
                        tension: 0.1
                    }, {
                        type: 'line',
                        label: '2023년 신청건수',
                        data: [ 39264 / 432, 27445 / 113, 29839 / 190, 45454 / 361 ],
                        tension: 0.1
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'logarithmic',
                        }
                    }
                }
            });
        }
    });
</script>

각 차수별 경쟁률 추이는 위 차트와 같습니다. 경쟁률은 신청건수 ÷ 공급호수 기준으로, 최종 경쟁률이라 할 수 있겠네요.

2022년 4차의 경우 공급호수에 비해 신청건수가 많아 경쟁률이 높게 산출되었습니다.

2023년의 평균 경쟁률은 154.18로, 2차와 3차 때 경쟁률은 평균 경쟁률보다 높음을 확인할 수 있습니다. 이전의 경우 평균 경쟁률보다 낮아서 할만했다면(?) 2023년 이후로는 경쟁이 더 치열해질 수 있음을 내포하고 있습니다.

### 상관 분석
상관 분석은 두 변수 간의 어떠한 선형적 관계를 갖고 있는 지를 분석하는 방법으로, 주택 공급이 많을 수록 신청 건수도 많아질까?와 같이 서로 관련이 있는 지를 분석합니다.

보통 피어슨 상관 계수의 값을 산출하여 그 관계를 확인하는데요, -1부터 1까지의 값을 가지는데 -1은 음의 상관 관계, 0은 상관 관계 없음, 1은 양의 상관 관계를 의미합니다.

양의 상관 관계는 좌측 하단에서 우측 상단으로 이어지는 형태를 띄는데요, 한 변수가 증가함에 따라 다른 변수도 증가합니다. 음의 상관 관계는 이와 반대입니다.

#### 공급호수와 신청건수
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART6" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART6');
        if (ctx) {
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: '공급호수와 신청건수',
                        data: [{
                            x: 298,
                            y: 17943
                        }, {
                            x: 204,
                            y: 14472
                        }, {
                            x: 276,
                            y: 16415
                        }, {
                            x: 90,
                            y: 12552
                        }, {
                            x: 260,
                            y: 18563
                        }, {
                            x: 263,
                            y: 26910
                        }, {
                            x: 372,
                            y: 32860
                        }, {
                            x: 47,
                            y: 20003
                        }, {
                            x: 432,
                            y: 39264
                        }, {
                            x: 113,
                            y: 27445
                        }, {
                            x: 190,
                            y: 29839
                        }, {
                            x: 361,
                            y: 45454
                        }]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                }
            });
        }
    });
</script>

보통 상관 관계를 표현하거나 분석할 때 산점도<sup>Scatter</sup> 차트를 사용합니다. 데이터를 점으로 표현하는 것이죠.

위 산점도를 보시면 좌측 하단에서 우측 상단으로 약간의 곡선을 그리는 것처럼 보이기 때문에 양의 상관 관계가 있다고 해석할 수 있습니다. 반드시는 아니지만 공급호수가 늘어나면 신청건수도 늘어난다고 볼 수 있다는 것이죠.

보다 객관적으로 확인하기 위해 피어슨의 상관 계수를 많이 사용하는데요, 위 산점도에 사용된 변수의 상관 계수를 산출하니 0.6028로 나타났습니다. 1에 가까운 수치이고 보통 0.6 이상이면 높은 상관 관계가 있다고 봅니다. 다만, 단순히 두 변수 간 관계의 강도를 나타내기 때문에 인과관계가 있다고 확정할 순 없습니다.

일반적으로 주택의 공급이 증가하면 선택의 폭이 넓어지기 때문에 더 많은 사람들이 신청할 수 있습니다. 하지만, 주택 매물과 지리적 특성 등 다양한 변수 요인이 존재하기 때문에 공급 호수와는 상관없이 신청 건수가 늘어나거나 줄어들 수 있습니다. 상관 계수의 값이 높다고 무조건 확정지을 순 없습니다.

<figure markdown="span">
    ![LARATICON](https://i.ibb.co/qDrzyCM/156.png)
    <figcaption>그냥 그렇구나 해야함</figcaption>
</figure>

#### 공급호수와 경쟁률
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART7" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART7');
        if (ctx) {
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: '공급호수와 경쟁률',
                        data: [{
                            x: 298,
                            y: 60.211
                        }, {
                            x: 204,
                            y: 70.941
                        }, {
                            x: 276,
                            y: 59.475
                        }, {
                            x: 90,
                            y: 139.467
                        }, {
                            x: 260,
                            y: 71.396
                        }, {
                            x: 263,
                            y: 102.319
                        }, {
                            x: 372,
                            y: 88.333
                        }, {
                            x: 47,
                            y: 425.596
                        }, {
                            x: 432,
                            y: 90.889
                        }, {
                            x: 113,
                            y: 242.876
                        }, {
                            x: 190,
                            y: 157.047
                        }, {
                            x: 361,
                            y: 125.911
                        }]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                }
            });
        }
    });
</script>

위 산점도는 좌측 상단에서 우측 하단으로 이어지는 것처럼 보이므로 음의 상관 관계가 있다고 해석할 수 있습니다. 음의 상관 관계는 한 변수가 증가하면 다른 변수는 감소함을 의미합니다.

공급호수가 증가할 수록 경쟁률은 감소한다는 의미가 되겠죠? 피어슨 상관 계수를 산출해봅시다. -0.6881이 산출되었는데요, -1에 가까운 수치이고 [공급호수와 신청건수](#_8 "공급호수와 신청건수")처럼 높은 상관 관계가 있다고 볼 수 있습니다.

#### 신청건수와 경쟁률
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART8" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART8');
        if (ctx) {
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: '신청건수와 경쟁률',
                        data: [{
                            x: 17943,
                            y: 60.211
                        }, {
                            x: 14472,
                            y: 70.941
                        }, {
                            x: 16415,
                            y: 59.475
                        }, {
                            x: 12552,
                            y: 139.467
                        }, {
                            x: 18563,
                            y: 71.396
                        }, {
                            x: 26910,
                            y: 102.319
                        }, {
                            x: 32860,
                            y: 88.333
                        }, {
                            x: 20003,
                            y: 425.596
                        }, {
                            x: 39264,
                            y: 90.889
                        }, {
                            x: 27445,
                            y: 242.876
                        }, {
                            x: 29839,
                            y: 157.047
                        }, {
                            x: 45454,
                            y: 125.911
                        }]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                }
            });
        }
    });
</script>

[공급호수와 신청건수](#_8 "공급호수와 신청건수")는 양의 상관 관계의 패턴이 보였고 [공급호수와 경쟁률](#_9 "공급호수와 경쟁률")은 음의 상관 관계의 패턴이 보였습니다. 하지만 위 산점도에선 아무런 패턴을 발견할 수 없어 보입니다.

상관 계수도 -0.0104로 0에 매우 가깝기 때문에 통계적으로 유의미한 정보를 도출하기 힘들어보입니다.



## 2024년
### 1차
#### 자치구별 공급호수
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART9" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART9');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [ '종로구', '중구', '용산구', '동대문구', '중랑구', '성북구', '도봉구', '은평구', '서대문구', '금천구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구', '강북구', '강서구', '영등포구', '마포구' ],
                    datasets: [{
                        label: '공급호수',
                        data: [ 38, 6, 2, 15, 6, 5, 1, 3, 6, 5, 4, 1, 18, 3, 3, 34, 5, 7, 6, 2 ]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                }
            });
        }
    });
</script>

평균 공급호수는 9이며, 종로와 강동에서 평균을 한참 넘어서는 공급호수를 보이고 있습니다.

전년도 1차 청년매입임대의 평균 공급호수가 22인걸 감안하면 2024년 1차 청년매입임대의 공급호수는 나락 그 자체입니다. 굳이 평균 공급호수가 아닌 총 공급호수만 봐도 엄청 부족합니다.

#### 자치구별 신청건수
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART10" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART10');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [ '종로구', '중구', '용산구', '동대문구', '중랑구', '성북구', '도봉구', '은평구', '서대문구', '금천구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구', '강북구', '강서구', '영등포구', '마포구' ],
                    datasets: [{
                        label: '신청건수',
                        data: [ 10406, 1534, 844, 2273, 1486, 654, 159, 995, 2281, 779, 1253, 225, 3963, 1469, 1188, 6731, 880, 1869, 3109, 1167 ]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                }
            });
        }
    });
</script>

신청건수는 종로구가 가장 많습니다. 그 이유 중 하나는 프라움스테이라서 그렇습니다.

프라움스테이는 좋은 방 구조, 신축, 접근성이 좋은 지리적 특성을 갖고 있어 2024년 1차 매물 중 가장 좋은 주택에 속합니다. 게다가 공급호수도 많아서 경쟁률이 그나마 낮게(?) 되기 때문에 많이 신청을 한 것 같습니다.

종로구 프라움스테이의 경우 [1순위들만의 싸움](https://namu.wiki/w/%EA%B7%B8%EB%93%A4%EB%A7%8C%EC%9D%98%20%EB%A6%AC%EA%B7%B8(%EC%86%8D%EC%96%B4) "그들만의 싸움")이라 1순위 중 어지간히 높은 가점이 아닌 이상 명함도 못내밉니다.

말 많은 가점 제도의 ~~좆~~{ class="blur" }같은 변경으로 인해 최소 컷은 8점 이상으로 예상 중입니다.

#### 자치구별 경쟁률
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART11" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART11');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [ '종로구', '중구', '용산구', '동대문구', '중랑구', '성북구', '도봉구', '은평구', '서대문구', '금천구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구', '강북구', '강서구', '영등포구', '마포구' ],
                    datasets: [{
                        label: '경쟁률',
                        data: [ 10406 / 38, 1534 / 6, 844 / 2, 2273 / 15, 1486 / 6, 654 / 5, 159 / 1, 995 / 3, 2281 / 6, 779 / 5, 1253 / 4, 225 / 1, 3963 / 18, 1469 / 3, 1188 / 3, 6731 / 34, 880 / 5, 1869 / 7, 3109 / 6, 1167 / 2 ]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                }
            });
        }
    });
</script>

전체 경쟁률은 254.5이고 평균 경쟁률은 294.74입니다. 평균 경쟁률이 전체 경쟁률보다 약 40 이상 높게 나타납니다. 이는 자치구 중에서 경쟁이 매우 치열한 곳이 있다는 것을 의미합니다. 극단적인 값의 영향을 받아 이렇게 나타나기도 하는데... 뭐 그만큼 경쟁이 치열하다는 것을 의미하긴 합니다.

### 2차
#### 자치구별 공급호수
<div class="lh-chart-wrapper">
    <canvas id="LH-CHART12" height="400"></canvas>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const ctx = document.getElementById('LH-CHART12');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [ '종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '노원구', '은평구', '서대문구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '송파구', '강동구' ],
                    datasets: [{
                        label: '공급호수',
                        data: [ 1 + 7 + 43 + 45, 1 + 1, 4 + 2, 1 + 1, 1 + 1 + 1 + 24, 1 + 1 + 5, 1 + 5 + 1 + 1 + 1, 2 + 1 + 2, 1 + 1 + 4, 1 + 1 + 1, 2 + 2, 1 + 1 + 2 + 1, 4 + 1, 1 + 1, 1 + 3 + 1, 3 + 1 + 1 + 2 + 2 + 11, 2, 1 + 2, 1 + 1 + 1 + 3, 2 + 1, 1 + 1 + 1 + 1 + 2 + 1 + 1, 1 + 1 + 1 + 1 + 2 + 1 + 1 + 8 ]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                }
            });
        }
    });
</script>

평균 공급호수는 11.52이며, 종로와 광진, 영등포에서 평균을 넘어서는 공급호수를 보이고 있습니다. 종로는 1차 때처럼 물량이 또 많네요.

2차 공급호수는 1차 공급호수에 비해 많기는 한데요... 이정도 물량으로 청년 주거 문제를 해결할 수 있을 지 참 궁금하네요...