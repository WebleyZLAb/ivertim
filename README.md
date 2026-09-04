# Ivertim

> Jedinstveni izvor istine za strategiju, brend, korisničko iskustvo, vizuelni sistem i budući razvoj Ivertim digitalnog proizvoda.

**Status:** dokumentacija zaključana (v2.1.0, uključuje 2026-09-02 pivot na uslužno rezanje kao primarnu uslugu i 2026-09-03 finalne SVG logo asset-e) + početni tehnički scaffold (Astro), sadržaj i vizuelni brandbook u izradi  
**Verzija:** 2.1.0  
**Primarni vlasnik projekta:** Ivertim  
**Primarni način rada:** Claude Design / Claude Code / GitHub

Za trenutni tehnički status, odluke i otvorena pitanja vidi [`CLAUDE.md`](CLAUDE.md) — ovaj README ostaje strateški izvor istine, `CLAUDE.md` je operativna memorija.

---

## 1. Namjena ovog repozitorija

Ovaj repozitorij nije kolekcija prijedloga niti inspiracija. On predstavlja zaključane odluke projekta Ivertim.

Prije dizajniranja, pisanja koda, izmjene komponenti ili uvođenja novih obrazaca, AI agent, dizajner ili developer mora prvo pročitati ovaj dokument i povezanu dokumentaciju.

Hijerarhija autoriteta:

1. Ovaj `README.md`
2. Dokumenti u `/docs`
3. Dokumenti u `/design-system`
4. Eksplicitna nova odluka vlasnika projekta
5. Postojeći kod
6. Pretpostavke AI agenta ili developera

Ako se postojeći kod razlikuje od dokumentacije, dokumentacija ima prednost, osim ako je kasnijom eksplicitnom odlukom dokumentacija proglašena zastarjelom.

Ako nešto nije definisano:

- ne izmišljati novu vrijednost;
- ne uvoditi novi obrazac bez potrebe;
- predložiti rješenje i objasniti posljedice;
- sačekati eksplicitnu odluku prije promjene arhitekture ili vizuelnog sistema.

---

## 2. Šta je Ivertim

Ivertim je firma iz Prijedora usmjerena na uslužno rezanje i obradu pločastih materijala i na proizvodnju pločastog namještaja po mjeri.

Glavne usluge (ažurirano 2026-09-02, eksplicitna odluka vlasnika — vidi `docs/00-strategy.md` i `CLAUDE.md`):

1. **uslužno rezanje, kantovanje i bušenje pločastih materijala** — primarna usluga i glavni proizvodni fokus (drvni centar);
2. **izrada pločastog namještaja po mjeri** (kuhinje, ormari, komode, cipelare i drugo) — i dalje puna usluga, sekundarna po komunikacionom prioritetu i kapacitetu.

3D projektovanje, CNC proces i transport/montaža ostaju dio procesa isporuke obje usluge, ne posebne stavke ponude. Kompletno opremanje stanova i kuća se i dalje dešava, ali kroz vlasnikovu postojeću mrežu saradnika — ne navodi se kao samostalna, marketinški istaknuta usluga na sajtu.

Ivertim nije brend koji prodaje obećanja, dekorativnu priču ili generičku tvrdnju da je „najbolji“. Ivertim je partner koji sluša, mjeri, planira, preuzima odgovornost i isporučuje dogovoreno rješenje.

---

## 3. Suština brenda

Radna suština brenda:

> **Kompetentnost kojoj vjeruješ.**

Ključni osjećaji koje brend mora stvarati:

- jasnoća;
- sigurnost;
- mir;
- povjerenje;
- osjećaj da proces vodi odgovorna i kompetentna osoba.

Ključne osobine:

- kompetentan;
- odgovoran;
- precizan;
- miran;
- jasan;
- nenametljiv;
- pouzdan.

Ivertim ne djeluje hladno, mehanički ili korporativno bez ljudskog kontakta. Preciznost mora biti spojena sa razumijevanjem čovjeka i njegovog prostora.

Detalji: [`docs/00-strategy.md`](docs/00-strategy.md) i [`docs/01-branding.md`](docs/01-branding.md).

---

## 4. Zaključani komunikacijski principi

Komunikacija je:

- kratka i jasna;
- direktna, ali ne gruba;
- kompetentna, ali ne nadmena;
- savjetodavna, a ne agresivno prodajna;
- zasnovana na konkretnom procesu i dokazima.

