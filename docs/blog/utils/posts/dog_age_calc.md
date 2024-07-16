---
authors: [annoying]
date: 2024-07-16
title: 강아지 나이 계산기
comments: true
---

# 강아지 나이 계산기

<!-- more -->

## 개요

[국내 등록된 반려견이 누적 300만 마리를 넘어섰다고 합니다.](https://www.moneys.co.kr/article/2023081215230255098 "집집마다 멍멍!… 국내 반려견 등록, 누적 300만 돌파")

이제는 반려견을 키우지 않는 집을 보기 힘들어졌을 정도죠.

반려견과 함께 생활하다 보면 사람 나이로 몇 살인지 궁금할 때가 있습니다. 나보다 나이가 많으면 이제 존댓말을 해야하지 않을까 싶은데요... 이러한 궁금점을 해결하기 위해 여러가지 나이 계산법을 가져와 보았습니다.

### 전통적인 방식

아주 오래전 부터 반려견의 나이를 사람 나이로 환산하는 쉬운 계산법이 있습니다. 바로, 반려견의 나이에 `7`을 곱하는 것입니다.

반려견의 특성을 고려하지 않은 계산 방식이기 때문에 정확하지는 않지만 대략적인 환산 나이를 산출하는 데 있어 유용합니다.

### American Kennel Club

[American Kennel Club](https://www.akc.org "AKC")은 1884년에 창립되어 현재까지 운영하고 있는 가장 유명하고 영향력있는 개 사육 및 등록 단체입니다. 잡담은 넘어가고 [개의 나이를 인간의 나이로 어떻게 환산하는지](https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/)에 대한 게시글이 투고된 적 있으며, 그중 반려견의 크기를 기준으로 나이를 계산하는 사진을 가져왔습니다.

<figure markdown="span">
    ![CALC_AGE](https://www.akc.org/wp-content/uploads/2015/11/Dog_Age_Chart_Proof_01Blue.jpg){ loading=lazy }
    <figcaption>반려견 나이 계산표</figcaption>
</figure>

독일 괴팅겐 대학의 진화 생물학자인 코넬리아 크라우스 연구원은 인터뷰에서 대형견의 노화는 빠른 속도로 진행되며, 체중이 4.4파운드(약 1.9kg) 증가할 때마다 기대 수명이 약 한 달씩 줄어든다고 합니다. 그 원인은 아직 밝혀지지 않았지만, 대형견이 노화와 관련된 질병에 더 빨리 걸릴 수 있고, 대형견의 성장이 가속화되면 비정상적인 세포 성장과 암으로 인한 사망 가능성이 높아질 수 있다는 등 몇 가지 가능성을 제시하고 있습니다. 더 자세한 내용은 [여기](https://petnhuman.com/news/breaking-news/652/)를 참고해주세요.

### 한국동물병원협회

[한국동물병원협회](https://www.kaha.or.kr/ "KAHA")에서 반려견의 크기를 기준으로 나이를 계산할 수 있는 표를 제공하고 있습니다.

<figure markdown="span">
    ![CALC_AGE](https://i.ibb.co/jhMCLzw/image.jpg){ loading=lazy }
    <figcaption>반려견 나이 계산표</figcaption>
</figure>

### BioRxiv

미국 생물학 분야 학술 사이트인 [BioRxiv](https://www.biorxiv.org/ "BioRxiv")에서 **Quantitative translation of dog-to-human aging by conserved remodeling of epigenetic networks** 연구에 따르면 래브라도 리트리버 104마리를 대상으로한 실험을 통해 새로운 나이 계산법을 공개했습니다.

자세한 내용은 저도 잘 모르고 계산식을 준비하였으니, 반려견의 나이를 입력해 사람 나이로 몇 살인지 확인해보세요. 다만, 이 계산 방법은 래브라도 리트리버 종을 한정으로 한 연구이기 때문에 해석에 주의가 필요합니다. 반려견의 품종에 따라 기대 수명, 노화 속도가 다르기 때문에 반드시 <span style="color: brown;">이 나이다!!</span> 하는 것은 아닙니다.

반려견의 나이가 <input class="X1" type="number" placeholder="반려견의 나이">살이면, 사람 나이로 <input readonly class="R1" type="number" placeholder="사람 나이">살 입니다.

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const X1 = document.querySelector('.X1');
        const R1 = document.querySelector('.R1');

        function update() {
            const x = parseFloat(X1.value);

            if (!isNaN(x) ) {
                R1.value = (16 * Math.log(x) + 31).toFixed(2);
            }
        }

        X1.addEventListener('input', update);
    });
</script>