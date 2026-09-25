# Instagram promo reel

`ivertim-promo-reel.mp4` — 1080×1920 (9:16), 30 fps, 25 s, H.264, bez zvuka (muziku dodati u Instagram aplikaciji).

Napravljeno isključivo od postojećih brand resursa: stvarne fotografije iz fabrike (`src/assets/photos-raw/`), SVG logotipi i Signature Shape (`public/images/`), boje/easing iz `design-system/`, Instrument Sans. Tekst je preuzet iz već odobrenog copyja (brand essence, nazivi usluga, 16+/500+, kontakt podaci).

Tekst i ključni elementi drže se u sredini kadra, van zona koje Instagram UI prekriva (gore ~250px, dolje ~350px).

## Ponovno renderovanje

`promo-reel.html` ima determinističku funkciju `render(t)`; otvoren u browseru i sam se vrti u petlji (pregled). Za MP4 (potrebni `npm install`, Playwright i ffmpeg sa libx264):

```
cd marketing/instagram
FF=/putanja/do/ffmpeg node render.mjs ivertim-promo-reel.mp4 30
```

Tajming scena je u objektu `T` unutar skripte.