Ne koristiti:

- „mi smo najbolji“;
- „naš vrhunski tim“;
- „garantujemo savršenstvo“;
- prazne premium fraze;
- pretjerana obećanja;
- nejasne superlative;
- generički korporativni govor.

Preferirani način razmišljanja:

> Slušaj → postavi pitanja → shvati → izmjeri → predloži → potvrdi → proizvedi → isporuči → ostani odgovoran.

Detalji: [`docs/01-branding.md`](docs/01-branding.md).

---

## 5. Logo i vizuelni identitet

Zaključani pravac znaka:

- zaobljeni tlocrt;
- jedan precizan, kontrolisan potez;
- blag radijus;
- asocijacija na prostor, mjeru, CNC izrez i sklad;
- bez dodatnog slogana uz osnovni wordmark u prvoj fazi.

Fotografija:

- realna;
- proces, mjerenje, proizvodnja, materijali i prostor;
- bez generičkih stock scena;
- bez pretjerano stilizovanih i neprirodnih prikaza.

Vizuelni karakter:

- čist;
- prozračan;
- moderan;
- precizan;
- smiren;
- bez dekorativnog viška;
- premium kroz red, tipografiju, fotografiju i ritam, ne kroz efekte.

Asset fajlovi: finalni SVG (2026-09-03) za horizontalni lockup, znak, wordmark i Signature Shape, svaki u svijetloj i tamnoj primjeni — vidi [`docs/02-logo-identity.md`](docs/02-logo-identity.md) za kompletnu listu i status. Vertikalni lockup, favicon, app/social icon i monohromatske varijante još nisu stigli.

Detalji: [`docs/02-logo-identity.md`](docs/02-logo-identity.md) i [`docs/05-visual-experience.md`](docs/05-visual-experience.md).

---

## 6. Web iskustvo

Zaključana arhitektura sajta:

- Home
- Usluge
  - svaka ključna usluga ima zasebnu stranicu
- Projekti
  - svaki projekat ima zaseban URL
- Proces saradnje
- Blog / Savjeti
- Kontakt

Glavna UX logika:

- korisnik prvo mora razumjeti ko je Ivertim;
- zatim zašto je drugačiji;
- zatim dobiti dokaz;
- zatim razumjeti proces;
- zatim dobiti jasan sljedeći korak.

Svaka stranica ima jedno centralno pitanje. Svaka sekcija daje mikro-odgovor na dio tog pitanja.

Kontakt je jedina stranica bez otvorenog loopa. Tamo korisnik završava odlukom: šalje upit ili zaključuje da Ivertim nije pravi partner.

Glavni CTA u navigaciji je jedan, konkretan i nenametljiv. Radni naziv: **Razgovarajmo**.

Detalji: [`docs/03-web-experience.md`](docs/03-web-experience.md).

---

## 7. Vizuelno iskustvo

Prioriteti:

1. jasnoća;
2. hijerarhija;
3. čitljivost;
4. ritam;
5. dokaz;
6. vizuelni karakter;
7. animacija samo kada pomaže razumijevanju.

Whitespace ima prednost nad borderom. Border ima prednost nad shadowom. Shadow se koristi samo kada postoji stvarna elevacija.

Zabranjeni pravci:

- glassmorphism kao glavni stil;
- neumorphism;
- neon glow;
- obojene sjene;
- prenaglašeni gradijenti (izuzetak: odobreni `gradient-brand` na CTA/closing momentima — vidi `design-system/colors.md` §Gradients, odluka vlasnika 2026-09-04);
- „wow” efekti bez UX vrijednosti;
- carousel kao podrazumijevani obrazac za sadržaj/navigaciju (izuzetak: ambijentalne auto-rotirajuće hero fotografije bez dot-navigacije kao primarnog UX-a — ista odluka 2026-09-04);
- proizvoljne animacije;
- dekorativna kompleksnost.

Detalji: [`docs/05-visual-experience.md`](docs/05-visual-experience.md).

---

## 8. Design System

Kompletna specifikacija je u folderu `design-system`.

Obavezna pravila:

