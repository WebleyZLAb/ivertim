"""Procedural soundtrack for the Ivertim promo reel — energetic pop version.

Everything is synthesized here (no samples, no licensed music), locked to the
video's 120 BPM grid: beat = 0.5 s, bar = 2 s, scene cuts at 3/6/9/12/15/19 s.
Pop/dance feel: four-on-the-floor, claps on 2 & 4, sidechain-pumped supersaw
chords, driving octave bass, a lead hook per scene, a build over the stats
scene and a drop on the closing card. Progression in F major
(vi–IV–I–V–ii–IV–V–I), one chord per scene.
"""
import sys
import wave
import numpy as np
from scipy.signal import fftconvolve, butter, sosfilt, sawtooth

SR = 44100
DUR = 25.0
BEAT = 0.5
N = int(SR * DUR)
T = np.arange(N) / SR
rng = np.random.default_rng(7)

# separate buses so the kick can pump the music bus (sidechain)
DRUM_L, DRUM_R = np.zeros(N), np.zeros(N)
MUS_L, MUS_R = np.zeros(N), np.zeros(N)
FX_L, FX_R = np.zeros(N), np.zeros(N)


def midi(n):
    return 440.0 * 2 ** ((n - 69) / 12)


def add(bus, sig, t0, gain=1.0, pan=0.0):
    Lb, Rb = bus
    i = int(round(t0 * SR))
    if i >= N or i < 0:
        return
    sig = sig[: N - i]
    Lb[i:i + len(sig)] += sig * gain * np.cos((pan + 1) * np.pi / 4)
    Rb[i:i + len(sig)] += sig * gain * np.sin((pan + 1) * np.pi / 4)


DRUMS, MUSIC, FX = (DRUM_L, DRUM_R), (MUS_L, MUS_R), (FX_L, FX_R)


def lp(x, fc, order=2):
    return sosfilt(butter(order, fc, 'low', fs=SR, output='sos'), x)


def hp(x, fc, order=2):
    return sosfilt(butter(order, fc, 'high', fs=SR, output='sos'), x)


def bp(x, lo, hi, order=2):
    return sosfilt(butter(order, [lo, hi], 'band', fs=SR, output='sos'), x)


def env(n, a, rel_rate):
    t = np.arange(n) / SR
    return np.minimum(1, t / a) * np.exp(-t * rel_rate)


# ---------------------------------------------------------------- harmony
CH = [
    (0, 3, [62, 65, 69, 72], 38),        # Dm      intro
    (3, 6, [58, 62, 65, 69], 34),        # Bbmaj7  01 Rezanje
    (6, 9, [60, 65, 69, 72], 41),        # F       02 Kantovanje
    (9, 12, [60, 64, 67, 72], 36),       # C       03 Bušenje
    (12, 15, [62, 65, 67, 70], 43),      # Gm7     fabrika
    (15, 17, [58, 62, 65, 69], 34),      # Bbmaj7  stats
    (17, 19, [60, 65, 67, 70], 36),      # C7sus   build
    (19, 25, [60, 64, 65, 69, 72], 41),  # Fmaj7   drop / outro
]


def chord_at(t):
    for a, b, notes, root in CH:
        if a <= t < b:
            return notes, root
    return CH[-1][2], CH[-1][3]


def supersaw(f, dur, voices=5, spread=0.14):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = np.zeros(n)
    for k in range(voices):
        det = (k - (voices - 1) / 2) / ((voices - 1) / 2) * spread
        s += sawtooth(2 * np.pi * f * 2 ** (det / 12) * t + rng.uniform(0, 6.28))
    return s / voices


# pad bed (soft, filtered) — intro sweep opens up into the first cut
for a, b, notes, root in CH:
    dur = (b - a) + 0.4
    n = int(dur * SR)
    s = sum(supersaw(midi(m), dur, 3, 0.1) for m in notes)
    e = np.minimum(1, np.arange(n) / SR / 0.2) * np.clip((dur - np.arange(n) / SR) / 0.4, 0, 1)
    if a == 0:   # filter sweep up during the intro
        seg = int(0.05 * SR)
        out = np.zeros(n)
        for i in range(0, n, seg):
            fc = 300 + 3500 * (i / n) ** 2
            out[i:i + seg] = lp(s[i:i + seg], fc)
        s = out
    else:
        s = lp(s, 3200 if a < 19 else 4200)
    if a == 19:  # long ring-out
        e *= np.clip((DUR - a - np.arange(n) / SR) / 3.0, 0, 1)
    add(MUSIC, s * e, a, 0.05, -0.2)
    add(MUSIC, np.roll(s * e, 220), a, 0.05, 0.2)

# offbeat supersaw stabs (the pop "pump")
STAB_ON = [(3, 18.5), (19, 23.0)]
for s0, s1 in STAB_ON:
    for t in np.arange(s0 + BEAT / 2, s1, BEAT):
        notes, _ = chord_at(t)
        dur = 0.22
        n = int(dur * SR)
        s = sum(supersaw(midi(m + 12), dur) for m in notes)
        s = lp(s, 5200) * env(n, 0.004, 9)
        add(MUSIC, s, t, 0.09, 0.0)

