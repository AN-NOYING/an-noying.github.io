---
title: DS4Windows 사용법
authors:
  - annoying
categories:
    - 소프트웨어
date: 
  created: 2025-02-16T00:00:00
  updated: 2025-02-17T00:00:00
readtime: 20
tags:
  - DS4Windows
  - 소프트웨어
comments: true
---

# DS4Windows 사용법

<!-- more -->

## 개요
<figure markdown="span">
    ![IMAGE-1](https://i.postimg.cc/8c6ZvpFJ/image.png)
    <figcaption>이미지 1</figcaption>
</figure>

[구글 서치 콘솔](https://search.google.com/search-console/about "Google Search Console")을 통해 실적을 확인하는 중에 **ds4windows 사용법**을 검색해서 제 게시글 중 일부가 노출된 것으로 확인되었습니다.

구글에 검색을 해보니 생각보다 상세한 정도는 아니더라도 알아보기 쉽게 정리된 글이 별로 없더라구요. 더 충격적인건 나무위키에도 작성이 안 되어 있다는 것!

그래서 작은 맘 먹고 DS4Windows에 대한 게시글을 간단하게 작성해보기로 했습니다. 내용이 빈약한 편이지만 프로그램의 사용법을 익히는 데 도움이 되리라 봅니다.

## DS4Windows
### 개요
<figure markdown="span">
    ![IMAGE-2](https://ds4-windows.com/wp-content/uploads/2021/06/ds4windows.png)
    <figcaption>DS4Windows</figcaption>
</figure>

[DS4Windows](https://ds4-windows.com/ "DS4Windows")는 오픈소스 형식의 게임패드 입력 매퍼(Mapper)이자 가상 에뮬레이터로, PlayStation 컨트롤러(1)를 Windows PC에 연결하여 사용할 수 있도록 도와주는 응용 프로그램입니다.
{.annotate}

1.  DualShock 3 / DualShock 4 / DualSense 5

기본적으로 듀얼쇼크 또는 듀얼센스를 Windows에서 XBOX 컨트롤러로 인식되도록 하는 것이 주 기능이고, 그외 게임에 도움이 될만한 커스텀마이징 기능을 일부 제공하고 있습니다.

### 주요 기능
??? support "XBOX 컨트롤러 인식"
    Windows는 기본적으로 XBOX 컨트롤러의 작동을 지원하고 있습니다. 다만, 듀얼쇼크나 듀얼센스 등 일부 컨트롤러는 호환이 되기도하고 안 되기도 합니다. 운영체제보단 주로 게임에서 호환이 되지 않는 경우가 많습니다. DS4Windows는 듀얼쇼크 또는 듀얼센스를 XBOX 360 컨트롤러로 인식되도록 우회하여 대부분의 게임에서 컨트롤러를 사용할 수 있도록 합니다.

??? support "버튼 매핑과 매크로"
    사용하는 컨트롤러의 일부 버튼을 원하는 입력 값으로 설정할 수 있습니다. 예를 들어, R1 버튼을 누르면 마우스 클릭을 수행하도록 하는 것 처럼요.

    <figure markdown="span">
        ![IMAGE-3](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTBuOGY4czJlbW1uN3RvbWxhc2tyemRlM2w5dTU5NzhkdzFzbXJhdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WR8njYGqKKdZd9Bbs5/giphy.gif)
        <figcaption>엄청 복잡한 입력</figcaption>
    </figure>

    여러 개의 입력을 하나의 버튼을 눌러 수행하도록 매크로 기능을 설정할 수 있습니다. 특정 버튼만 누르면 여러 번 눌러야 하는 버튼을 연속으로 입력되도록 할 수 있습니다.

??? support "Gyro(자이로) 및 터치패드"
    듀얼쇼크 또는 듀얼센스 컨트롤러는 DS4Windows와 같은 프로그램의 도움없이 연결 후 사용할 경우 자이로 및 터치패드 기능을 사용하는 데 있어 제약이 발생합니다.

    DS4Windows는 듀얼쇼크 또는 듀얼센스의 자이로 센서를 활용해 마우스처럼 움직이거나 특정 게임에서 사용할 수 있도록 도와주고, 터치패드를 마우스처럼 사용할 수 있도록 합니다.

??? support "라이트 바의 색상과 진동 설정"
    라이트 바의 색상을 다르게 설정할 수 있고, 진동의 강도를 직접 설정할 수 있습니다.

위 기능 외에도 여러가지 추가 기능을 지원하고 있습니다.

### 사양
|OS|.NET Runtime|Visual C++ 재배포 패키지|드라이버|컨트롤러|연결 단자|
|:-----|:-----|:-----|:-----|:-----|:-----|
|Windows 10 또는 그 이상|Microsoft .NET 8.0 Desktop Runtime x64 또는 x86|Visual C++ 2015-2022 재배포 패키지|ViGEmBus (자동 설치)|듀얼 쇼크 4, 듀얼센스 또는 지원하는 서드파티 컨트롤러|PC와 연결할 수 있는 케이블이나 블루투스 4.0 이상|

DS4Windows는 Windows 10 이상의 환경에서 작동합니다.

.NET Framework를 기반으로 개발되었기 때문에 .Net 8.0 데스크탑 런타임의 설치가 필요합니다. 또한 XBOX 360 컨트롤러로 인식하도록 우회하기 위한 ViGEmBus 드라이버의 설치가 필요한데, 이는 DS4Windows 설치 시 자동으로 설치됩니다.

## 다운로드 및 설치
### 다운로드
#### DS4Windows
[DS4Windows Download](https://github.com/Ryochan7/DS4Windows/releases/tag/v3.3.3 "DS4Windows Download"){ .md-button target="_blank" }

DS4Windows의 다운로드는 위 버튼을 클릭해 다운로드 페이지로 이동할 수 있습니다.

<figure markdown="span">
    ![IMAGE-4](https://i.postimg.cc/9fgbNRZw/image.png)
    <figcaption>다운로드</figcaption>
</figure>

Assets 영역에서 사용자 본인 환경에 맞는 버전을 선택해 다운로드하면 됩니다. ++windows+break++ 단축키를 눌러 시스템 종류에서 버전을 확인할 수 있습니다. 만약, 32비트 환경으로 나타난다면 x86 버전을 다운로드합니다.

7z와 zip으로 된 파일 확장자는 무설치판이고 exe로 된 파일 확장자는 설치판입니다. 본 게시글은 설치판을 기준으로 설명합니다.

#### .NET Runtime
[.NET 8 Desktop Runtime x64](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.0-windows-x64-installer ".NET 8 Desktop Runtime x64"){ .md-button target="_blank" }

[.NET 8 Desktop Runtime x86](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.0-windows-x86-installer ".NET 8 Desktop Runtime x86"){ .md-button target="_blank" }

DS4Windows는 .NET Framework를 기반으로 개발되었기 때문에 .NET Runtime의 설치가 무조건 필요합니다.

사용자 본인 환경에 맞는 버전을 선택하여 다운로드해주세요.

#### Visual C++ 2015-2022 재배포 패키지
[Visual C++ 2015-2022 Redistributable x64](https://aka.ms/vs/17/release/vc_redist.x64.exe "Visual C++ 2015-2022 Redistributable x64"){ .md-button target="_blank" }

[Visual C++ 2015-2022 Redistributable x86](https://aka.ms/vs/17/release/vc_redist.x86.exe "Visual C++ 2015-2022 Redistributable x86"){ .md-button target="_blank" }

.NET Runtime과 마찬가지로 사용자 본인 환경에 맞는 버전을 선택하여 다운로드해주세요.

### 설치
#### DS4Windows
??? setup "설치하기"
    <figure markdown="span">
        ![IMAGE-5](https://i.postimg.cc/PrMmRvkf/image.png)
        <figcaption>설치 과정 1</figcaption>
    </figure>

    [DS4Windows 다운로드](#ds4windows_2)에서 다운로드하신 설치 파일을 더블 클릭하여 실행합니다.

    영어로 작성되어 있어 불친절하지만(?) 무지성으로 Next 버튼을 눌러주세요.

    <figure markdown="span">
        ![IMAGE-6](https://i.postimg.cc/jjDP28nC/image.png)
        <figcaption>설치 과정 2</figcaption>
    </figure>

    DS4Windows와 ViGEmBus는 필수로 설치해야 하는 것이기 때문에 체크를 풀 수 없습니다. 그 아래에 있는 HideHide와 FakerInput의 용도는 아래와 같습니다.

    - HideHide: DS4Windows가 듀얼쇼크 또는 듀얼센스 컨트롤러를 **숨기는 기능**입니다. 게임이나 기타 프로그램에서 컨트롤러를 인식해 발생할 수 있는 충돌 문제를 방지하기 위함입니다. 선택사항이기 때문에 반드시 설치할 필요는 없습니다.
    - FakerInput: DS4Windows의 입력 처리를 대체하는 옵션인데 필수 설치는 아닙니다. 어지간하면 사용할 일이 없기 때문에 해제하시는 게 낫습니다.

    저는 HideHide 옵션까지만 체크한 후 설치하겠습니다. Next 버튼을 눌러주세요.

    <figure markdown="span">
        ![IMAGE-7](https://i.postimg.cc/YSTgW1QR/image.png)
        <figcaption>설치 과정 3</figcaption>
    </figure>

    DS4Windows의 설치 경로입니다. 기본값 그대로 둔 후 Install 버튼을 눌러 설치해주세요.

    <figure markdown="span">
        ![IMAGE-8](https://i.postimg.cc/hv17666Z/image.png)
        <figcaption>설치 과정 4</figcaption>
    </figure>

    설치 진행 중 중간에 ViGEmBus 설치 창이 나타납니다. 따로 설정할 건 없으니 Next 버튼 클릭 후 나타나는 <span style="color: brown">I agree to the License terms and conditions.</span>에 체크하신 후 설치해주시면 됩니다. ==HideHide도 마찬가지입니다.=={ .half-line }

    <figure markdown="span">
        ![IMAGE-9](https://i.postimg.cc/52RQhwKJ/image.png)
        <figcaption>설치 과정 5</figcaption>
    </figure>

    드라이버의 설치를 완료하기 위해 재부팅이 필요하다는 메시지박스가 나타납니다. 재부팅을 권장드리고, 중요한 작업 중이셨다면 미리 백업하신 후 재부팅해주세요.

## 사용법
??? info "Save Where"
    <figure markdown="span">
        ![IMAGE-10](https://i.postimg.cc/X7Dvqnfc/image.png)
        <figcaption>어디에 저장할까요</figcaption>
    </figure>

    DS4Windows를 처음 실행하면 위 사진과 같은 창이 나타납니다.

    프로필과 설정 값을 저장할 위치를 지정해달라는데요... 좌측에 있는 Program Folder는 무설치판을 사용 중일 때 선택 가능합니다. 우리는 설치판으로 설치했으니 우측에 있는 Appdata 버튼을 클릭해주세요. 참고로 좌측에 있는 버튼은 관리자 권한이 있는 폴더에서 실행했을 경우 선택이 불가합니다.

??? info "First Launch"
    <figure markdown="span">
        ![IMAGE-11](https://i.postimg.cc/kMYCFf27/image.png)
        <figcaption>디바이스 매퍼 지원 활성화</figcaption>
    </figure>

    DS4Windows는 기본적으로 듀얼쇼크 4 컨트롤러의 인식만 지원합니다. 그렇기 때문에 다른 컨트롤러를 인식하도록 하려면 체크박스에 체크가 필요합니다. 현재 저는 PS4와 호환되는 게임 컨트롤러를 사용 중이기 때문에 기본값 그대로 둔 후 Close 버튼을 눌렀습니다. 필요에 따라 호환하고 싶은 장치를 선택하시면 되겠습니다.

    어차피 나중에 다시 호환되도록 안 되도록 설정할 수 있으니 걱정마세요.

### 기본 외관
<figure markdown="span">
    ![IMAGE-12](https://i.postimg.cc/GhYcLvpr/image.png)
    <figcaption>기본 외관</figcaption>
</figure>

DS4Windows의 기본 외관은 위 사진과 같습니다.

### Controllers
<figure markdown="span">
    ![IMAGE-13](https://i.postimg.cc/D0LtTdPM/image.png)
    <figcaption>Controllers</figcaption>
</figure>

Controllers 탭에는 현재 사용 중인 PC에 연결된 게임 컨트롤러가 표시됩니다.

우측 하단에 Start 또는 Stop 버튼을 클릭해 컨트롤러의 인식을 시작하거나 중지할 수 있습니다.

Status 열에 연결된 방식이 아이콘으로 표시됩니다. 위 사진은 케이블로 연결된 기준이기 때문에 케이블 아이콘이 표시되구요, 블루투스와 같은 무선 연결 시 해당하는 아이콘으로 나타납니다. 무선 연결 시 해당 아이콘에 마우스 커서를 올려 우클릭 시 연결 해제할 수 있습니다.

Edit 버튼을 클릭해 현재 선택된 프로필을 편집할 수 있고, 우측에 파란색은 클릭하여 라이트 바의 색상을 변경할 수 있습니다.

### Profiles
<figure markdown="span">
    ![IMAGE-14](https://i.postimg.cc/pXB6JdGz/image.png)
    <figcaption>Profiles</figcaption>
</figure>

Profiles 탭은 게임 컨트롤러와 관련된 설정을 수행할 수 있고, 별도로 저장하여 상황에 따라 원하는 설정 값을 적용할 수 있습니다. 일종의 프리셋 개념입니다.

??? info "New 버튼"
    <figure markdown="span">
        ![IMAGE-15](https://i.postimg.cc/CKRr0sFs/image.png)
        <figcaption>프리셋 1</figcaption>
    </figure>

    New 버튼을 클릭하면 프리셋 옵션을 사용할거냔 질문을 냅다 던집니다. 즉, 미리 세팅된 값들이 있는 데 이를 기반으로 할거냐 물어보는 겁니다.

    <figure markdown="span">
        ![IMAGE-16](https://i.postimg.cc/mDMdzZ1c/image.png)
        <figcaption>프리셋 2</figcaption>
    </figure>

    만약, Yes를 선택하면 여러개의 프리셋을 선택할 수 있습니다.

    Yes나 No나 그리 큰 차이도 없고 본인이 직접 설정할 수 있기 때문에 No를 눌러도 괜찮습니다. No를 누르면 Gamepad 프리셋 값으로 프로필의 옵션이 설정됩니다.

??? info "Edit 버튼"
    <figure markdown="span">
        ![IMAGE-17](https://i.postimg.cc/C5sm7vNS/image.png)
        <figcaption>Edit</figcaption>
    </figure>

    New 버튼으로 새 프로필을 생성하거나 기존의 프로필을 선택한 후 Edit를 누르면 위 사진과 같은 모습이 처음에 보입니다.

    프로필의 이름을 직접 지정할 수 있고, 설정한 값을 저장(Save), 적용(Apple), 취소(Cancel) 할 수 있습니다.

    === "Controls"
        <figure markdown="span">
            ![IMAGE-18](https://i.postimg.cc/5NpsFRym/image.png)
            <figcaption>Controls 탭</figcaption>
        </figure>

        Controls 탭은 컨트롤러의 입력을 제어합니다.
        
        === "① 매핑"
            <figure markdown="span">
                ![IMAGE-19](https://i.postimg.cc/T3wCjJWv/image.png)
                <figcaption>매핑</figcaption>
            </figure>

            ①번 영역에 있는 게임패드의 이미지에서 원하는 버튼 영역을 클릭하거나 그 아래에 있는 버튼 리스트 박스에 있는 아이템을 더블 클릭하면 위 사진과 같이 어떠한 키(버튼)로 작동하도록 변경할 수 있습니다.

            원하시는 키 또는 버튼을 눌러주시면 해당 동작을 수행하도록 바로 변경됩니다.
            
            Toggle은 해당 키를 누르면 계속 눌린 상태로 유지하고 다시 누르면 해제하는 기능입니다. 말 그대로 토글이예요.
            
            Scan Code는 정확히 무슨 용도인지 알 수 없는데, 아마 가상 키 코드 대신 하드웨어의 키 입력을 그대로 인식 및 처리하는 기능으로 보입니다.

            ??? info "매크로"
                <figure markdown="span">
                    ![IMAGE-20](https://i.postimg.cc/wBR2ZxVW/image.png)
                    <figcaption>매크로</figcaption>
                </figure>

                <span style="color: brown">Record A Macro</span> 버튼을 클릭하면 입력한 값을 한 번 또는 연속으로 수행하도록 설정할 수 있는 창을 띄울 수 있습니다.

                <span style="color: brown">Record</span> 버튼을 눌러 키보드 / 마우스 / 컨트롤러의 입력 값을 기록할 수 있고, <span style="color: brown">Stop</span> 버튼을 눌러 기록을 멈출 수 있습니다. <span style="color: brown">Insert Wait</span>을 누르면 대기 시간을 ms 단위로 추가할 수 있습니다.

                Play Once는 매크로 기능을 딱 한 번만 수행하도록 하고, Repat While Held는 키 입력을 떼어낼 때까지 계속 반복합니다.

                매크로 기록 및 설정이 완료되었다면 <span style="color: brown">Save</span> 버튼을 눌러 설정할 수 있습니다.
        === "② Axis Config"
            축(Axis)과 관련된 설정을 수행할 수 있습니다.

            기본적인 데드존(DeadZone) 설정과 감도를 설정할 수 있구요, 생각보다 상세하게 나뉘어있습니다. 이 부분은 영문이긴 하지만 [DS4Windows - Axis Zone Mapping](https://github.com/Ryochan7/DS4Windows/wiki/Settings#axis-zone-mapping "DS4Windows - Axis Zone Mapping") 문서를 확인하시는 걸 추천드립니다.
        === "③ Lightbar"
            컨트롤러에 있는 라이트 바의 색상을 설정할 수 있습니다.

            Output Mode는 Normal과 Passthru가 있습니다. 
            
            Normal로 선택하면 직접 색상을 설정할 수 있구요, Passthru를 선택하면 DS4Windows가 아닌 컨트롤러 자체나 게임 내 이벤트 또는 설정에 따라 색상이 변하도록 합니다. 대부분의 경우 Normal이 기본값이고 라이트 바를 활용하는 게임이 많지 않기 때문에 그대로 두시면 됩니다. 여담으로, The Witcher 3라는 게임이 이 라이트 바를 활용하는 게임이라 Passthru로 두시는 게 좋습니다.
        === "④ Touchpad"
            터치패드와 관련된 설정을 수행할 수 있습니다.

            기본적으로 Output Mode는 Mouse로 되어있고 마우스의 동작을 수행하도록 되어 있습니다. Controls로 변경하면 스와이프 시 수행할 입력 처리를 설정할 수 있습니다. 나머지는 사용 안 해봐서 잘 모르겠습니다.
        === "⑤ Gyro"
            자이로 센서와 관련된 설정을 수행할 수 있습니다.

            기본적으로 Output Mode는 Controls (Accel)로 되어있습니다. Mouse로 변경하면 자이로 센서를 통해 마우스의 동작을 수행할 수 있습니다.
        === "⑥ Other"
            가상 컨트롤러와 진동과 관련된 설정을 수행할 수 있습니다.
    === "Special Actions"
        게임 컨트롤러에서 특정 트리거(버튼 조합)를 누르면 수행할 액션(동작)을 지정할 수 있습니다.

        액션의 종류는 아래와 같습니다.

        |액션|설명|
        |:-----|:-----|
        |Record a macro|매크로 기록|
        |Launch a program|프로그램 실행|
        |Load a profile|프로필 불러오기|
        |Press/Toggle Key|Press 또는 Toggle 입력|
        |Disconnect from Bluetooth|무선 연결 해제|
        |Check Battery Life|배터리 수명 확인|
        |Multi-action Button|다중 액션 버튼|
        |Calibration of sixaxis wheel calibration|자이로센서 및 아날로그 스틱 보정|
    === "Controller Readings"
        컨트롤러의 상태를 보여줍니다.

        아날로그 스틱과 자이로 센서, L2와 R2 그리고 입력 지연 시간을 출력합니다. 컨트롤러의 상태를 확인할 때 유용합니다.

??? info "Import / Export 버튼"
    프로필의 설정 내역을 XML 파일로 내보내거나 불러오는 기능입니다.

### Auto Profiles

Auto Profiles는 지정한 프로그램을 실행했을 때 자동으로 컨트롤러에 특정 프로필을 적용하도록 하는 기능입니다.

### Output Slots

이 기능은 사용한 적이 없어서 설명하기가 힘드네요.

DS4Windows는 기본적으로 듀얼쇼크 4 컨트롤러를 XBOX 360 컨트롤러로 인식되도록 에뮬레이션합니다. 이때 가상 컨트롤러가 생성되는데, 이를 Output Slots 탭에서 확인할 수 있습니다. 일반적으로 사용할 일이 없는 편인 것 같습니다.

### Settings

DS4Windows와 관련된 설정 탭입니다.

### Log

DS4Windows와 관련된 로그 출력 탭입니다.