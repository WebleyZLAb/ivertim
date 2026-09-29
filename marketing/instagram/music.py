"""Procedural soundtrack for the Ivertim promo reel.

Everything is synthesized here (no samples, no licensed music), locked to the
video's 120 BPM grid: beat = 0.5 s, bar = 2 s, scene cuts at 3/6/9/12/15/19 s.
Mood: calm, precise, warm — progression in F major (vi–IV–I–V–ii–IV–V–I).
"""
import sys
import numpy as np
from scipy.signal import fftconvolve, butter, sosfilt

SR = 44100
DUR = 25.0
BEAT = 0.5
N = int(SR * DUR)
rng = np.random.default_rng(7)

L = np.zeros(N)
R = np.zeros(N)


def midi(n):
    return 440.0 * 2 ** ((n - 69) / 12)


def add(sig, t0, gain=1.0, pan=0.0):
    i = int(t0 * SR)
    if i >= N:
        return
    sig = sig[: N - i]
    l = np.cos((pan + 1) * np.pi / 4)
    r = np.sin((pan + 1) * np.pi / 4)
    L[i:i + len(sig)] += sig * gain * l
    R[i:i + len(sig)] += sig * gain * r


def env_adsr(n, a, d, s, rel, total):
    t = np.arange(n) / SR
    e = np.ones(n) * s
    e[t < a] = t[t < a] / a
    m = (t >= a) & (t < a + d)
    e[m] = 1 - (1 - s) * (t[m] - a) / d
    rm = t > total - rel
    e[rm] *= np.clip((total - t[rm]) / rel, 0, 1)
    return e


def lp(x, fc, order=2):
    return sosfilt(butter(order, fc, 'low', fs=SR, output='sos'), x)


def hp(x, fc, order=2):
    return sosfilt(butter(order, fc, 'high', fs=SR, output='sos'), x)


def bp(x, lo, hi, order=2):
    return sosfilt(butter(order, [lo, hi], 'band', fs=SR, output='sos'), x)


# ---------------------------------------------------------------- harmony
# (start, end, chord MIDI notes, bass root)
CH = [
    (0, 3, [62, 65, 69, 72, 76], 38),      # Dm9      intro
    (3, 6, [58, 62, 65, 69, 72], 34),      # Bbmaj7   01 Rezanje
    (6, 9, [57, 60, 65, 67, 72], 41),      # F/A add9 02 Kantovanje
    (9, 12, [60, 64, 67, 69, 74], 36),     # C6/9     03 Bušenje
    (12, 15, [58, 62, 65, 67, 70], 43),    # Gm9      fabrika
    (15, 17, [58, 62, 65, 69, 74], 34),    # Bbmaj7   stats
    (17, 19, [60, 65, 67, 70, 74], 36),    # C7sus    build
    (19, 25, [57, 60, 64, 65, 67, 72], 41),  # Fmaj9  resolution / outro
]