# ---------------------------------------------------------------- bass (octave-jumping 8ths)
def bass(f, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = sawtooth(2 * np.pi * f * t) * 0.6 + np.sin(2 * np.pi * f * t)
    return lp(s, 900) * env(n, 0.003, 5)


for t in np.arange(3, 23.0, BEAT / 2):
    if 18.5 <= t < 19:           # silence before the drop
        continue
    _, root = chord_at(t)
    up = int(round(t * 4)) % 2   # alternate root / octave
    add(MUSIC, bass(midi(root + 12 * up), BEAT / 2 * 0.95), t, 0.28)
add(MUSIC, bass(midi(41), 1.5), 23.0, 0.3)   # final low F

# ---------------------------------------------------------------- lead hook (one phrase per scene)
def lead(f, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    vib = 1 + 0.004 * np.sin(2 * np.pi * 5.5 * t) * np.minimum(1, t / 0.15)
    ph = 2 * np.pi * f * np.cumsum(vib) / SR
    s = 0.6 * np.sign(np.sin(ph)) * 0.5 + sawtooth(ph) * 0.5
    s = lp(s, 3800)
    return s * np.minimum(1, t / 0.005) * np.clip((dur - t) / 0.04, 0, 1) * np.exp(-t * 1.2)


# (beat offset, chord-tone index (+octave), length in beats)
HOOK = [(0, 3, 0.5), (0.5, 2, 0.5), (1, 3, 0.75), (1.75, 1, 0.75), (2.5, 2, 0.5),
        (3, 3, 1.0), (4, 4, 0.5), (4.5, 3, 0.5), (5, 2, 1.0)]
for a, b, notes, root in CH:
    if a < 3 or a >= 17:
        continue
    tones = sorted(notes) + [notes[0] + 12, notes[1] + 12]
    for off, idx, ln in HOOK:
        f = midi(tones[idx] + 12)
        add(MUSIC, lead(f, ln * BEAT * 0.95), a + off * BEAT, 0.06, 0.15)
        if a >= 12:  # double an octave up in the last photo scene
            add(MUSIC, lead(f * 2, ln * BEAT * 0.95), a + off * BEAT, 0.025, -0.15)
# hook returns on the drop
tones = sorted(CH[-1][2]) + [CH[-1][2][0] + 12, CH[-1][2][1] + 12]
for off, idx, ln in HOOK:
    add(MUSIC, lead(midi(tones[idx] + 12), ln * BEAT * 0.95), 19 + off * BEAT, 0.065, 0.15)

# ---------------------------------------------------------------- drums
def kick():
    n = int(0.4 * SR)
    t = np.arange(n) / SR
    f = 50 + 140 * np.exp(-t * 35)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 8)
    click = hp(rng.standard_normal(n), 3000) * np.exp(-t * 300) * 0.3
    return np.tanh((s + click) * 1.8)


def clap():
    n = int(0.3 * SR)
    t = np.arange(n) / SR
    e = np.zeros(n)
    for d in (0, 0.010, 0.020):                      # three quick hand hits
        e += np.exp(-np.clip(t - d, 0, None) * 60) * (t >= d)
    e += np.exp(-t * 12) * 0.4                       # room tail
    return bp(rng.standard_normal(n), 900, 5000) * e


def hat(open_=False):
    n = int((0.22 if open_ else 0.04) * SR)
    t = np.arange(n) / SR
    return hp(rng.standard_normal(n), 8000) * np.exp(-t * (14 if open_ else 90))


def snare():
    n = int(0.18 * SR)
    t = np.arange(n) / SR
    return (bp(rng.standard_normal(n), 1500, 7000) * 0.8 + np.sin(2 * np.pi * 200 * t) * 0.5) * np.exp(-t * 25)


KICK, CLAP, HAT, OHAT, SNR = kick(), clap(), hat(), hat(True), snare()
kick_times = []


def k(t, g=0.8):
    add(DRUMS, KICK, t, g)
    kick_times.append(t)


for t in np.arange(0, DUR, BEAT):
    main = 3 <= t < 18.5 or 19 <= t < 23
    if main:
        k(t)
        if (t * 2) % 2 == 1:                           # beats 2 & 4
            add(DRUMS, CLAP, t, 0.35, 0.05)
        add(DRUMS, OHAT, t + BEAT / 2, 0.06, 0.3)      # offbeat open hat
for t in np.arange(3, 23, BEAT / 4):                    # 16th hats
    if 18.5 <= t < 19:
        continue
    acc = 0.055 if (round(t * 8) % 2 == 0) else 0.03
    add(DRUMS, HAT, t, acc, -0.3)
k(23.0, 0.9)                                            # final hit

# intro: kick heartbeat + snare roll into the first cut
for t in (1.0, 1.5, 2.0, 2.5):
    k(t, 0.55)
for t in np.arange(2.0, 3.0, BEAT / 4):
    add(DRUMS, SNR, t, 0.10 + 0.18 * (t - 2.0))

# build over the stats scene: accelerating snare roll before the drop
roll = []
t = 17.0
step = BEAT / 2
while t < 18.5:
    roll.append(t)
    if t >= 17.5:
        step = BEAT / 4
    if t >= 18.0:
        step = BEAT / 8
    t += step
for i, t in enumerate(roll):
    add(DRUMS, SNR, t, 0.10 + 0.25 * (i / len(roll)), 0.0)

# ---------------------------------------------------------------- transitions / FX
def riser(dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    x = rng.standard_normal(n)
    out = np.zeros(n)
    seg = 512
    for i in range(0, n, seg):
        lo = 300 + 6000 * (i / n) ** 2
        out[i:i + seg] = bp(x[i:i + seg], lo, lo * 1.8, 1)
    return out * (t / dur) ** 2


def impact():
    n = int(1.4 * SR)
    t = np.arange(n) / SR
    boom = np.sin(2 * np.pi * (38 + 40 * np.exp(-t * 12)) * t) * np.exp(-t * 3.5)
    crash = hp(rng.standard_normal(n), 4000) * np.exp(-t * 3.0) * 0.35
    return boom + crash


def downlifter():
    n = int(0.6 * SR)
    t = np.arange(n) / SR
    return np.sin(2 * np.pi * np.cumsum(900 * np.exp(-t * 5) + 80) / SR) * np.exp(-t * 5)


for c in (3, 6, 9, 12, 15):
    add(FX, riser(0.75), c - 0.75, 0.25)
    add(FX, impact(), c, 0.45 if c == 3 else 0.32)
add(FX, riser(2.0), 17.0, 0.35)          # long build into the drop
add(FX, downlifter(), 18.5, 0.12)
add(FX, impact(), 19.0, 0.7)             # the drop
add(FX, impact(), 23.0, 0.45)            # last hit


# stats count-up ticks, following the counters' ease-out curve
def tick(f):
    n = int(0.03 * SR)
    t = np.arange(n) / SR
    return np.sin(2 * np.pi * f * t) * np.exp(-t * 180)


def count_times(start, target, dur=1.5, every=1):
    ts, last = [], 0
    for fr in range(int(dur * 600) + 1):
        p = fr / (dur * 600)
        v = round(target * (1 - (1 - p) ** 3))
        if v >= last + every:
            ts.append(start + p * dur)
            last = v
    return ts


for t in count_times(15.5, 16):
    add(FX, tick(2600), t, 0.09, -0.2)
for t in count_times(16.0, 500, every=20):
    add(FX, tick(3100), t, 0.07, 0.2)


def bell(f, dur=2.0):
    n = int(dur * SR)
    t = np.arange(n) / SR
    mod = 2.2 * np.exp(-t * 3) * np.sin(2 * np.pi * f * 3.5 * t)
    return np.sin(2 * np.pi * f * t + mod) * np.exp(-t * 2.5) * np.minimum(1, t / 0.004)


add(FX, bell(midi(81)), 0.0, 0.07)
add(FX, bell(midi(84)), 0.5, 0.06, 0.2)
add(FX, bell(midi(84)), 20.5, 0.05, -0.2)   # CTA

# ---------------------------------------------------------------- sidechain + mix
duck = np.ones(N)
for kt in kick_times:
    i = int(kt * SR)
    n = int(0.28 * SR)
    t = np.arange(n) / SR
    shape = 1 - 0.7 * np.exp(-t * 14)
    j = min(N, i + n)
    duck[i:j] = np.minimum(duck[i:j], shape[: j - i])
MUS_L *= duck
MUS_R *= duck


def ir(sec, seed):
    r = np.random.default_rng(seed)
    n = int(sec * SR)
    t = np.arange(n) / SR
    return lp(r.standard_normal(n), 7000) * np.exp(-t * 4.0)


# bus balance (measured: music bus sat ~11 dB under drums before this)
music = np.stack([MUS_L, MUS_R]) * 2.4
fx = np.stack([FX_L, FX_R]) * 1.2
drums = np.stack([DRUM_L, DRUM_R]) * 0.7
send = music * 0.6 + fx
wet = np.stack([fftconvolve(send[0], ir(1.6, 1))[:N], fftconvolve(send[1], ir(1.6, 2))[:N]])
wet *= np.max(np.abs(send)) / (np.max(np.abs(wet)) + 1e-9) * 0.3

mix = hp(drums + music + fx + wet, 30)
mix *= np.clip(T / 0.05, 0, 1) * np.clip((DUR - T) / 1.8, 0, 1)

# bus compression-ish saturation + limiter
mix = np.tanh(mix / np.max(np.abs(mix)) * 1.8) / np.tanh(1.8)
mix *= 0.89

out = sys.argv[1] if len(sys.argv) > 1 else 'music.wav'
pcm = (mix.T * 32767).astype(np.int16)
with wave.open(out, 'wb') as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print('wrote', out)
