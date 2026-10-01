"""PR 영상용 배경음악을 직접 합성한다 (저작권 걱정 없는 자체 제작 음원).

피아노풍 아르페지오 + 부드러운 패드로 C장조 진행을 연주한다.
사용법: python3 make-music.py <출력.wav> [길이(초)]
"""
import math
import random
import struct
import sys
import wave

SR = 44100
OUT = sys.argv[1] if len(sys.argv) > 1 else "music.wav"
DUR = float(sys.argv[2]) if len(sys.argv) > 2 else 30.0

BPM = 76
BEAT = 60 / BPM
BAR = BEAT * 4

def hz(midi):
    return 440.0 * 2 ** ((midi - 69) / 12)

# 화성 진행 (MIDI 음 번호): C - G/B - Am - F - C/E - Dm7 - Gsus4 - G - C
CHORDS = [
    [48, 55, 60, 64, 67],
    [47, 55, 59, 62, 67],
    [45, 52, 57, 60, 64],
    [41, 53, 57, 60, 65],
    [40, 55, 60, 64, 67],
    [38, 53, 57, 60, 65],
    [43, 55, 60, 62, 67],
    [43, 55, 59, 62, 67],
    [48, 55, 60, 64, 72],
]
MELODY = [  # (박 위치, MIDI, 길이(박)) — 마디마다 단순한 선율
    [(0, 76, 2), (2, 79, 2)],
    [(0, 74, 3), (3, 71, 1)],
    [(0, 72, 2), (2, 76, 2)],
    [(0, 77, 3), (3, 76, 1)],
    [(0, 79, 2), (2, 84, 2)],
    [(0, 81, 2), (2, 77, 2)],
    [(0, 79, 4)],
    [(0, 79, 2), (2, 83, 2)],
    [(0, 84, 4)],
]

n = int(SR * DUR)
buf = [0.0] * n

def add_note(start, freq, length, amp, decay, harmonics=((1, 1.0), (2, 0.35), (3, 0.12), (4, 0.05))):
    s0 = int(start * SR)
    ln = int(length * SR)
    rel = int(0.25 * SR)
    for i in range(ln + rel):
        j = s0 + i
        if j >= n:
            break
        t = i / SR
        env = min(1.0, t / 0.006) * math.exp(-t * decay)
        if i > ln:
            env *= 1 - (i - ln) / rel
        v = 0.0
        for h, a in harmonics:
            v += a * math.sin(2 * math.pi * freq * h * t)
        buf[j] += amp * env * v

def add_pad(start, freqs, length, amp):
    s0 = int(start * SR)
    ln = int(length * SR)
    att = 0.6 * SR
    for i in range(ln):
        j = s0 + i
        if j >= n:
            break
        t = i / SR
        env = min(1.0, i / att, (ln - i) / att)
        v = 0.0
        for f in freqs:
            v += math.sin(2 * math.pi * f * t) + 0.5 * math.sin(2 * math.pi * f * 1.003 * t)
        buf[j] += amp * env * v / len(freqs)

random.seed(7)
for b, chord in enumerate(CHORDS):
    t0 = b * BAR
    if t0 >= DUR:
        break
    length = BAR if b < len(CHORDS) - 1 else max(0.5, DUR - t0)
    add_pad(t0, [hz(m) for m in chord[1:4]], length + 0.4, 0.05)
    add_note(t0, hz(chord[0]), BAR * 1.5, 0.22, 0.9)  # 베이스
    if b < len(CHORDS) - 1:
        pattern = [chord[1], chord[2], chord[3], chord[4], chord[3], chord[2], chord[3], chord[4]]
        for k, m in enumerate(pattern):  # 8분음표 아르페지오
            add_note(t0 + k * BEAT / 2, hz(m), BEAT * 1.2, 0.09 + random.uniform(-0.01, 0.01), 2.2)
    for beat, m, ln in MELODY[b]:
        add_note(t0 + beat * BEAT, hz(m), ln * BEAT, 0.13, 1.1)

peak = max(abs(x) for x in buf) or 1.0
with wave.open(OUT, "wb") as w:
    w.setnchannels(1)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes(b"".join(struct.pack("<h", int(32767 * 0.85 * x / peak)) for x in buf))
print(f"wrote {OUT} ({DUR}s)")
