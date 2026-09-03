---
name: ivertim-copywriting
description: Piše ili provjerava bilo koji tekst za Ivertim sajt (nove stranice, blog/savjeti članke, mikrokopi, formulare, meta opise) u zaključanom Ivertim tonu. Koristi kad god treba napisati novi copy koji još ne postoji u docs/04 - Copywriting/, ili provjeriti da li postojeći/pristigli copy odgovara zaključanom tonu. Ne koristi za oglase, email kampanje, funnel ili prodajne skripte — za to postoji odvojen, opšti skill (balkan-direct-response-master); ova dva se ne miješaju.
license: Internal
---

# Ivertim Copywriting

Ovaj skill je operativna destilacija seta u `docs/04 - Copywriting/` — **ne zamjenjuje ga**. Kad tekst za neku stranicu već postoji kao finalna kopija u odgovarajućem blueprintu, koristi taj tekst doslovno (vidi mapu ispod), ne piši novi. Ovaj skill služi za sve što blueprintovi ne pokrivaju — blog članke, mikrokopi, greške u formi, meta opise, i za brzu provjeru tona bilo kog teksta koji stiže spolja (od vlasnika ili ChatGPT-a).

Ako nešto ovdje i sadržaj u `docs/04 - Copywriting/00 - Communication System.md` protivrječe, taj dokument ima prednost — javi vlasniku, ne rješavaj sam.

## Kad NE koristiti ovaj skill

Ivertim sajt gradi povjerenje, ne pritiska na konverziju u jednom skrolu. Za oglase, email sekvence, landing stranice sa funnel logikom, prodajne skripte ili bilo šta gdje je cilj direktna konverzija — to je posao skilla `balkan-direct-response-master`, namjerno odvojenog jer koristi drugačiji, agresivniji registar. Ne miješaj ta dva pristupa unutar sajta.

## Suština brenda

**Kompetentnost kojoj vjeruješ.** Ivertim je čovjek od povjerenja koji zna svoj posao, ne govori više nego treba, ne obećava nerealno, ne skriva problem, preuzima odgovornost.

Ton: miran, stručan, jednostavan, siguran, prijateljski, nenametljiv.
Nikad: agresivno, previše marketinški, bahato, pretenciozno, komplikovano.

Verbalni princip: *Slušaj → postavi pitanja → shvati → izmjeri → predloži.*

## Šta prodajemo (dvije publike, isti princip)

Ne prodajemo predmet, prodajemo ishod. Ishod nije isti za obje usluge:

**Namještaj po mjeri** — ne prodajemo kuhinje/plakare/komode/police; prodajemo funkcionalnost, sigurnost, organizaciju, kvalitet života, dobro planiran prostor.

**Uslužno rezanje, kantovanje i bušenje** — ne prodajemo mašine ni proces; prodajemo precizan, pouzdan rezultat i poštovan rok.

Redoslijed razmišljanja pri pisanju:
- Namještaj po mjeri: Čovjek → Prostor → Problem → Rješenje → Namještaj
- Uslužno rezanje: Čovjek → Projekat/radionica → Problem → Rješenje → Materijal

Nikad obrnuto (ne kreni od proizvoda/usluge ka čovjeku).

## Kako pišemo

- kratke rečenice, jednostavne riječi, aktivan govor, konkretni primjeri;
- jedna sekcija = jedna ideja = jedna poruka = jedan CTA;
- fotografija/dokaz dolazi POSLIJE poruke, nikad prije;
- bez stručnog žargona, bez dugih pasusa, bez ponavljanja;
- ako rečenica ne pomaže korisniku da lakše donese odluku — briši je.

## Zabranjeno

"najbolji", "vrhunski", "lider", "broj jedan", "najkvalitetniji", "garantujemo savršenstvo", "revolucionarno rješenje", bilo koji superlativ bez dokaza iza njega, lažna hitnost, pritisak, prazne premium fraze, generički korporativni govor.

## CTA sistem

Primarni CTA cijelog sajta je uvijek **Razgovarajmo** (radni naziv, vidi Open Questions u `CLAUDE.md` — nije nužno finalna riječ, ali je jedini CTA dok se ne kaže drugačije). Mijenja se samo kontekst koji vodi do njega:

- Razgovarajmo o vašem prostoru.
- Razgovarajmo o vašem projektu.
- Razgovarajmo o mogućnostima.

