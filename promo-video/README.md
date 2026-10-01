# 소프라노 지정윤 PR 영상 (30초, 세로형 9:16)

결과물: `sopranoji-pr-30s.mp4` — 1080×1920, 30fps, H.264 + AAC, 30초

홈페이지(`public/images`, 소개·성악가·지휘자 페이지, 공연 데이터)의 사진과 프로필만 사용했습니다.

| 시간 | 장면 | 내용 (출처) |
| --- | --- | --- |
| 0–4초 | 인트로 | SOPRANO · CONDUCTOR / 지정윤 / JI JOUNGYUN (홈) |
| 4–7초 | 성악가 | 무대 위에서는 노래로 위로를 전합니다 (홈 소개 문구) |
| 7–10초 | 학력 | 숙명여대 성악과 석사, 이탈리아 페스카라 시립음악원 최고연주자과정 (소개) |
| 10–14초 | 지휘자 | 세종리틀싱어즈 단장·상임지휘자 (소개·지휘자) |
| 14–17초 | 수상 | World Choir Games Silver Diploma, 세종시 예술인상, 교육감상·지도자상 (소개) |
| 17–20초 | 튀김소보체 | 클래시컬 쇼콰이어 몽타주 (튀김소보체 갤러리) |
| 20–23초 | 활동 | 성악가 · 지휘자 · 인문학 강사 · 싱투게더콰이어 |
| 23–26초 | 다가오는 공연 | 10.9–10.10 세종거리예술가 콘서트, 10.24 〈Taste of Classic〉 (`src/data/performances.ts`) |
| 26–30초 | 엔딩 | 소프라노 지정윤 / 섭외 문의 / sopranoji.vercel.app |

배경음악은 `make-music.py`로 직접 합성한 피아노·패드 음원이라 저작권 문제가 없습니다.

## 다시 만들기

필요: Node + Playwright(Chromium), Python 3, ffmpeg, 시스템에 설치된 `Noto Sans KR`·`Noto Serif KR` 폰트

```bash
cd promo-video
python3 make-music.py music.wav 30
node render-frames.mjs frames 30
ffmpeg -framerate 30 -i frames/f%05d.jpg -i music.wav \
  -filter_complex "[1]aecho=0.8:0.7:60|120|240:0.35|0.25|0.15,lowpass=f=7000,afade=t=in:d=0.6,afade=t=out:st=28.3:d=1.7,pan=stereo|c0=c0|c1=c0,volume=0.9[a]" \
  -map 0:v -map "[a]" -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p \
  -movflags +faststart -c:a aac -b:a 192k -shortest sopranoji-pr-30s.mp4
```

문구·사진·타이밍은 `promo.html`에서 고칩니다. 브라우저로 열면 실시간 미리보기가 재생되고, `promo.html?t=12.5`처럼 열면 해당 시점 화면을 볼 수 있습니다.
