---
authors: [annoying]
date: 2024-07-03
title: 메이플스토리 전 직업 일러스트 컬렉션 스카니아 경매장 판매량 추이
categories:
    - Analysis
tags:
    - 메이플스토리
    - 패키지
    - 코디
    - 일러스트 컬렉션
comments: true
---

# 메이플스토리 전 직업 일러스트 컬렉션 스카니아 경매장 판매량 추이

메이플스토리 스카니아 월드 경매장 기준으로 전 직업 일러스트 컬렉션(코디 패키지)의 판매량 추이를 알아봅시다.

<!-- more -->

## 개요

메이플스토리 2024년 여름 업데이트 <b><span style="color:#8ef8f1">M</span><span style="color:#fef39d">I</span><span style="color:#ff97fa">L</span><span style="color:#fd7ffe">E</span><span style="color:#60feeb">S</span><span style="color:#feaa65">T</span><span style="color:#d08eff">O</span><span style="color:#bef3b5">N</span><span style="color:#70e6fd">E</span></b> (1)을 선보이면서 새로운 코디 패키지 아이템을 출시했습니다.
{ .annotate }

1.  색상 노가다;;

2024년 6월 20일 ~ 2024년 8월 12일이라는 두 달이 조금 안 되는 기간 동안 영웅과 시그너스 직업군의 일러스트와 유사한 코디 패키지 아이템을 유료로 판매합니다.

메이플스토리 팀에서 별도로 경매장의 판매 데이터를 제공하지 않기 때문에 직접 스카니아 월드에서 경매장 판매 데이터(시세)를 수기로 작성하였습니다...

