# Ivertim

> Jedinstveni izvor istine za strategiju, brend, korisničko iskustvo, vizuelni sistem i budući razvoj Ivertim digitalnog proizvoda.

**Status:** dokumentaciona osnova  
**Verzija:** 1.0.0  
**Primarni vlasnik projekta:** Ivertim  
**Primarni način rada:** Claude Design / Claude Code / GitHub

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

Ivertim je firma iz Prijedora usmjerena na proizvodnju pločastog namještaja i kompletno rješavanje prostora.

Glavne usluge:

- proizvodnja kuhinja, ormara, komoda, cipelarâ i drugog pločastog namještaja;
- uslužno rezanje iverice i drugih pločastih materijala;
- kompletno opremanje stanova i kuća;
- 3D projektovanje i prikaz rješenja;
- proizvodnja povezana sa savremenim CNC procesom;
- transport i montaža kao dio kompletnog procesa.

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

Detalji: [`docs/02-logo-identity.md`](docs/02-logo-identity.md) i [`docs/04-visual-experience.md`](docs/04-visual-experience.md).

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
- prenaglašeni gradijenti;
- „wow“ efekti bez UX vrijednosti;
- carousel kao podrazumijevani obrazac;
- proizvoljne animacije;
- dekorativna kompleksnost.

Detalji: [`docs/04-visual-experience.md`](docs/04-visual-experience.md).

---

## 8. Design System

Kompletna specifikacija je u folderu [`design-system`](design-system).

Obavezna pravila:

- koristiti base i semantic tokene;
- komponenta ne smije uvoditi vlastite proizvoljne vrijednosti;
- semantički token ima prednost nad direktnim base tokenom u komponentama;
- hardkodirani HEX i proizvoljni `px` nisu dozvoljeni kada postoji token;
- novi token se uvodi samo kada rješava ponovljiv problem koji postojeći sistem ne može riješiti;
- responsive sistem koristi kombinaciju breakpointa i fluidnih `clamp()` vrijednosti;
- precizne komponente ostaju fiksne ili diskretno mijenjane na breakpointima;
- tipografija i veliki layout razmaci mogu skalirati fluidno.

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

Dokumentacija namjerno ne zaključava unaprijed:

- framework;
- bundler;
- routing pristup;
- CMS;
- data layer;
- animation library;
- strukturu `/src`;
- način deploymenta;
- način organizacije komponenti.

Claude Code smije predložiti najbolje tehničko rješenje za konkretan trenutak, ali prijedlog mora:

- poštovati postojeće principe;
- biti proporcionalan obimu projekta;
- izbjegavati nepotrebnu kompleksnost;
- omogućiti održavanje;
- imati jasno obrazloženje;
- ne zaključavati projekat bez potrebe.

Prethodno razmatrani alati uključuju Vite, Next.js, GitHub i Vercel, ali konačna odluka se donosi u razvojnoj fazi.

---

## 13. Status zaključavanja

Zaključano za Design System v1.0.0:

- neutralna HEX skala;
- accent skala Srednji orah;
- funkcionalne boje;
- semantic color mapping;
- surface tokeni;
- focus ring;
- overlay;
- selection;
- skeleton i progress boje.

Preostala implementaciona provjera:

- potvrditi i povezati već zaključanu font-family odluku iz Visual Experience materijala;
- provjeriti kontrast u stvarnim komponentama prije produkcije;
- testirati focus i disabled stanja u browseru.

Nove vrijednosti se ne uvode bez dokumentovane potrebe i odobrenja.

---

## 14. Dokumentacija

### Projektni dokumenti

- [`docs/00-strategy.md`](docs/00-strategy.md)
- [`docs/01-branding.md`](docs/01-branding.md)
- [`docs/02-logo-identity.md`](docs/02-logo-identity.md)
- [`docs/03-web-experience.md`](docs/03-web-experience.md)
- [`docs/04-visual-experience.md`](docs/04-visual-experience.md)
- [`docs/05-design-tokens.md`](docs/05-design-tokens.md)
- [`docs/06-development-rules.md`](docs/06-development-rules.md)
- [`docs/07-marketing.md`](docs/07-marketing.md)

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