Jedan CTA po sekciji/stranici. Sekundarni CTA (npr. "Pogledajte kako radimo") dozvoljen je samo kao manje istaknuta opcija pored primarnog, nikad zamjena.

## Emocija po tipu stranice/sadržaja

Svaka stranica ili članak ima JEDNU dominantnu emociju, ne pokušava izazvati više odjednom:

Uslužno rezanje → pouzdanost · Kuhinje → zajedništvo · Plakari → red · Poslovni prostori → profesionalnost · Hoteli → iskustvo · Proces → sigurnost · Kontakt → povjerenje

## Gdje finalna kopija već postoji — koristi je doslovno

| Stranica/dio | Fajl | Status |
|---|---|---|
| Home | `Home-Blueprint-v1.0-Full.md` | v1.1, final copy za sve sekcije |
| Usluge (landing) | `Services-Landing-Blueprint-v1.0.md` | v1.1, final copy |
| Uslužno rezanje (detaljna) | `Cutting-Service-Blueprint-v1.0.md` | v1.0, final copy |
| Proces saradnje | `Process-Blueprint-v1.0.md` | v1.1, final copy (oba toka procesa) |
| Projekti (landing) | `Projects-Blueprint-v1.0.md` | v1.0, final copy |
| Projekat (template) | `Project-Template-Blueprint-v1.0.md` | v1.0, struktura + smjernice |
| Savjeti/Blog (landing) | `Advice-Blueprint-v1.0.md` | v1.0, final copy |
| Savjeti/Blog (template) | `Advice-Template-Blueprint-v1.0.md` | v1.0, struktura + smjernice |
| Kontakt | `Contact-Blueprint-v1.0.md` | v1.0, final copy |
| Kuhinje / Plakari / Dnevne sobe / Hoteli / Poslovni prostori / Ostalo po mjeri | `Kitchens-`, `Wardrobes-`, `Living-Room-`, `Hospitality-`, `Business-`, `Custom-Blueprint-v1.0.md` | final copy, koriste se kao kartice/primjeri unutar "Izrada namještaja po mjeri", ne kao zasebne stranice |

Svi fajlovi su u `docs/04 - Copywriting/`. Prije pisanja bilo čega za jednu od ovih stranica — otvori odgovarajući fajl prvo.

## Pisanje NOVOG sadržaja (blog/savjeti članci, mikrokopi, ono što blueprintovi ne pokrivaju)

Prati obrazac koji svaki page-level blueprint koristi:

1. **Svrha** — šta ova stranica/članak treba postići, jednom rečenicom.
2. **Šta ovo NIJE** — čemu se ne smije pretvoriti (prodajni pritisak, katalog, marketinški tekst).
3. **Psihološka putanja** — šta korisnik misli prije, šta poslije čitanja.
4. **Jedna dominantna emocija** (vidi listu iznad, ili definiši novu ako tema to traži).
5. **Final copy** — kratke rečenice, jedan CTA na kraju (skoro uvijek "Razgovarajmo", osim ako format traži drugačije, npr. "Pročitajte više").

Za blog/savjeti sadržaj konkretno — poštuj raspodjelu 50% edukativno / 30% prodajno-adjacent / 20% ostalo (`docs/08-marketing.md`), i teme iz iste liste (rezanje/kantovanje/bušenje tehnički detalji i kako naručiti su prioritet, zatim materijali, CNC proces, greške u mjerenju, organizacija prostora).

## Provjera tuđeg copy-ja (kad vlasnik/ChatGPT donese gotov tekst)

Prije prihvatanja, provjeri:

- [ ] Ima li superlativ ili prazna tvrdnja bez dokaza?
- [ ] Zvuči li agresivno prodajno ili koristi lažnu hitnost?
- [ ] Da li redoslijed ide čovjek→problem→rješenje, ili počinje od proizvoda?
- [ ] Da li ima više od jednog CTA-a ili više od jedne ideje po sekciji?
- [ ] Da li tačno razlikuje kojoj od dvije usluge pripada (rezanje vs. namještaj po mjeri) — ili ih miješa kao da je jedna stvar?
- [ ] Da li koristi "Razgovarajmo" kao CTA, ili nešto van sistema?

Ako nešto ne prođe — ne mijenjaj tiho. Objasni šta i zašto, predloži ispravku, i javi vlasniku ako mijenja smisao (ne samo formu).