본 게시글에 사용된 데이터는 게시글 최하단의 [CSV 다운로드](#csv "CSV 다운로드")에서 확인하실 수 있으며, 모든 데이터는 스카니아 경매장 기반이고 2024년 6월 20일 이후입니다.

칭호 교환권까진 귀찮아서 안 했습니다.

## 모험가 패키지 선택권

<figure markdown="span">
    ![ADVENTURER](https://lwi.nexon.com/maplestory/banner/2024/0620/cashshop_bn_240620_17G0QEK01IA3Y3BJ.jpg){ loading=lazy }
    <figcaption>모험가 패키지 선택권</figcaption>
</figure>

모험가 패키지 선택권은 현재 경매장에서 볼 수는 있지만, 캐시샵에선 볼 수 없습니다. 과거에는 '전설의 모험가 패키지'라는 이름으로 99,000원에 판매했던 기록이 있는데 지금은 안 보이네요...?

경매장에 아직까지 판매 중이길래 포함해서 작성해 봅니다.

### 판매량

```python exec="true" html="true"
import pandas as pd
import plotly.graph_objects as go

df = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Adeventure_Package.csv', encoding='euc-kr')
df.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date' }, inplace=True)

fig = go.Figure(data=[go.Bar(x=['판매량'], y=[df['Name'].count()], text=[df['Name'].count()], textposition='outside', width=[0.125])], layout={ 'title': '모험가 패키지 선택권 판매량' })
fig.update_layout(yaxis=dict(range=[0, df['Name'].count() + 5]))
fig.update_layout(title_font_family='Noto Sans KR')

html_output = fig.to_html(full_html=False, include_plotlyjs="cdn")
print(html_output)
```

이전에 한 번 판매된 기록이 있고 캐시샵에서 개별 직업군 패키지로 판매하고 있어서 그런지 전체 직업군이 포함된 '모험가 패키지 선택권'은 별로 구매하지 않는 것 같습니다. 모험가는 15개의 직업이 존재하는 데 굳이 이정도까진 필요하지 않죠.

게다가 영웅과 시그너스 기사단의 신규 코디 패키지가 출시되면서 인기가 많이 밀린 것 같습니다.

### 판매가 추이

```python exec="true" html="true"
import pandas as pd
import plotly.express as px

df = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Adeventure_Package.csv', encoding='euc-kr')
df.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date' }, inplace=True)
df['Price'] = df['Price'].str.replace(',', '').astype('int64')

fig = px.line(df, y='Price', title="스카니아 경매장 - 모험가 패키지 선택권 판매가 추이", markers=True)
fig.update_layout(yaxis={ 'tickformat': ',.0f' })   # 천 단위 구분 기호 & 소수점 없는 형식
fig.update_layout(title_font_family='Noto Sans KR')

html_output = fig.to_html(full_html=False, include_plotlyjs="cdn")
print(html_output)
```

```python exec="true"
import pandas as pd

df = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Adeventure_Package.csv', encoding='euc-kr')
df.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date' }, inplace=True)
df['Price'] = df['Price'].str.replace(',', '').astype('int64')

print("|최저|최고|평균|중앙|")
print("|:-----:|:-----:|:-----:|:-----:|")
print(f"|{'{:,.0f}'.format(df['Price'].min())}|{'{:,.0f}'.format(df['Price'].max())}|{'{:,.0f}'.format(df['Price'].mean())}|{'{:,.0f}'.format(df['Price'].median())}|")
```

어지간하면 다들 평균 가격 이상으로 판매되고 있습니다. 

중앙값과 그리 큰 차이를 보이지 않는 것으로 보아 극단적인 값도(0빼기 같은) 없습니다.

모험가 패키지 선택권은 데이터가 부족해서 별다른 정보를 얻을 게 없어보입니다. API와 연동한다 해도 딱히 떠오르는 게 없는...

## 영웅 & 시그너스 기사단 패키지 선택권

<figure markdown="span">
    ![ILLUSTRATION](https://lwi.nexon.com/maplestory/banner/2024/0620/cashshop_bn_240620_RP6M123X553YBO1X.jpg){ loading=lazy }
    <figcaption>영웅 & 시그너스 기사단 패키지 선택권</figcaption>
</figure>

2024년 여름 업데이트 <b><span style="color:#8ef8f1">M</span><span style="color:#fef39d">I</span><span style="color:#ff97fa">L</span><span style="color:#fd7ffe">E</span><span style="color:#60feeb">S</span><span style="color:#feaa65">T</span><span style="color:#d08eff">O</span><span style="color:#bef3b5">N</span><span style="color:#70e6fd">E</span></b>에서 새롭게 추가된 코디 아이템입니다.

생각보다 직업 콘셉트에 맞춰 코디하는 걸 좋아하는 분들이 있는 것 같습니다. 그런 분들에게 이러한 BM은 꽤 좋은 모델이라 생각합니다. 당장 저만 해도 일일이 캐릭터의 부위마다 옷을 고르는 것이 너무 귀찮거든요...

캐시샵에서 영웅과 시그너스 기사단 패키지가 하나로 묶인 '영웅과 기사단 패키지'를 150,000원에 판매하고 있고, 영웅만 포함된 '깨어난 영웅 패키지'는 70,000원에, 시그너스 기사단만 포함된 '승리의 시그너스 기사단 패키지'는 99,000원에 판매되고 있습니다.

단순히 코디 아이템만 포함된 패키지였다면 굉장히 비싼 가격입니다. 패키지 안에는 캐릭터 스펙 향상에 도움이 되는 기간제 칭호 아이템이 있긴한데요 그래도 매우 부담스러운 가격이긴 합니다.

### 판매량
```python exec="true" html="true"
import plotly.graph_objects as go
import pandas as pd

df1 = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Hero_Package.csv', encoding='euc-kr')
df1.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date'}, inplace=True)
df2 = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Knight_Package.csv', encoding='euc-kr')
df2.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date'}, inplace=True)

fig = go.Figure(data=[
    go.Bar(x=['영웅 패키지 선택권', '시그너스 기사단 패키지 선택권'], y=[ df1['Name'].count(), df2['Name'].count() ], text=[df1['Name'].count(), df2['Name'].count()], textposition='outside', width=[0.125, 0.125])
], layout=go.Layout(title=go.layout.Title(text='영웅 & 시그너스 기사단 패키지 선택권 판매량')))
fig.update_layout(yaxis={
    'range': [0, max([df1['Name'].count(), df2['Name'].count()]) + 100]
})
fig.update_layout(title_font_family='Noto Sans KR')

html_output = fig.to_html(full_html=False, include_plotlyjs="cdn")
print(html_output)
```

게시글 작성일 기준(1)으로 '영웅 패키지 선택권'의 판매량이 압도적으로 많습니다.
{ .annotate }

1.  2024-07-03

금번 여름 업데이트의 내역 중 영웅 직업 '아란'과 '은월'의 리마스터가 공개되면서 덩달아 인기가 상승한 것으로 보입니다. 게다가 '영웅 패키지 선택권'의 가격이 '시그너스 기사단 패키지 선택권'에 비해 가격이 더 저렴하기 때문에 이 영향도 분명 있어 보입니다. 아무래도 사람 심리상 가격이 더 저렴한 쪽을 고르게 되는...

'시그너스 기사단 패키지 선택권'이 다소 낮긴 해도 모험가에 비하면 아예 판매되지 않는 수준은 아닙니다. 과거 시그너스 직업군 리마스터를 진행하면서 '시그너스 기사단장' 아이템을 메소샵에서 판매한 적 있고 조금 유사한 부분이 있기 때문에 덜 구매하게 되는 것으로 보입니다. 그나마 패키지 안에 '책사 나인하트'와 '여제 시그너스' 패키지가 있어서 선빵한 것 같습니다.

### 날짜별 판매량
```python exec="true" html="true"
import plotly.graph_objects as go
import pandas as pd

df1 = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Hero_Package.csv', encoding='euc-kr')
df1.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date'}, inplace=True)
df1.dropna(inplace=True)
df1['Price'] = df1['Price'].str.replace(',', '').astype('int')
df1['Price2'] = df1['Price2'].str.replace(',', '').astype('int')
data_cnt1 = df1.groupby('Date').size().reset_index(name='Count')


df2 = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Knight_Package.csv', encoding='euc-kr')
df2.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date'}, inplace=True)
# df2.dropna(inplace=True)
df2['Price'] = df2['Price'].str.replace(',', '').astype('int')
df2['Price2'] = df2['Price2'].str.replace(',', '').astype('int')
data_cnt2 = df2.groupby('Date').size().reset_index(name='Count')

fig = go.Figure(layout={ 'title': '날짜별 패키지 선택권 판매량' })
fig.add_trace(go.Bar(x=data_cnt1['Date'], y=data_cnt1['Count'], name='영웅 패키지 선택권', marker_color='dodgerblue'))
fig.add_trace(go.Bar(x=data_cnt1['Date'], y=data_cnt2['Count'], name='시그너스 기사단 패키지 선택권', marker_color='lightskyblue'))

html_output = fig.to_html(full_html=False, include_plotlyjs="cdn")
print(html_output)
```

날짜별 영웅 패키지 선택권과 시그너스 기사단 패키지 선택권의 판매량입니다.

두 패키지 선택권 모두 판매량에는 차이가 있지만 비슷한 차트 모습을 보이고 있습니다. 첫 날 출시 때 가장 많이 팔리고 이후에는 점점 줄어드는 모습을 보이고 있습니다.

이 차트를 보기 전에 토요일과 일요일 날에는 판매량이 늘어나 있을 줄 알았는데 생각보다 그러지는 않아서 놀랐습니다. 스카니아 월드의 경매장만을 기준으로 하고 있어서 그런 걸 수도 있습니다. ~~메이플스토리 팀은 경매장 API를 공개하라...~~

데이터가 더 쌓여야 추세를 더 정확히 알 수 있을 것 같습니다.

### 판매가 추이
```python exec="true" html="true"
import plotly.graph_objects as go
import pandas as pd

df1 = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Hero_Package.csv', encoding='euc-kr')
df1.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date'}, inplace=True)
df1.dropna(inplace=True)
df1['Price'] = df1['Price'].str.replace(',', '').astype('int')
df1['Price2'] = df1['Price2'].str.replace(',', '').astype('int')
data_cnt1 = df1.groupby('Date').size().reset_index(name='Count')

df2 = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Knight_Package.csv', encoding='euc-kr')
df2.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date'}, inplace=True)
# df2.dropna(inplace=True)
df2['Price'] = df2['Price'].str.replace(',', '').astype('int')
df2['Price2'] = df2['Price2'].str.replace(',', '').astype('int')
data_cnt2 = df2.groupby('Date').size().reset_index(name='Count')

fig = go.Figure()
fig.add_trace(go.Scatter(y=df1['Price'], mode='lines', name='영웅 패키지 선택권'))
fig.add_trace(go.Scatter(y=df2['Price'], mode='lines', name='시그너스 기사단 패키지 선택권'))
fig.update_layout(title='영웅 패키지 선택권과 시그너스 기사단 패키지 선택권의 가격 추이',
                  yaxis_title='가격',
                  title_font_family='Noto Sans KR')
fig.update_layout(yaxis_tickformat=',.0f')
fig.update_layout(legend_orientation='h')

html_output = fig.to_html(full_html=False, include_plotlyjs="cdn")
print(html_output)
```

차트로 살펴보니 일부 판매자는 시그너스 기사단 패키지 선택권을 판매할 때 가격을 잘못 설정한 게 눈에 보이네요... :cry: 게다가 첫 날에는 같은 판매자인지 영웅 패키지 선택권과 시그너스 기사단 패키지 선택권의 가격이 둘 다 똑같이 낮네요.

메소마켓의 시세 정보를 API로 제공해주면 뭔가 상관분석이라도 할 수 있을까 싶은데 할 수 있는 게 없네요.

### 실제 매출?!

모든 서버의 경매장을 돌아다니며 기록한 게 아니라 메이플스토리 팀에서 얼마를 벌었는지 추정하기 어렵습니다. 다만, 스카니아 월드에선 어느정도의 매출이 나왔는 지 추정해볼 순 있을 것 같습니다.

패키지 선택권의 아이템은 넥슨 캐시로 구매 시(1) 보너스 아이템을 포함해서 사용 전 1회에 한해 타인과 교환을 할 수 있습니다. 즉, 경매장에 팔 수 있다는 소리죠. 이 말은 경매장에 판매 중이거나 판매된 아이템은 실제 사용자의 현금이 사용된 것이라 볼 수 있습니다.
{ .annotate }

1.  메이플 포인트의 경우 불가능합니다.

|패키지명|캐시 가격|
|:-----:|:-----:|
|영웅과 기사단 패키지|150,000원|
|깨어난 영웅 패키지|70,000원|
|승리의 시그너스 기사단 패키지|90,000원|

아래의 세 가지의 경우로 볼 수 있을 것 같습니다.

1.  영웅과 기사단 패키지 구매 후 각각 판매
2.  깨어난 영웅 패키지 구매 후 판매
3.  승리의 시그너스 기사단 패키지 구매 후 판매

#### 영웅과 기사단 패키지

영웅과 기사단 패키지를 구매하면 '영웅 패키지 선택권'과 '시그너스 기사단 패키지 선택권' 그리고 '시그너스 기사단/영웅 칭호 선택권'을 얻을 수 있습니다. 칭호 선택권의 경우 별도로 데이터를 준비하지 않았기 때문에 본 게시글에선 다루지 않습니다.

영웅 패키지 선택권과 시그너스 기사단 패키지 선택권을 둘 다 판매할 수 있고, 둘 중 하나만 판매하거나 아예 안 할 수 있기 때문에 계산이 정확해지지 않습니다. 그래서 본 영역은 가장 많이 팔린 패키지인 '영웅 패키지 선택권'의 판매량을 기준으로 합니다.

```python exec="true"
import plotly.graph_objects as go
import pandas as pd

df = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Hero_Package.csv', encoding='euc-kr')
df.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date'}, inplace=True)

print("|판매량|캐시 가격|매출|")
print("|:-----:|:-----:|:-----:|")
print(f"|{df['Name'].count()}|150,000|{'{:,.0f}원'.format(df['Name'].count() * 150000)}|")
```

게시글 작성일 기준으로 75,150,000원으로 산정되었습니다. 경매장에 판매되지 않은 것과 사용자가 사용한 것 등을 포함하면 못해도 최소 1억 원의 매출은 올렸을 것으로 보입니다.

#### 깨어난 영웅 패키지

깨어난 영웅 패키지는 '영웅 패키지 선택권'을 의미합니다. 영웅 패키지 선택권 판매량에 캐시 가격을 곱하면 대략적인 매출액을 산정할 수 있습니다.

```python exec="true"
import plotly.graph_objects as go
import pandas as pd

df = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Hero_Package.csv', encoding='euc-kr')
df.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date'}, inplace=True)

print("|판매량|캐시 가격|매출|")
print("|:-----:|:-----:|:-----:|")
print(f"|{df['Name'].count()}|70,000|{'{:,.0f}원'.format(df['Name'].count() * 70000)}|")
```

게시글 작성일 기준으로 35,070,000원으로 나타났습니다.

#### 승리의 시그너스 기사단 패키지

승리의 시그너스 기사단 패키지는 '시그너스 기사단 패키지 선택권'을 의미합니다. 시그너스 기사단 패키지 선택권 판매량에 캐시 가격을 곱하면 대략적인 매출액을 산정할 수 있습니다.

```python exec="true"
import plotly.graph_objects as go
import pandas as pd

df = pd.read_csv('https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Knight_Package.csv', encoding='euc-kr')
df.rename(columns={ '아이템 이름': 'Name', ' 개수 ': 'Count', ' 가격 ': 'Price', ' 개당 가격 ': 'Price2', '날짜': 'Date'}, inplace=True)

print("|판매량|캐시 가격|매출|")
print("|:-----:|:-----:|:-----:|")
print(f"|{df['Name'].count()}|99,000|{'{:,.0f}원'.format(df['Name'].count() * 99000)}|")
```

게시글 작성일 기준으로 41,679,000원으로 나타났습니다.

#### 결론

메이플스토리에 있는 모든 서버가 스카니아 경매장만큼의 데이터를(판매량을) 가지고 있다고 가정했을 때... 한 서버 당 최소 1억 원의 매출은 올렸을 것으로 추정됩니다.

메이플스토리에는 총 17개의 서버가 있고(버닝 제외) 한 서버 당 최소 1억 원의 매출이라 가정했을 때 17억 원 이상을 벌었다고 볼 수 있습니다. 경매장에 올라오지 않은 것도 포함하면 그 이상 되겠죠?!

## CSV 다운로드

!!! info
    항상 최신의 버전으로 다운로드되며, 데이터는 2024년 8월 12일까지 매일 갱신됩니다. 
    
    갱신되는 시간은 따로 정해져 있지 않습니다.

[:octicons-download-24: 메이플스토리 모험가 패키지 선택권 CSV 다운로드](https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Adeventure_Package.csv){ .md-button }

[:octicons-download-24: 메이플스토리 영웅 패키지 선택권 CSV 다운로드](https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Hero_Package.csv){ .md-button }

[:octicons-download-24: 메이플스토리 시그너스 기사단 패키지 선택권 CSV 다운로드](https://cdn.jsdelivr.net/gh/AN-NOYING/DataRoom/Blog/Analysis/MapleStory_Knight_Package.csv){ .md-button }


<!-- 

### 메이플 팀의 매출?!

!!! warning
    여기서부터 작성하는 내용은 정확한 데이터없이 작성한 것이기 때문에 부정확합니다.

|패키지명|캐시 가격|
|:-----:|:-----:|
|영웅과 기사단 패키지|150,000원|
|깨어난 영웅 패키지|70,000원|
|승리의 시그너스 기사단 패키지|90,000원|

캐시샵에서 판매되는 패키지의 가격은 위와 같습니다. 여기서부터 작성하는 내용은 다음과 같습니다.

1.  경매장에서 판매된 패키지는 실제 캐시샵에서 구입한 사람으로 간주해보자. (1)
    { .annotate }

    1.  넥슨 캐시로 구매 시 보너스 아이템을 포함하여 사용 전 1회에 한해 타인과 교환할 수 있다. 메이플 포인트의 경우에는 불가하다.

2.  묶음 패키지(영웅과 기사단 패키지)와 개별 패키지 각각의 판매량에 캐시 가격을 곱한다. (1)
    { .annotate }

    1.  실제 판매 가격으로 추정해볼 수 있음.

3.  메이플스토리의 모든 서버는 스카니아를 포함하여 `14`개이다. 버닝 서버를 포함하면 `17`개가 되지만, 버닝은 3일 후 경매장 판매가 가능하기 때문에 계산 대상에서 제외한다.

4.  메이플스토리의 서버 수와 스카니아 월드의 매출액을 곱하면 대략적인 전체 서버의 매출액을 추정해볼 수 있다. 못해도 최소 이정도는 벌었을 것이라는 것. (1)
    { .annotate }

    1.  전 서버 모두 스카니아 판매량만큼 판매되었다고 가정한다.

|패키지명|캐시 가격|스카니아 판매량|스카니아 매출|전 서버 매출|
|:-----:|:-----:|:-----:|:-----:|:-----:|
|영웅과 기사단 패키지|150,000원||||
|깨어난 영웅 패키지|70,000원|476|$476 \times 70000 = 33,320,000$|$33320000 \times 17 = 566,440,000$|
|승리의 시그너스 기사단 패키지|90,000원|402|$402 \times 90000 = 36,180,000$|$36180000 \times 17 = 615,060,000$|

깨어난 영웅 패키지와 승리의 시그너스 기사단 패키지의 전 서버 매출을 모두 합하면 `1,181,500,000`원으로 산출된다. 약 11억 원 이상을 벌었다고 추정할 수 있다.

하지만, 깨어난 영웅 패키지와 승리의 시그너스 기사단 패키지는 하나로 묶여있는 영웅과 기사단 패키지에서 별개로 판매할 수도 있다. 영웅과 기사단 패키지는 경매장에서 별도로 검색되는 제품이 아니기 때문에 정확한 판매량을 알 수 없다. 그래서 이 경우에는 깨어난 영웅 패키지와 승리의 시그너스 기사단 패키지의 판매량 기준으로 산출해서 비교해보도록 한다.

깨어난 영웅 패키지를 기준으로 할 경우 $476 \times 150000 = 71,400,000$원으로 나타나며, 전 서버 기준으로 볼 경우 $71400000 \times 17 = 1,213,800,000$원으로 나타난다.

승리의 시그너스 기사단 패키지를 기준으로 할 경우 $402 \times 150000 = 60,300,000$원으로 나타나며, 전 서버 기준으로 볼 경우 $60300000 \times 17 = 1,025,100,000$원으로 나타난다.

캐시 아이템 구매 후 경매장에 판매하지 않는 사용자도 있으니 그러한 데이터까지 포함한다면 못해도 10억 원 이상은 무조건 벌었을 것으로 추정된다. -->