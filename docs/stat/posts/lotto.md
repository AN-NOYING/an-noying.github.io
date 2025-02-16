---
title: 로또 통계 및 번호 생성기
authors:
  - annoying
date: 
  created: 2025-02-12T00:00:00
  updated: 2025-02-16T15:09:00
readtime: 20
tags:
  - 로또
  - LOTTO
comments: true
---

<!-- more -->

<script defer src="//cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js"></script>
<script defer src="//unpkg.com/brain.js"></script>
<script>
    // 전역 변수
    lottoData = [];
    
    // CSV 데이터 불러오기 함수
    async function fetchCSV() {
        const url = "https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom@main/Blog/Analysis/lotto.csv";

        try {
            const response = await fetch(url);
            const csvText = await response.text();

            // 줄 단위 나눔
            const rows = csvText.trim().split("\n");
            
            // 첫 번째 줄(헤더) 추출
            const headers = rows[0].split(",").map(header => header.trim());

            // 데이터 행 처리
            lottoData = rows.slice(1).map(row => {
                const values = row.split(",");
                return headers.reduce((obj, key, index) => {
                    obj[key] = values[index]?.trim();
                    return obj;
                }, {});
            });

            console.log("CSV 데이터 불러오기 성공");
        } catch (error) {
            console.error("CSV 데이터 불러오기 실패: ", error);
        }
    }
    fetchCSV();
</script>

# 로또 통계 및 번호 생성기

!!! warning "주의"
    - 본 게시글에 사용된 로또 데이터는 [동행복권](https://dhlottery.co.kr/common.do?method=main "동행복권")을 기반으로 하고 있으며, [AN-NOYING/DataRoom](https://github.com/AN-NOYING/DataRoom)에서 데이터를 확인할 수 있습니다.
    - 데이터를 수집하면서 누락 또는 오류가 발생했을 수 있으니 감안해주세요.
    - 로또는 무작위성이 매우 강합니다. 그렇기 때문에 아래의 통계를 전적으로 믿기 보다는 재미로만 보아주세요.
    - 게시글의 최신 업데이트는 메타데이터의 수정일자를 참고해주세요.

## 로또

대한민국에서 시행 중인 6/45 로또는 45개의 숫자 중 순서에 상관없이 당첨번호 6개를 모두 맞추면 1등 당첨금을 받을 수 있는 게임입니다.

## 구입 행태 통계

[기획재정부 복권위원회](http://bokgwon.go.kr/post/postView.do?boardSeq=6&category=&pageNum=3&seq=7823 "기획재정부 복권위원회")의 2022년도 복권 인식도 조사 결과 일부를 차트로 표현하였습니다. 성인 남녀 1,020명을 대상으로 복권에 대한 인식도 조사 결과입니다.

### 소득계층 구입비율
<canvas id="lotto-1"></canvas>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (lottoData.length === 0) return;
        if (!Chart) return;

        const canvas = document.getElementById('lotto-1');
        if (canvas) {
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: [ '1분위', '2분위', '3분위', '4분위', '5분위', '기타' ],
                    datasets: [
                        {
                            label: '2021년',
                            data: [
                                2.2,
                                8.7,
                                29.6,
                                40.1,
                                7.5,
                                11.9
                            ]
                        },
                        {
                            label: '2022년',
                            data: [
                                3.3,
                                17.7,
                                26.5,
                                39.0,
                                10.9,
                                2.6
                            ]
                        },
                    ]
                }
            });
        }
    });
</script>

저소득층이 로또를 많이 구매할 것 같다는 인식과는 다른 결과를 보이고 있습니다. 소득별로 보면 3분위(317 ~ 465만 원)와 4분위(466 ~ 673만 원)가 많이 구매하는 걸로 나타납니다.

### 성별 구입비율
<canvas id="lotto-2"></canvas>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (lottoData.length === 0) return;
        if (!Chart) return;

        const canvas = document.getElementById('lotto-2');
        if (canvas) {
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: [ '남성', '여성' ],
                    datasets: [
                        {
                            label: '2021',
                            data: [ 
                                56.8,
                                43.2
                            ]
                        },
                        {
                            label: '2022',
                            data: [
                                55.2,
                                44.8,
                            ]
                        },
                    ]
                }
            });
        }
    });