- koristiti base i semantic tokene;
- komponenta ne smije uvoditi vlastite proizvoljne vrijednosti;
- semantički token ima prednost nad direktnim base tokenom u komponentama;
- hardkodirani HEX i proizvoljni `px` nisu dozvoljeni kada postoji token;
- novi token se uvodi samo kada rješava ponovljiv problem koji postojeći sistem ne može riješiti;
- responsive sistem koristi kombinaciju breakpointa i fluidnih `clamp()` vrijednosti;
- precizne komponente ostaju fiksne ili diskretno mijenjane na breakpointima;
- tipografija i veliki layout razmaci mogu skalirati fluidno.

**Machine-ready izvor:** `design-system/tokens.css` sadrži sve konkretne implementacione vrijednosti (HEX, px, rem, ms, clamp formule). To je jedini izvor istine za implementaciju — `design-system/IMPLEMENTATION_TOKENS.md` objašnjava fluid formule i breakpointe. Ostali dokumenti u `/design-system` (colors.md, spacing.md, typography.md...) ostaju konceptualno objašnjenje i ne smiju se koristiti za izvođenje vrijednosti kad `tokens.css` već ima konkretan odgovor.

Početna tačka: [`design-system/README.md`](design-system/README.md).

Typography

Official typeface: Instrument Sans Variable.

The entire interface uses a single font family. Hierarchy is created through the typography scale, weight, spacing and layout—not by introducing additional font families.

---

## 9. Interaction states

Svaka interaktivna komponenta mora imati jasno definisana stanja kada su relevantna:

- default;
- hover;
- active;
- focus;
- disabled;
- loading;
- success;
- error.

Loading ne smije ostaviti korisnika bez povratne informacije.

Preferirati:

- stvarni progress kada je poznat;
- progresivno punjenje dugmeta;
- skeleton za sadržaj;
- jasnu statusnu poruku;
- shimmer samo kada je suptilan i funkcionalan.

Spinner koristiti samo kada sistem nema stvarnu informaciju o napretku.

Detalji: [`design-system/interaction-states.md`](design-system/interaction-states.md).

---

## 10. AI pravila

AI agent mora:

- prvo pročitati ovu dokumentaciju;
- poštovati zaključane odluke;
- koristiti postojeće tokene;
- predložiti prije nego uvede novu arhitektonsku ili vizuelnu odluku;
- očuvati jednostavnost sistema;
- dokumentovati važnu novu odluku;
- razlikovati problem u implementaciji od razloga za promjenu sistema.

AI agent ne smije:

- „uljepšavati“ sistem po vlastitom ukusu;
- uvoditi novu boju, spacing, radius, shadow ili motion bez odobrenja;
- koristiti inline stilove kao trajno rješenje;
- duplirati tokene;
- mijenjati zaključanu UX strukturu;
- dodavati biblioteke bez jasne potrebe;
- prekomjerno apstrahovati jednostavan kod;
- praviti generički „AI dizajn“.

Detalji: [`design-system/ai-behaviour.md`](design-system/ai-behaviour.md).

---

## 11. Razvojni workflow

Preporučeni prvi zadatak za Claude Code:

1. Pročitati cijeli `README.md`.
2. Pročitati sve dokumente u `/docs`.
3. Pročitati sve dokumente u `/design-system`.
4. Pregledati postojeće fajlove i zavisnosti.
5. Predložiti tehničku arhitekturu bez mijenjanja zaključanih produktnih odluka.
6. Kreirati vlastiti `CLAUDE.md` kao operativnu memoriju projekta.
7. U `CLAUDE.md` održavati:
   - trenutni status;
   - završene zadatke;
   - otvorene zadatke;
   - tehničke odluke;
   - poznate probleme;
   - sljedeći preporučeni korak.
8. Na kraju svake značajne sesije ažurirati operativnu memoriju.

`CLAUDE.md` nije izvor strateške istine. On je radna memorija. Ovaj `README.md` i povezani dokumenti imaju prednost.

---

## 12. Tehnička sloboda

Framework je zaključan: **Astro**.

Dokumentacija i dalje namjerno ne zaključava unaprijed:

- routing pristup unutar Astro-a;
- CMS;
- data layer;
- animation library;
- strukturu `/src` iznad postojećeg scaffolda;
- način deploymenta;
- način organizacije komponenti.

Claude Code smije predložiti najbolje tehničko rješenje za ove otvorene tačke, ali prijedlog mora:

