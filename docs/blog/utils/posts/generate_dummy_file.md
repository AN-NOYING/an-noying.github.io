---
authors: [annoying]
date: 2024-05-24
# readtime: 5
title: 더미 데이터 파일 생성하기
comments: true
---

# 더미 데이터 파일 생성기

<!-- more -->

## 개요

프로그래밍이나 기타 작업을 수행할 때 더미 데이터가 필요한 경우가 있습니다. 즉, 테스트용으로 사용할 쓸모없는(?) 파일이 필요한데... 내가 가진 자료 중에선 마땅한 게 없고 사용하기도 애매해서 따로 더미 데이터를 생성하는 코드를 작성해보았습니다. 

생성 후 다운로드하시기 전에 <ins>미리 저장 공간이 충분한지</ins> 확인해주세요.

<script>
    function calcFileSize(bytes, dp = 1) {
        if (Math.abs(bytes) < 1000) {
            return bytes + ' Bytes';
        }

        const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let u = -1;
        const r = 10**dp;

        do {
            bytes /= 1000;
            ++u;
        } while (Math.round(Math.abs(bytes) * r) / r >= 1000 && u < units.length - 1);


        return bytes.toFixed(dp) + ' ' + units[u];
    }
</script>

### 더미 텍스트 파일 생성

**A** 문자만 입력되는 더미 텍스트 파일을 생성합니다.

<p>
    <input style="width: 200px;" id="filesize1" type="number" min="1" placeholder="크기"> ≒ <span class="convert-size1"></span>
</p>

[생성 및 다운로드](#none){ .md-button .generateTXT }

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const element = document.querySelector('a.generateTXT');
        if (element) {
            element.addEventListener('click', (e) => {
                const filesize = document.querySelector('#filesize1');
                if (filesize) {
                    const val = filesize.value;
                    if (val <= 0) {
                        alert('0을 초과하는 크기를 입력해주세요');
                        e.preventDefault();
                        return;
                    }

                    const contents = 'A'.repeat(val);
                    const blob = new Blob([contents], { type: 'text/plain' });

                    element.href = URL.createObjectURL(blob);
                    element.download = 'dummy.txt';
                }
            });
        }

        const element2 = document.querySelector('#filesize1');
        if (element2) {
            element2.addEventListener('input', () => {        
                // Calculate Size
                // ref: https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
                const convert_size = document.querySelector('.convert-size1');
                if (convert_size) {
                    convert_size.textContent = `${calcFileSize(element2.value)}`;
                }
            });
        }
    });
</script>


### 더미 바이너리 파일 생성

원하는 바이트 값(0x00 ~ 0xFF)<sup>0 ~ 255</sup>을 입력하면 해당 바이트 값으로 채워 생성해주는 더미 바이너리 데이터 파일을 생성합니다.

<p>
    <input style="width: 200px;" type="number" id="byte_value" min="0" max="255" placeholder="바이트 값">
</p>
<p>
    <input style="width: 200px;" type="number" id="filesize2" min="1" placeholder="크기"> ≒ <span class="convert-size2"></span>
</p>

[생성 및 다운로드](#none){ .md-button .generateBIN }

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const element = document.querySelector('a.generateBIN');
        if (element) {
            element.addEventListener('click', (e) => {
                const byte_val = document.querySelector('#byte_value');
                const filesize = document.querySelector('#filesize2');

                if (byte_val) {
                    if (byte_val.value < 0 || byte_val.value > 255) {
                        alert('0 ~ 255 사이의 수로 입력해주세요.');
                        e.preventDefault();
                        return;
                    }
                }

                if (filesize) {
                    const val = filesize.value;
                    if (val <= 0) {
                        alert('0을 초과하는 크기를 입력해주세요');
                        e.preventDefault();
                        return;
                    }

                    const byte_arr = new Uint8Array(val); byte_arr.fill(Number(byte_val.value))
                    const blob = new Blob([byte_arr], { type: 'application/octet-stream' });

                    element.href = URL.createObjectURL(blob);
                    element.download = 'dummy.bin';
                }
            });
        }

        const element2 = document.querySelector('#filesize2');
        if (element2) {
            element2.addEventListener('input', () => {        
                // Calculate Size
                // ref: https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
                const convert_size = document.querySelector('.convert-size2');
                if (convert_size) {
                    convert_size.textContent = `${calcFileSize(element2.value)}`;
                }
            });
        }
    });
</script>