</script>

성별 구입비율을 보았을 때 남성이 여성보다 조금 더 높은 구매 경향을 보이고 있습니다.

### 연령별 구입비율
<canvas id="lotto-3"></canvas>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (lottoData.length === 0) return;
        if (!Chart) return;

        const canvas = document.getElementById('lotto-3');
        if (canvas) {
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: [ '20대', '30대', '40대', '50대', '60세 이상' ],
                    datasets: [
                        {
                            label: '2021년',
                            data: [
                                14.4,
                                16.2,
                                22.5,
                                21.5,
                                25.4,
                            ]
                        },
                        {
                            label: '2022년',
                            data: [
                                12.8,
                                15.2,
                                22.1,
                                22.5,
                                27.4,
                            ]
                        },
                    ]
                }
            });
        }
    });
</script>

2030 세대보단 대체로 중장년층에서 구입 비율이 많습니다. 아무래도 노후 준비 때문인 걸로 보입니다.

### 직업별 구입비율
<canvas id="lotto-4"></canvas>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (lottoData.length === 0) return;
        if (!Chart) return;

        const canvas = document.getElementById('lotto-4');
        if (canvas) {
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: [ '농/임/어업', '자영업', '블루칼라', '화이트칼라', '가정주부', '학생', '무직/기타' ],
                    datasets: [
                        {
                            label: '2021년',
                            data: [
                                1.4,
                                19.0,
                                20.3,
                                34.5,
                                16.4,
                                4.2,
                                4.2,
                            ]
                        },
                        {
                            label: '2022년',
                            data: [
                                1.0,
                                20.2,
                                17.9,
                                32.1,
                                18.9,
                                4.9,
                                5.0,
                            ]
                        },
                    ]
                }
            });
        }
    });
</script>

화이트칼라(사무직)와 자영업 순으로 구입 비율이 많습니다. 블루칼라는 흔히 말하는 육체적 노동자로, 생산직이라 보시면 되겠습니다.

## 판매금액 통계
<canvas id="lotto-5"></canvas>

각 년도별 총판매금액의 추이입니다. 2010년까지는 그리 큰 인기를 보이지 않았던 것 같습니다. 그 이후부터는 계속 증가 추세에 있는 걸로 보입니다.

총판매금액이 증가 추세에 있는 것이 좋은 징조일지 나쁜 징조일지는 사람마다 다르겠지만 저는 부정적으로 보입니다. 긍정적으로 보면 공공기금(교육, 복지 등)에 투입되는 금액이 늘어나니 사회 발전에 큰 기여가 됩니다. 부정적으로는 경제 불황이죠. 날이 갈 수록 오르는 물가에 비해 내 월급은 오르지 않고 경제가 불안해지고 있기 때문에 일확천금을 노릴 수 있는 로또에 많이 기대는 것으로 보입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (lottoData.length === 0) return;
        if (!Chart) return;

        const canvas = document.getElementById('lotto-5');
        if (canvas) {
            const numberOfYears = new Date().getFullYear() - (2002 - 1);        // 연도의 수
            let yearTotalArr = Array(numberOfYears).fill(0);                    // 연도별 총판매금액 배열

            // 연도별 총판매금액 산출
            for (let i = 0; i < lottoData.length; ++i) {
                const idx = new Date(lottoData[i]['date']).getFullYear() - 2002;
                yearTotalArr[idx] += parseInt(lottoData[i]['total'], 10);
            }

            // 차트
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: Array.from({ length: numberOfYears }, (_, i) => (2002 + i).toString()),
                    datasets: [{ 
                        data: yearTotalArr,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }
    });
</script>

## 당첨금액 통계

<table id="lotto-table-1">
    <thead>
        <tr>
            <th>구분</th>
            <th>당첨금액 또는 인원수</th>
            <th>회차</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

