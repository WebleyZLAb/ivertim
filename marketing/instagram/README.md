# Instagram promo reel

`ivertim-promo-reel.mp4` — 1080×1920 (9:16), 30 fps, 25 s, H.264 + AAC stereo. Muzika je originalna, sintetizovana u kodu (`music.py`, bez semplova i licenci), 120 BPM, usklađena s animacijom: svaki rez scene pada na udarac (3/6/9/12/15/19 s), brojači u sceni sa statistikom prate „tik“ zvukovi, a logo i CTA na kraju zvono.

Ako želiš koristiti muziku iz Instagram biblioteke umjesto ove, u aplikaciji utišaj originalni zvuk.

Napravljeno isključivo od postojećih brand resursa: stvarne fotografije iz fabrike (`src/assets/photos-raw/`), SVG logotipi i Signature Shape (`public/images/`), boje/easing iz `design-system/`, Instrument Sans. Tekst je preuzet iz već odobrenog copyja (brand essence, nazivi usluga, 16+/500+, kontakt podaci).

Tekst i ključni elementi drže se u sredini kadra, van zona koje Instagram UI prekriva (gore ~250px, dolje ~350px).

## Ponovno renderovanje

`promo-reel.html` ima determinističku funkciju `render(t)`; otvoren u browseru i sam se vrti u petlji (pregled). Za MP4 (potrebni `npm install`, Playwright i ffmpeg sa libx264):

```
cd marketing/instagram
FF=/putanja/do/ffmpeg node render.mjs ivertim-promo-reel.mp4 30
```

Tajming scena je u objektu `T` unutar skripte i poravnat je na mrežu od 120 BPM (udarac 0,5 s, takt 2 s). Ako mijenjaš tajming, promijeni i vremena u `music.py`.

Muzika i spajanje (potrebni `numpy` i `scipy`):

```
python3 music.py music.wav
$FF -i silent.mp4 -i music.wav -c:v copy -c:a aac -b:a 256k -shortest ivertim-promo-reel.mp4
```
