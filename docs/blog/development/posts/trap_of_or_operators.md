---
authors: [annoying]
date: 2024-06-07
title: OR 연산의 함정
categories:
    - Etc
tags:
    - OR
    - C6289
comments: true
---

# OR 연산의 함정

OR 연산을 사용했는데 의도한 대로 동작하지 않을 때가 있습니다. 이유가 무엇일가요?

<!-- more -->

!!! danger
    잘못된 내용이나 오타가 보이면 댓글 등으로 알려주세요.

## 개요

대부분의 (?) 프로그래밍 언어는 OR 연산이라는 것을 지원하고 있습니다. OR 연산은 논리 연산에 속하는 연산 중 하나로, `A`와 `B` 중 하나라도 `True`일 때 `True`를 반환하도록 합니다. 즉, 둘 중에 한 녀석이라도 조건에 부합하면 `True`를 돌려준다는 겁니다.

개념만 보면 별 것도 아니지만... 대략 아래와 같은 코드를 만나게 될 경우 쉽게 함정에 빠지기도 합니다. 의도한다기 보단 보통 헷갈려서 잘못 작성하는 경우 중 하나인 것 같습니다.

```cpp hl_lines="5" linenums="1"
#include <iostream>

int main() {
    for (const auto& data : m_Data) {
        if (data.Parameter1 != 100 || data.Parameter1 != 110 || data.Parameter1 != 120) {
            continue;
        }
    }

    return 0;
}
```

`#!cpp data.Parameter1 != 100 || data.Parameter1 != 110 || data.Parameter1 != 120` 코드의 의도는 다음과 같습니다.

`#!cpp data.Parameter1`의 값이 `100`, `110`, `120`의 값이 아니라면 `#!cpp continue`를 수행한다.

언뜻보면 의도한 대로 동작할 것 같지만 의외로(?) `#!cpp data.Parameter1`의 값으로 `100`이 오면 조건식이 `#!cpp true`가 되어 의도하지 않은(?) 처리를 해버립니다. 굳이 `100`이 아닌 어떤 값이 와도 조건식이 `#!cpp true`가 되어버리기 때문에 무조건 `#!cpp continue`가 실행되어 버립니다.

`#!cpp data.Parameter1`의 값이 `100`일 때 아래와 같이 코드가 수행됩니다.

1. `#!cpp data.Parameter1 != 100`의 실행 결과는 `#!cpp false`입니다.
2. `#!cpp data.Parameter1 != 110`의 실행 결과는 `#!cpp true`입니다. 왜냐하면 100은 110이 아닌 것이 맞기 때문이죠.
3. `#!cpp data.Parameter1 != 120`의 실행 결과는 `#!cpp true`입니다. 왜냐하면 100은 120이 아닌 것이 맞기 때문이죠.

OR 연산은 하나라도 참이면 참을 반환하기 때문에 위 조건식은 `#!cpp false || true || true`가 되어 `#!cpp true`를 반환하게 됩니다. 그러므로 항상 `#!cpp continue`를 실행하게 될 수 밖에 없습니다. 내가 의도한 `100`과 `110` 그리고 `120`의 값이 아닐 때만 `#!cpp continue`를 하고 싶다면 **AND 연산**을 사용해야 합니다.

!!! info
    Visual Studio에선 이를 의도한 동작인지 확인하기 위해 **C6289** 경고를 나타냅니다.

```cpp hl_lines="5" linenums="1"
#include <iostream>

int main() {
    for (const auto& data : m_Data) {
        if (data.Parameter1 != 100 && data.Parameter1 != 110 && data.Parameter1 != 120) {
            continue;
        }
    }

    return 0;
}
```

AND 연산은 모든 조건이 참일 때 참을 반환합니다. 위 코드 식을 기준으로 `#!cpp data.Parameter1`의 값이 `99`일 때 조건식이 `#!cpp true && true && true`가 되어 `#!cpp true`를 반환하고 `#!cpp if`문 내부의 `#!cpp continue`를 실행하기 때문에 내가 의도한 대로 동작하게 됩니다.

`#!cpp data.Parameter1`의 값이 `100`일 때, 조건식은 `#!cpp false && true && true`가 되어 결과적으로 `#!cpp false`를 반환합니다. `#!cpp continue`를 수행하지 않기 때문에 의도한 대로 동작하는 걸 확인할 수 있습니다.