- poštovati postojeće principe;
- biti proporcionalan obimu projekta;
- izbjegavati nepotrebnu kompleksnost;
- omogućiti održavanje;
- imati jasno obrazloženje;
- ne zaključavati projekat bez potrebe.

Vite i Next.js su ranije razmatrani, ali odluka je pala na Astro zbog content-focused sajta bez potrebe za teškim client-side state managementom. GitHub i Vercel ostaju predviđeni za repo i deployment.

---

## 13. Status zaključavanja

Zaključano za Design System v1.0.1:

- neutralna HEX skala;
- accent skala Srednji orah;
- funkcionalne boje;
- semantic color mapping;
- surface tokeni;
- focus ring;
- overlay;
- selection;
- skeleton i progress boje;
- kompletne implementacione vrijednosti (`design-system/tokens.css`) — spacing, radius, shadow, motion, typography, boja i dimenzije komponenti;
- tačne fluid `clamp()` formule za responsive tipografiju i layout;
- font-family: Instrument Sans Variable (potvrđeno i povezano u `tokens.css`).

Preostala implementaciona provjera:

- vizuelno potvrditi accent HEX skalu (`#805A3C` i izvedeni tonovi) pored fizičkog uzorka/logotipa prije finalne produkcije — skala je matematički izvedena iz "srednji orah" odluke, ali nikad fizički verifikovana;
- provjeriti kontrast (WCAG) svih text/bg parova u stvarnim komponentama;
- testirati focus i disabled stanja u browseru.

Nove vrijednosti se ne uvode bez dokumentovane potrebe i odobrenja.

---

## 14. Dokumentacija

### Projektni dokumenti

- [`docs/00-strategy.md`](docs/00-strategy.md)
- [`docs/01-branding.md`](docs/01-branding.md)
- [`docs/02-logo-identity.md`](docs/02-logo-identity.md)
- [`docs/03-web-experience.md`](docs/03-web-experience.md)
- [`docs/05-visual-experience.md`](docs/05-visual-experience.md)
- [`docs/06-design-tokens.md`](docs/06-design-tokens.md)
- [`docs/07-development-rules.md`](docs/07-development-rules.md)
- [`docs/08-marketing.md`](docs/08-marketing.md)
- [`docs/09 - Signature System.md`](<docs/09 - Signature System.md>)

### Copywriting

Kompletni copywriting blueprintovi (glasovni sistem, template i pojedinačne stranice) nalaze se u [`docs/04 - Copywriting/`](<docs/04 - Copywriting>). Status po fajlu: "Approved" (vidi header svakog dokumenta); set je revidiran 2026-09-02 u skladu sa aktuelnom listom usluga (vidi §2 iznad i `CHANGELOG.md`) — vidi `CLAUDE.md` za detalje po fajlu.

### Design System

- [`design-system/README.md`](design-system/README.md)
- [`design-system/spacing.md`](design-system/spacing.md)
- [`design-system/geometry.md`](design-system/geometry.md)
- [`design-system/motion.md`](design-system/motion.md)
- [`design-system/layout.md`](design-system/layout.md)
- [`design-system/typography.md`](design-system/typography.md)
- [`design-system/colors.md`](design-system/colors.md)
- [`design-system/components.md`](design-system/components.md)
- [`design-system/interaction-states.md`](design-system/interaction-states.md)
- [`design-system/accessibility.md`](design-system/accessibility.md)
- [`design-system/ai-behaviour.md`](design-system/ai-behaviour.md)
- [`design-system/design-principles.md`](design-system/design-principles.md)

### Razvoj

- [`PROJECT_RULES.md`](PROJECT_RULES.md)

---

## 15. Verzije

Dokumentacija prati semantičko verzionisanje:

- `PATCH` — pojašnjenje bez promjene odluke;
- `MINOR` — novi kompatibilni token, pravilo ili komponenta;
- `MAJOR` — promjena zaključane strategije, arhitekture ili vizuelnog sistema.

Sve značajne promjene evidentirati u [`CHANGELOG.md`](CHANGELOG.md).


---

## 16. Approved color direction

Primary mode: **Light mode — Srednji orah**

Brand accent base: `#805A3C`

Primary action sequence:

- default: `#6E4D33`
- hover: `#5C402A`
- active: `#493221`

Green is reserved for functional success states and must not be used as a brand accent.
