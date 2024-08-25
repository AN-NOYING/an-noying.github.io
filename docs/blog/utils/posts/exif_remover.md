---
authors: [annoying]
date: 2024-08-26
title: 이미지 파일 EXIF 제거기
comments: true
---

# 이미지 파일 EXIF 제거기

<!-- more -->

## 개요

나도 모르게 개인정보가 유출되고 있다는 사실 알고계셨나요?

블로그, SNS, 개인 웹 사이트 등 무심코 올린 이미지 하나로 내 정보가 노출되는 경우가 있습니다.

### EXIF, 넌 뭐야?

EXIF<sup>Exchangeable Image File Format</sup>는 이미지 파일에 포함되는 메타데이터(1)로, 사진이 찍힌 날짜와 시간, 카메라의 정보, 위치(위도 및 경도) 등의 정보를 포함합니다. 촬영한 정보를 기록하기 때문에 추후 비슷한 사진을 찍을 때 설정 값을 참고할 수 있고, 여행을 다녔을 때 비교적 정확한 위치를 기억할 수 있어 유용하게 사용되기도 합니다.
{ .annotate }

1.  데이터에 대한 정보를 설명하는 데이터. 파일의 크기, 형식, 수정 날짜, 촬영 날짜, 시간, 위치 등을 포함합니다.

EXIF의 정보는 주로 JPG(JPEG), TIFF, PNG 그리고 일부 RAW 이미지 파일 형식에 저장되고 있습니다.

### 뭐가 문제인데요?

EXIF에는 위치 정보(위도와 경도)가 포함되어 있기 때문에 기기 설정이나 웹 사이트에서 별도의 가공 처리가 되지 않을 경우 위치가 그대로 노출되는 일이 발생합니다. 즉, 촬영자의 위치가 그대로 노출된다는 것입니다.

일부 웹 사이트(커뮤니티, SNS 등)는 EXIF의 정보를 제거하지 않는 경우가 있어 이미지를 그대로 업로드할 경우 스토킹 범죄를 당할 가능성이 있습니다. 본인이 노출을 꺼리는 인플루언서라면 반드시 주의해야 합니다.

## EXIF 확인

!!! caution
    아래의 기능이 제대로 수행되지 않으면 댓글로 알려주세요.

아래의 파일 선택 버튼을 통해 이미지를 추가하여 EXIF의 정보가 포함되어 있는 지 확인할 수 있습니다. EXIF 데이터가 존재하면 아래의 표에 데이터가 추가되어 표시됩니다.

<input type="file" id="READ-EXIF">
<table id="exifTable">
    <thead>
        <tr>
            <th>태그</th>
            <th>값</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

<script src="https://cdn.jsdelivr.net/npm/exif-js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const tableBody = document.getElementById('exifTable').querySelector('tbody');
        const el = document.getElementById('READ-EXIF');
        if (el) {
            el.addEventListener('change', (e) => {
                const file = e.target.files[0]; // image
                if (file) {
                    // 파일 이름에서 확장자 추출
                    const file_name = file.name;
                    const file_ext = file_name.split('.').pop().toLowerCase();

                    // 유효한 확장자인가?
                    const valid_ext = [ 'jpg', 'jpeg', 'png', 'tiff' ];
                    if (valid_ext.includes(file_ext)) {
                        const reader = new FileReader();
                        reader.onload = (e2) => {
                            EXIF.getData(file, function() {
                                const metadata = EXIF.getAllTags(this);

                                // 기존의 테이블 내용을 비웁니다.
                                    tableBody.innerHTML = '';

                                    // EXIF 데이터를 테이블로 출력합니다.
                                    
                                    for (const [key, value] of Object.entries(metadata)) {
                                        const row = document.createElement('tr');
                                        
                                        const tagCell = document.createElement('td');
                                        tagCell.textContent = key;
                                        row.appendChild(tagCell);
                                        
                                        const valueCell = document.createElement('td');
                                        valueCell.textContent = value;
                                        row.appendChild(valueCell);
                                        
                                        tableBody.appendChild(row);
                                    }
                                //const metadata_span = document.getElementById('metadata_span');
                                //metadata_span.innerHTML = JSON.stringify(metadata, null, '\t');
                            });
                        };

                        reader.readAsDataURL(file);
                    }
                }
            });
        }
    });
</script>

??? info "서버에 이미지 정보가 저장되지 않아요!"
    이미지 파일은 사용자가 사용하는 웹 브라우저를 통해 코드 수행 및 분석되기 때문에 별도의 서버에 데이터가 저장되지 않습니다.

    본 게시글은 이미지 파일의 EXIF 확인을 위해 [exif-js](https://github.com/exif-js/exif-js "exif-js")를 사용하고 있습니다.

## EXIF 제거

!!! caution
    아래의 기능이 제대로 수행되지 않으면 댓글로 알려주세요.

아래의 파일 선택 버튼을 통해 이미지를 추가하여 EXIF의 정보가 제거된 이미지 파일로 변환하여 다운로드 할 수 있습니다.

<input type="file" id="READ-EXIF2">
<canvas id="canvas" style="display:none;"></canvas>
[이미지 다운로드](#){ .md-button .md-button--primary id=download-img }

<script>
    document.addEventListener('DOMContentLoaded', () => {
        let file_name = '';
        let file_ext = '';
        let img_url = '';

        const canvas_el = document.getElementById('canvas');
        const ctx = canvas_el.getContext('2d');

        const download_btn_el = document.getElementById('download-img');
        let backup_bgrn_color = '';
        if (download_btn_el) {
            backup_bgrn_color = download_btn_el.style.backgroundColor;
            download_btn_el.style.backgroundColor = 'gray';
            download_btn_el.style.borderColor = 'gray';
        }
        
        const el = document.getElementById('READ-EXIF2');
        if (el) {
            el.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    file_name = file.name.split('.').slice(0, -1).join('.');
                    file_ext = file.name.split('.').pop().toLowerCase();

                    const valid_ext = ['jpg', 'jpeg', 'png', 'tiff'];
                    if (valid_ext.includes(file_ext)) {
                        const reader = new FileReader();
                        reader.onload = () => {
                            const img = new Image();
                            img.onload = () => {
                                canvas_el.width = img.width;
                                canvas_el.height = img.height;

                                ctx.drawImage(img, 0, 0);

                                img_url = canvas_el.toDataURL(`image/${file_ext === 'jpg' ? 'jpeg' : file_ext}`);

                                download_btn_el.style.backgroundColor = backup_bgrn_color;
                                download_btn_el.style.borderColor = backup_bgrn_color;
                                download_btn_el.disabled = false;
                            };
                            img.src = reader.result;
                        };
                        reader.readAsDataURL(file);
                    }
                }
            });
        }
        
        download_btn_el.addEventListener('click', (e) => {
            e.preventDefault();

            if (img_url) {
                const a = document.createElement('a');
                a.href = img_url;
                a.download = `${file_name}_without_exif.${file_ext}`; // 원래 확장자로 다운로드
                a.click();
            }
        });
    });
</script>

??? info "서버에 이미지 정보가 저장되지 않아요!"
    이미지 파일은 사용자가 사용하는 웹 브라우저를 통해 코드 수행 및 분석되기 때문에 별도의 서버에 데이터가 저장되지 않습니다.

    본 게시글은 이미지 파일의 EXIF 확인을 위해 [exif-js](https://github.com/exif-js/exif-js "exif-js")를 사용하고 있습니다.