<script>
    document.addEventListener('DOMContentLoaded', () => {
    if (lottoData.length === 0) return;

    // 1등 인당 최고 및 최저 당첨금과 회차
    const result = lottoData.reduce((acc, { round, '1st_winnings': winnings }) => {
        winnings = parseInt(winnings, 10);

        if (winnings > acc.maxWinnings) {
            acc.maxWinnings = winnings;
            acc.maxRound = parseInt(round, 10);
        } else if (winnings > 0 && winnings < acc.minWinnings) {
            acc.minWinnings = winnings;
            acc.minRound = parseInt(round, 10);
        }

        return acc;
    }, { maxWinnings: -Infinity, maxRound: null, minWinnings: Infinity, minRound: null });

    // 1등 최다 당첨자 수
    const result2 = lottoData.reduce((acc, { round, '1st_num': _1stnum }) => {
        _1stnum = parseInt(_1stnum, 10);

        if (_1stnum > acc._1st_num) {
            acc._1st_num = _1stnum;
            acc.round = parseInt(round, 10);
        }
        
        return acc;
    }, { _1st_num: -Infinity, round: null });

    // TBODY 업데이트
    const tbody = document.querySelector('#lotto-table-1 tbody');
    if (tbody) {
        tbody.innerHTML = `
            <tr>
                <td>1등 인당 최고 당첨금</td>
                <td>${result.maxWinnings.toLocaleString()}원</td>
                <td>${result.maxRound.toLocaleString()}회차</td>
            </tr>
            <tr>
                <td>1등 인당 최저 당첨금</td>
                <td>${result.minWinnings.toLocaleString()}원</td>
                <td>${result.minRound.toLocaleString()}회차</td>
            </tr>
            <tr>
                <td>1등 최다 당첨자 수</td>
                <td>${result2._1st_num}명</td>
                <td>${result2.round.toLocaleString()}회차</td>
            </tr>
        `;
    }
});
</script>

최저 당첨금은 0원을 제외하고 산출했을 때를 기준으로 하고 있습니다. 0원까지 포함하면 1회차(당첨자 없음)로 나타나기 때문입니다.

## 번호 통계
### 번호 출현 횟수 (보너스 제외)
<canvas id="lotto-6"></canvas>
<p id="lotto-p-1"></p>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (lottoData.length === 0) return;
        if (!Chart) return;

        const canvas = document.getElementById('lotto-6');
        if (canvas) {
            // 45개의 요소와 각 번호별 출현 횟수 (보너스 제외)
            let freqNums = Array(45).fill(0);
            for (let i = 0; i < lottoData.length; ++i) {
                freqNums[parseInt(lottoData[i]['num1'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['num2'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['num3'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['num4'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['num5'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['num6'], 10) - 1] += 1;
            }

            // 차트
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: Array.from({ length: 45 }, (_, i) => (i + 1).toString()),
                    datasets: [{
                        data: freqNums,
                        backgroundColor: Array.from({ length: 45 }, (_, i) => {
                            const num = i + 1;
                            if (num <= 10) return '#FCE38A';
                            else if (num <= 20) return '#91C8E4';
                            else if (num <= 30) return '#FF2E63';
                            else if (num <= 40) return '#526D82';
                            else return '#609966';
                        })
                    }],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: {
                            ticks: {
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0,
                                font: {
                                    size: 10
                                }
                            }
                        }
                    }
                }
            });

            // 상위 및 하위 6개
            const para = document.getElementById('lotto-p-1');
            if (para) {
                let topNum = '';
                freqNums.map((cnt, idx) => ({ number: idx + 1, cnt: cnt })).sort((a, b) => b.cnt - a.cnt).slice(0, 6).forEach(top => {
                    topNum += `${top.number}, `;
                });
                topNum = topNum.slice(0, -2);

                let bottomNum = '';
                freqNums.map((cnt, idx) => ({ number: idx + 1, cnt : cnt })).sort((a, b) => a.cnt - b.cnt).slice(0, 6).forEach(bottom => {
                    bottomNum += `${bottom.number}, `;
                });
                bottomNum = bottomNum.slice(0, -2);

                para.textContent = `보너스 번호를 제외하여 가장 많이 나온 상위 6개의 번호는 ${topNum}이고, 가장 적게 나온 하위 6개의 번호는 ${bottomNum}입니다.`;
            }
        }
    });
</script>