def pad_voice(f, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = np.zeros(n)
    for det in (-0.08, 0.0, 0.07):                # gentle chorus
        ff = f * 2 ** (det / 12)
        for h, a in ((1, 1), (2, 0.35), (3, 0.15), (4, 0.06)):
            s += a * np.sin(2 * np.pi * ff * h * t + rng.uniform(0, 6.28))
    return s


for (a, b, notes, root) in CH:
    last = b >= DUR
    dur = (b - a) + (0 if last else 0.6)
    n = int(dur * SR)
    e = env_adsr(n, 0.35 if a else 1.6, 0.8, 0.8, 2.6 if last else 0.6, dur)
    ch = sum(pad_voice(midi(m), dur) for m in notes) * e
    ch = lp(ch, 2600 if a < 19 else 3400)
    add(ch, a, 0.030, pan=-0.25)
    add(np.roll(ch, 180), a, 0.030, pan=0.25)

# ---------------------------------------------------------------- bass
def bass_note(f, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = np.sin(2 * np.pi * f * t) + 0.25 * np.sin(2 * np.pi * 2 * f * t)
    return s * env_adsr(n, 0.01, 0.15, 0.7, 0.08, dur)


for (a, b, notes, root) in CH:
    if a < 3:
        continue
    end = min(b, 23.0)
    t = a
    while t < end - 1e-6:
        step = BEAT if a < 15 else BEAT / 2         # eighths in the build
        add(bass_note(midi(root), step * 0.9), t, 0.20)
        t += step
    if a >= 19:
        add(bass_note(midi(root), 4.0) * np.linspace(1, 0, int(4.0 * SR)), 19.0, 0.22)

# ---------------------------------------------------------------- drums
def kick():
    n = int(0.45 * SR)
    t = np.arange(n) / SR
    f = 48 + 90 * np.exp(-t * 28)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t * 7.5) + 0.3 * np.exp(-t * 80) * rng.standard_normal(n) * 0.2


def hat(open_=False):
    n = int((0.18 if open_ else 0.05) * SR)
    t = np.arange(n) / SR
    return hp(rng.standard_normal(n), 7500) * np.exp(-t * (18 if open_ else 70))


def snap():
    n = int(0.22 * SR)
    t = np.arange(n) / SR
    body = bp(rng.standard_normal(n), 900, 4200) * np.exp(-t * 22)
    return body + 0.4 * np.sin(2 * np.pi * 190 * t) * np.exp(-t * 35)


KICK, HAT, OHAT, SNAP = kick(), hat(), hat(True), snap()

beats = np.arange(0, DUR, BEAT)
for b in beats:
    # kick: half-time from 01, four-on-the-floor in the build, light in outro
    if 3 <= b < 15 and ((b - 3) % 1.0 == 0):
        add(KICK, b, 0.55)
    elif 15 <= b < 19:
        add(KICK, b, 0.6)
    elif 19 <= b < 23 and ((b - 19) % 2.0 == 0):
        add(KICK, b, 0.45)
    # snap on 2 & 4 from 03 Bušenje
    if 9 <= b < 19 and ((b - 9) % 1.0 == 0.5):
        add(SNAP, b, 0.16, pan=0.1)

for k in np.arange(6, 19, BEAT / 2):               # 8th-note hats from 02
    add(HAT, k, 0.05 if (k * 4) % 2 else 0.08, pan=0.35)
for k in np.arange(17, 19, BEAT / 4):              # 16ths in the build
    add(HAT, k, 0.035, pan=-0.35)
for k in np.arange(9.25, 19, 1.0):                 # off-beat open hat
    add(OHAT, k, 0.035, pan=0.3)

# ---------------------------------------------------------------- pluck arpeggio
def pluck(f, dur=0.6):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = sum(a * np.sin(2 * np.pi * f * h * t) * np.exp(-t * (6 + 5 * h)) for h, a in ((1, 1), (2, .5), (3, .25), (4, .12)))
    return s * np.minimum(1, t / 0.003)


for (a, b, notes, root) in CH:
    if a < 3 or a >= 19:
        continue
    step = BEAT / 2 if a < 12 else BEAT / 4
    seq = [notes[i] + 12 for i in (0, 2, 1, 3, 2, 4, 3, 1)]
    for i, t in enumerate(np.arange(a, b, step)):
        add(pluck(midi(seq[i % len(seq)])), t, 0.045 if step == BEAT / 2 else 0.035,
            pan=0.4 * np.sin(i * 0.9))

# ---------------------------------------------------------------- transitions
def riser(dur=0.75):
    n = int(dur * SR)
    t = np.arange(n) / SR
    x = rng.standard_normal(n)
    out = np.zeros(n)
    seg = 512
    for i in range(0, n, seg):                        # sweeping band-pass
        k = i / n
        lo = 300 + 5000 * k ** 2
        out[i:i + seg] = bp(x[i:i + seg], lo, lo * 1.8, 1)
    return out * (t / dur) ** 2.2


def impact():
    n = int(1.6 * SR)
    t = np.arange(n) / SR
    boom = np.sin(2 * np.pi * (40 + 30 * np.exp(-t * 10)) * t) * np.exp(-t * 3.2)
    air = lp(rng.standard_normal(n), 3000) * np.exp(-t * 9) * 0.35
    return boom + air


RIS, IMP = riser(), impact()
for c in (3, 6, 9, 12, 15, 19):
    add(RIS, c - 0.75, 0.22 if c != 19 else 0.3)
    add(IMP, c, 0.55 if c in (3, 19) else 0.35)

# ---------------------------------------------------------------- stats ticks (match the count-up easing)
def tick(f=2400):
    n = int(0.03 * SR)
    t = np.arange(n) / SR
    return np.sin(2 * np.pi * f * t) * np.exp(-t * 180)


def count_times(start, target, dur=1.5, every=1):
    ts = []
    last = 0
    for fr in range(int(dur * 600) + 1):
        p = fr / (dur * 600)
        v = round(target * (1 - (1 - p) ** 3))
        if v >= last + every:
            ts.append(start + p * dur)
            last = v
    return ts


for t in count_times(15.5, 16):
    add(tick(2600), t, 0.10, pan=-0.2)
for t in count_times(16.0, 500, every=20):
    add(tick(3100), t, 0.08, pan=0.2)

# ---------------------------------------------------------------- bells (logo moments)
def bell(f, dur=2.5):
    n = int(dur * SR)
    t = np.arange(n) / SR
    mod = 2.2 * np.exp(-t * 3) * np.sin(2 * np.pi * f * 3.5 * t)
    return np.sin(2 * np.pi * f * t + mod) * np.exp(-t * 2.2) * np.minimum(1, t / 0.004)


add(bell(midi(81)), 0.0, 0.06)            # intro mark
add(bell(midi(84)), 0.5, 0.05, pan=0.2)   # wordmark
add(bell(midi(77)), 19.5, 0.08)           # outro logo
add(bell(midi(81)), 20.5, 0.06, pan=-0.2)  # CTA
add(bell(midi(84)), 21.0, 0.05, pan=0.2)   # contact

# ---------------------------------------------------------------- reverb + master
def ir(sec, seed):
    r = np.random.default_rng(seed)
    n = int(sec * SR)
    t = np.arange(n) / SR
    return lp(r.standard_normal(n), 6000) * np.exp(-t * 3.0)


dry = np.stack([L, R])
wetL = fftconvolve(L, ir(2.2, 1))[:N]
wetR = fftconvolve(R, ir(2.2, 2))[:N]
wet = np.stack([wetL, wetR])
wet *= np.max(np.abs(dry)) / (np.max(np.abs(wet)) + 1e-9) * 0.35
mix = hp(dry + wet, 28)

# fade in/out
t = np.arange(N) / SR
mix *= np.clip(t / 0.25, 0, 1) * np.clip((DUR - t) / 2.0, 0, 1)

# gentle glue + limiter
mix = np.tanh(mix / np.max(np.abs(mix)) * 1.6) / np.tanh(1.6)
mix *= 0.89  # ~ -1 dBFS peak

out = sys.argv[1] if len(sys.argv) > 1 else 'music.wav'
pcm = (mix.T * 32767).astype(np.int16)
import wave
with wave.open(out, 'wb') as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print('wrote', out)
