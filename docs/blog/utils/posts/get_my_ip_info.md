---
authors: [annoying]
date: 2024-05-18
# readtime: 5
title: 내 IP 정보 확인하기
comments: true
---

# 내 IP 정보 확인하기

<!-- more -->

## 개요

아주 가끔씩이지만... 내 IP 정보를 확인해보고 싶을 때가 있다. 국가는 어디고 사업자는 누구인지 등

### ipify

JavaScript로 나의 IP 주소를 확인하려면 별도의 API를 사용해야 하는 것으로 알고있다. 물론, stackoverflow를 보면 어떤 방식으로든 얻을 수 있어 보이는데, 그냥 API를 이용해 취득하는 게 여러모로 정신건강에 좋은 것 같다. 🤣

여러 API 중 [ipify](https://www.ipify.org/ "ipify")가 있다. 요청 건 수 제한이 없고, 오픈 소스이므로 [깃허브 저장소](https://github.com/rdegges/ipify-api "ipify-api")에 공개되어 있다. 그리고 굉장히 사용하기 쉽다.


```js title="JavaScript.js" linenums="1"
<script>
    function getIP(json) {
        const ip_addr = json.ip;
        const el = document.querySelector('#YOUR_ELEMENT');
        el.textContent = `${ip_addr}`;
    }
</script>
<script src="https://api64.ipify.org?format=jsonp&callback=getIP"></script>
```

[IP 주소 확인하기](#none){ .md-button .getMyIPBtn }

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const element = document.querySelector('a.getMyIPBtn');
        if (element) {
            element.addEventListener('click', () => {
                const url = 'https://api64.ipify.org?format=json';

                fetch(url).then(response => {
                    return response.json();
                }).then(data => {
                    alert(`${data.ip}`);
                }).catch(error => {

                });
            });
        }
    });
</script>


### FreeIPAPI

IP 주소만 얻어선 이용할 수 있는게 없다. [ipinfo](https://ipinfo.io/ "ipinfo")나 [FreeIPAPI](https://freeipapi.com/ "FreeIPAPI") 같은 걸 이용해야 더 자세한 정보를 얻을 수 있다. 이중 어떤 걸 사용해도 자유이며, 본 게시글은 FreeIPAPI를 이용해 일부 내용을 취득해 보도록 한다.

FreeIPAPI는 분당 60개의 요청을 허용하고 있다. 즉, 무료와 유료로 나뉘는데 더 많은 요청을 필요로 할 경우 돈을 지불해야 한다.

```js title="JavaScript.js" linenums="1"
const ip_addr = 'your_ip_address';
const url = `https://freeipapi.com/api/json/${ip_addr}`;

fetch(url)
    .then(response => { return response.json(); })
    .then(data => { console.log(data); })
    .catch(error => { console.log(error); });
```

<div style="background-color: black; color: white;" class="my_ip_info">
    <p class="country_name"></p>
    <p class="country_code"></p>
    <p class="city_name"></p>
    <p class="region_name"></p>
    <p class="continent"></p>
    <p class="language"></p>
</div>

[내 IP 정보 확인하기](#none){ .md-button .getMyIPInfo }

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const element = document.querySelector('a.getMyIPInfo');
        if (element) {
            element.addEventListener('click', () => {
                const url1 = 'https://api64.ipify.org?format=json';
                let ip_addr = '';

                // IP 주소 취득
                fetch(url1).then(response => { return response.json(); }).then(data => { ip_addr = data.ip; }).catch(error => { });

                // 정보 취득
                const url2 = `https://freeipapi.com/api/json/${ip_addr}`;
                const element2 = document.querySelector('.my_ip_info');
                fetch(url2).then(response => { return response.json(); })
                    .then(data => { 
                        if (element2) {
                            element2.querySelector('p.country_name').textContent = `국가명: ${data.countryName}`;
                            element2.querySelector('p.country_code').textContent = `국가 코드: ${data.countryCode}`;
                            element2.querySelector('p.city_name').textContent = `도시: ${data.cityName}`;
                            element2.querySelector('p.region_name').textContent = `지역: ${data.regionName}`;
                            element2.querySelector('p.continent').textContent = `대륙: ${data.continent}`;
                            element2.querySelector('p.language').textContent = `언어: ${data.language}`;
                        }
                    })
                    .catch(error => { 
                        if (element2) {
                            element2.textContent = `${error}`;
                        }
                    });
            });
        }
    });
</script>