### 번호 출현 횟수 (보너스 포함)
<canvas id="lotto-7"></canvas>
<p id="lotto-p-2"></p>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (lottoData.length === 0) return;
        if (!Chart) return;

        const canvas = document.getElementById('lotto-7');
        if (canvas) {
            // 45개의 요소와 각 번호별 출현 횟수
            let freqNums = Array(45).fill(0);
            for (let i = 0; i < lottoData.length; ++i) {
                freqNums[parseInt(lottoData[i]['num1'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['num2'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['num3'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['num4'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['num5'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['num6'], 10) - 1] += 1;
                freqNums[parseInt(lottoData[i]['bonus_num'], 10) - 1] += 1;
            }

            // 차트
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: Array.from({ length: 45 }, (_, i) => (i + 1).toString()),
                    datasets: [{
                        data: freqNums,
                        backgroundColor: Array.from({ length: 45 }, (_, i) => {
                            const num = i + 1;
                            if (num <= 10) return '#FCE38A';
                            else if (num <= 20) return '#91C8E4';
                            else if (num <= 30) return '#FF2E63';
                            else if (num <= 40) return '#526D82';
                            else return '#609966';
                        })
                    }],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: {
                            ticks: {
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0,
                                font: {
                                    size: 10
                                }
                            }
                        }
                    }
                }
            });

            // 상위 및 하위 6개
            const para = document.getElementById('lotto-p-2');
            if (para) {
                let topNum = '';
                freqNums.map((cnt, idx) => ({ number: idx + 1, cnt: cnt })).sort((a, b) => b.cnt - a.cnt).slice(0, 6).forEach(top => {
                    topNum += `${top.number}, `;
                });
                topNum = topNum.slice(0, -2);

                let bottomNum = '';
                freqNums.map((cnt, idx) => ({ number: idx + 1, cnt : cnt })).sort((a, b) => a.cnt - b.cnt).slice(0, 6).forEach(bottom => {
                    bottomNum += `${bottom.number}, `;
                });
                bottomNum = bottomNum.slice(0, -2);

                para.textContent = `보너스 번호를 포함하여 가장 많이 나온 상위 6개의 번호는 ${topNum}이고, 가장 적게 나온 하위 6개의 번호는 ${bottomNum}입니다.`;
            }
        }
    });
</script>

### 보너스 번호 출현 횟수
<canvas id="lotto-8"></canvas>
<p id="lotto-p-3"></p>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (lottoData.length === 0) return;
        if (!Chart) return;

        const canvas = document.getElementById('lotto-8');
        if (canvas) {
            // 45개의 요소와 각 번호별 출현 횟수
            let bonusNums = Array(45).fill(0);
            for (let i = 0; i < lottoData.length; ++i) { bonusNums[parseInt(lottoData[i]['bonus_num'], 10) - 1] += 1; }

            // 차트
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: Array.from({ length: 45 }, (_, i) => (i + 1).toString()),
                    datasets: [{
                        data: bonusNums,
                        backgroundColor: Array.from({ length: 45 }, (_, i) => {
                            const num = i + 1;
                            if (num <= 10) return '#FCE38A';
                            else if (num <= 20) return '#91C8E4';
                            else if (num <= 30) return '#FF2E63';
                            else if (num <= 40) return '#526D82';
                            else return '#609966';
                        })
                    }],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: {
                            ticks: {
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0,
                                font: {
                                    size: 10
                                }
                            }
                        }
                    }
                }
            });            

            // 상위 및 하위 6개
            const para = document.getElementById('lotto-p-3');
            if (para) {
                let topNum = '';
                bonusNums.map((cnt, idx) => ({ number: idx + 1, cnt: cnt })).sort((a, b) => b.cnt - a.cnt).slice(0, 6).forEach(top => {
                    topNum += `${top.number}, `;
                });
                topNum = topNum.slice(0, -2);

                let bottomNum = '';
                bonusNums.map((cnt, idx) => ({ number: idx + 1, cnt : cnt })).sort((a, b) => a.cnt - b.cnt).slice(0, 6).forEach(bottom => {
                    bottomNum += `${bottom.number}, `;
                });
                bottomNum = bottomNum.slice(0, -2);

                para.textContent = `보너스 번호로 가장 많이 나온 상위 6개의 번호는 ${topNum}이고, 가장 적게 나온 하위 6개의 번호는 ${bottomNum}입니다.`;
            }
        }
    });
</script>

### 짝수 및 홀수
회차를 선택하면 해당 회차에 해당하는 당첨번호의 홀수와 짝수를 확인할 수 있습니다.

<select id="lotto-select-1">
    <option value="" disabled selected>회차를 선택해주세요</option>
</select>
<table id="lotto-table-2">
    <thead>
        <tr>
            <th>당첨일자</th>
            <th>홀수</th>
            <th>홀수합</th>
            <th>짝수</th>
            <th>짝수합</th>
            <th>총합</th>
        </tr>
    </thead>
    <tbody>
        
    </tbody>
</table>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // 회차 추가
        const select = document.getElementById('lotto-select-1');
        if (select) {
            for (let i = 0; i < lottoData.length; ++i) {
                const newOpt = document.createElement('option');
                newOpt.value = i;
                newOpt.textContent = `${i + 1}회차`;

                select.appendChild(newOpt);
            }
        }
        
        // SELECT 값 변경
        select.addEventListener('change', () => {
            // TABLE
            const table = document.getElementById('lotto-table-2');
            if (!table) return;
            
            // TBODY 내 모든 요소 제거
            const tbody = table.querySelector('tbody');
            if (tbody) { tbody.innerHTML = ''; }

            // 홀짝 구분 및 합
            let even = [];
            let odd = [];
            let evenTotal = 0, oddTotal = 0;

            for (let i = 0; i < 6; ++i) {
                let num = lottoData[select.value][`num${i+1}`];
                // 홀수
                if (num & 1) {
                    even.push(num);
                    evenTotal += parseInt(num, 10);
                } else {
                    odd.push(num);
                    oddTotal += parseInt(num, 10);
                }
            }
            

            // 추가
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${lottoData[select.value]['date']}</td>
                <td>${even}</td>
                <td>${evenTotal}</td>
                <td>${odd}</td>
                <td>${oddTotal}</td>
                <td>${evenTotal + oddTotal}</td>
            `;
            tbody.appendChild(tr);
        });
    });
</script>

## 당첨자 통계
### 등수별 당첨자
=== "1등"
    <p id="lotto-p-4"></p>
=== "2등"
    <p id="lotto-p-5"></p>
=== "3등"
    <p id="lotto-p-6"></p>
=== "4등"
    <p id="lotto-p-7"></p>
=== "5등"
    <p id="lotto-p-8"></p>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (lottoData.length === 0) return;
        if (!Chart) return;

        const para1 = document.getElementById('lotto-p-4');
        if (para1) {
            // 1등 당첨자 수 배열
            const _1stNumArr = lottoData.map(data => parseInt(data['1st_num'], 10)).sort((a, b) => a - b);
            
            // 최솟값과 최댓값
            const minVal = _1stNumArr[0];
            const maxVal = _1stNumArr[_1stNumArr.length - 1];

            // 평균
            let sum = 0;
            for (let i = 0; i < _1stNumArr.length; ++i) {
                sum += _1stNumArr[i];
            }
            const meanVal = sum / _1stNumArr.length;
            
            para1.textContent = `가장 적게 나온 1등 당첨자 수는 ${minVal.toLocaleString()}명이고, 가장 많이 나온 당첨자 수는 ${maxVal.toLocaleString()}명입니다. 평균 ${meanVal.toFixed(2)}명 당첨되고 있습니다.`;
        }
        
        const para2 = document.getElementById('lotto-p-5');
        if (para2) {
            // 2등 당첨자 수 배열
            const _2ndNumArr = lottoData.map(data => parseInt(data['2nd_num'], 10)).sort((a, b) => a - b);
            
            // 최솟값과 최댓값
            const minVal = _2ndNumArr[0];
            const maxVal = _2ndNumArr[_2ndNumArr.length - 1];

            // 평균
            let sum = 0;
            for (let i = 0; i < _2ndNumArr.length; ++i) {
                sum += _2ndNumArr[i];
            }
            const meanVal = sum / _2ndNumArr.length;
            
            para2.textContent = `가장 적게 나온 2등 당첨자 수는 ${minVal.toLocaleString()}명이고, 가장 많이 나온 당첨자 수는 ${maxVal.toLocaleString()}명입니다. 평균 ${meanVal.toFixed(2)}명 당첨되고 있습니다.`;
        }
        
        const para3 = document.getElementById('lotto-p-6');
        if (para3) {
            // 3등 당첨자 수 배열
            const _3rdNumArr = lottoData.map(data => parseInt(data['3rd_num'], 10)).sort((a, b) => a - b);
            
            // 최솟값과 최댓값
            const minVal = _3rdNumArr[0];
            const maxVal = _3rdNumArr[_3rdNumArr.length - 1];

            // 평균
            let sum = 0;
            for (let i = 0; i < _3rdNumArr.length; ++i) {
                sum += _3rdNumArr[i];
            }
            const meanVal = sum / _3rdNumArr.length;
            
            para3.textContent = `가장 적게 나온 3등 당첨자 수는 ${minVal.toLocaleString()}명이고, 가장 많이 나온 당첨자 수는 ${maxVal.toLocaleString()}명입니다. 평균 ${meanVal.toFixed(2)}명 당첨되고 있습니다.`;
        }
        
        const para4 = document.getElementById('lotto-p-7');
        if (para4) {
            // 4등 당첨자 수 배열
            const _4thNumArr = lottoData.map(data => parseInt(data['4th_num'], 10)).sort((a, b) => a - b);
            
            // 최솟값과 최댓값
            const minVal = _4thNumArr[0];
            const maxVal = _4thNumArr[_4thNumArr.length - 1];

            // 평균
            let sum = 0;
            for (let i = 0; i < _4thNumArr.length; ++i) {
                sum += _4thNumArr[i];
            }
            const meanVal = sum / _4thNumArr.length;
            
            para4.textContent = `가장 적게 나온 4등 당첨자 수는 ${minVal.toLocaleString()}명이고, 가장 많이 나온 당첨자 수는 ${maxVal.toLocaleString()}명입니다. 평균 ${meanVal.toFixed(2)}명 당첨되고 있습니다.`;
        }
        
        const para5 = document.getElementById('lotto-p-8');
        if (para5) {
            // 4등 당첨자 수 배열
            const _5thNumArr = lottoData.map(data => parseInt(data['5th_num'], 10)).sort((a, b) => a - b);
            
            // 최솟값과 최댓값
            const minVal = _5thNumArr[0];
            const maxVal = _5thNumArr[_5thNumArr.length - 1];

            // 평균
            let sum = 0;
            for (let i = 0; i < _5thNumArr.length; ++i) {
                sum += _5thNumArr[i];
            }
            const meanVal = sum / _5thNumArr.length;
            
            para5.textContent = `가장 적게 나온 5등 당첨자 수는 ${minVal.toLocaleString()}명이고, 가장 많이 나온 당첨자 수는 ${maxVal.toLocaleString()}명입니다. 평균 ${meanVal.toFixed(2)}명 당첨되고 있습니다.`;
        }
    });
</script>

### 자동, 수동, 반자동 비율
<canvas id="lotto-9"></canvas>
<p id="lotto-p-9"></p>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (lottoData.length === 0) return;
        if (!Chart) return;

        const canvas = document.getElementById('lotto-9');
        if (canvas) {
            let autoCnt = 0;
            let manualCnt = 0;
            let semiAutoCnt = 0;
            for (let i = 0; i < lottoData.length; ++i) {
                autoCnt += parseInt(lottoData[i]['auto'], 10) || 0;
                manualCnt += parseInt(lottoData[i]['manual'], 10) || 0;
                semiAutoCnt += parseInt(lottoData[i]['semi_auto'], 10) || 0;
            }
            
            const total = autoCnt + manualCnt + semiAutoCnt;

            // 차트
            new Chart(canvas, {
                type: 'pie',
                data: {
                    labels: [ '자동', '수동', '반자동' ],
                    datasets: [{
                        data: [ autoCnt, manualCnt, semiAutoCnt ]
                    }],
                },
                options: {
                    responsive: true
                }
            });

            const para = document.getElementById('lotto-p-9');
            if (para) {
                para.textContent = `로또 1등 당첨자 중 자동의 당첨자 비율은 ${((autoCnt / total) * 100).toFixed(2)}%이고, 수동은 ${((manualCnt / total) * 100).toFixed(2)}%, 반자동은 ${((semiAutoCnt / total) * 100).toFixed(2)}%입니다. 대부분 자동 당첨자가 많습니다.`;
            }
        }
    });
</script>

## 번호 생성기
<table id="lotto-table-3">
    <thead>
        <tr>
            <th><code>crypto</code> 기반</th>
            <th><a href="https://github.com/BrainJS/brain.js" title="brain.js">brain.js</a> 기반</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
<input type="number" id="brainjs-iters" min="1" value="20000">
<button type="button" id="lotto-generate-btn" class="md-button">로또 번호 생성하기</button>

`crypto`는 암호학적으로 안전한 난수를 생성할 수 있도록하는 Web Crypto API입니다. 자바스크립트로 난수를 생성하려면 `Math.random`을 사용했는데, 현재는 `crypto`를 기반으로 예측하기 어려운 난수를 생성 및 사용하고 있습니다. 즉, `Math.random`은 어느정도 예측이 가능하기 때문에 난수를 만들어내기 힘들기 때문에 이 API를 사용합니다.

[brain.js](https://github.com/BrainJS/brain.js "brain.js")는 자바스크립트로 만들어진 신경망 라이브러리로, 머신 러닝을 웹 환경에서 사용할 수 있도록 도와줍니다. 이 라이브러리를 통해 다양한 패턴을 예측해낼 수 있습니다. 로또는 무작위성이 강하기 때문에 사실 사용하는 건 바보같은 짓이지만 재미삼아 개쌉노가다를 하며 만들어보았습니다. 학습 횟수를 직접 지정할 수 있도록 했는데요... 너무 높은 값을 사용하면 연산도 오래 걸리고 오히려 예측률이 더 낮아지기도 합니다. 사용하고 계시는 기기의 사양을 고려해 적당한 값으로 사용하기 바랍니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('lotto-generate-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                // 1 ~ 45
                const lottoNums = Array.from({ length: 45 }, (_, i) => (i + 1));
                let cryptoNums;
                let brainJSNums;

                // CRYPTO 기반
                {
                    let clone1 = lottoNums.slice();

                    // 섞은 후 랜덤하게 선택
                    for (let i = clone1.length - 1; i > 0; --i) {
                        const j = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) / (i + 1)));
                        [clone1[i], clone1[j]] = [clone1[j], clone1[i]]; // Swap
                    }

                    cryptoNums = clone1.slice(0, 6).sort((a, b) => a - b);
                }

                // brain.js 기반
                {
                    const net = new brain.NeuralNetwork({activation: 'sigmoid'});
                    
                    // 학습 데이터
                    const trainingData = lottoData.map(data => {
                        const input = Array(45).fill(0); // 45개의 번호를 위한 배열 초기화

                        // num1 ~ num6 값만 처리
                        for (let i = 1; i <= 6; ++i) {
                            const num = parseInt(data[`num${i}`], 10); // num1 ~ num6 값을 가져오기
                            if (num >= 1 && num <= 45) {
                                input[num - 1] = 1; // 해당 번호의 인덱스를 1로 설정
                            }
                        }

                        // 출력 데이터는 0~1 사이의 확률 값으로 설정
                        return { input, output: Array(45).fill(0).map(() => Math.random()) }; // 확률 기반의 무작위 출력 데이터
                    });

                    // 신경망 훈련
                    alert('신경망 훈련을 시작합니다. 어느정도 시간이 걸리기 때문에 잠시 다른 작업을 하신 후 돌아와주세요.');
                    
                    const iters = parseInt(document.getElementById('brainjs-iters').value, 10);
                    net.train(trainingData, {
                        iterations: iters,
                    });

                    // 예측
                    const input = Array(45).fill(0);

                    // CRYPTO에서 생성된 번호를 신경망의 입력으로 사용
                    cryptoNums.forEach(num => {
                        input[num - 1] = 1; // 해당 번호의 인덱스를 1로 설정
                    });
                    
                    const output = net.run(input);

                    alert('훈련 및 예측이 완료되었습니다. 결과를 확인해주세요');

                    brainJSNums = Array.from(output).map((value, index) => ({ value, index: index + 1})).sort((a, b) => b.value - a.value).slice(0, 6).map(item => item.index).sort((a, b) => a - b);
                }

                // TBODY
                const tbody = document.querySelector('#lotto-table-3 tbody');
                if (tbody) {
                    tbody.innerHTML = `
                        <tr>
                            <td>${cryptoNums}</td>
                            <td>${brainJSNums}</td>
                        </tr>
                    `;
                }
            });
        }
    });
</script>