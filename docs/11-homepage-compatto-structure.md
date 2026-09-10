# Početna — strukturna dopuna prema Compatto referenci

Datum: 2026-09-10. Grana: `astra/compatto-structure`.
Osnova: `52fa7f4116141ec5176b16aa184717179104b558`.

## Odluka i obim

Vlasnik je zatražio dopunu postojeće početne prema vizuelnim i strukturnim principima compatto.gr, uz očuvanje novijeg hero/about rada. Ovo je odobrenje za opisane strukturne izmjene početne; ne mijenja poslovnu strategiju, tipografiju, paletu, logo ili Signature Shape sistem.

Reference su pregledane u browseru na desktopu i telefonu. Preuzeti principi: fotografija preko širine hero sekcije, odvojene kolone naslova i objašnjenja, miran ritam velikih fotografija, numerisani koraci i topao završni poziv. Nisu preuzimani kod, tekst, fotografije ili brendirani elementi Compatto sajta. Početna koristi prirodno skrolovanje; na desktopu fotografija procesa prati listu koraka preko CSS sticky, a na telefonu je u običnom toku.

## Izmjene po sekcijama

- Hero: sačuvan odobreni naslov, tekst, fotografije i raspored. Prva slika se učitava prioritetno, dodati responzivni izvori, pouzdaniji početak crossfade ciklusa i dugme za pauzu. Reduced motion prikazuje jednu statičnu sliku. Uklonjen ponovljeni Signature Shape preko svake hero fotografije; postojeći potpis ostaje u dugmadima i about kartici.
- Ko smo mi: sačuvane kartice i vlasnički potvrđeni brojevi 16+/500+ iz prethodne implementacije. Prilagođeni mobilni razmaci; vrijednosti se ne resetuju na nulu prije nego što animacija stvarno počne.
- Usluge: dvije fotografske sekcije iz postojeće kolekcije, po postojećem `order` polju. Rezanje/kantovanje/bušenje prvo, namještaj po mjeri drugo. Sačuvano upoznavanje korisnika sa ograničenjem kapaciteta za namještaj iz odobrenog sadržaja.
- Proces: tri stvarna koraka uslužne obrade iz Process Blueprint §10a, uz postojeću ilustraciju mjerenja. Tok namještaja jasno je odvojen i povezan sa odgovarajućim sidrom na postojećoj stranici procesa.
- Projekti: zadržan odobreni uvod i dodato postojeće prazno stanje „Prvi projekti stižu uskoro.“ Nema izmišljenih radova. Kolekcija je spremna za prikaz stvarnih unosa kada budu dodati.
- Savjeti: tri postojeća članka, sa ilustracijom, kategorijom i postojećim helperom za procjenu vremena čitanja. Nisu pisani novi članci.
- Završni CTA: isti sadržaj, gradijent i Signature dugme; naslov i objašnjenje razdvojeni u dvije kolone na desktopu, složeni na telefonu.
- Navigacija: mobilni meni do 1024 px radi prostora za desktop navigaciju; Escape zatvara meni i vraća fokus, veće dodirne površine i ispravljena boja teksta mobilnog CTA.
- Otkrivanje sadržaja: sadržaj vidljiv bez JS-a, a animacija uključena samo za sekcije ispod početnog viewporta. Hero se nikada ne skriva čekajući IntersectionObserver.

## Provjere

- `npm ci --no-audit --no-fund`: postojeći lockfile, bez izmjena zavisnosti.
- `npm run build`: uspješno; generisane optimizovane WebP slike i Vercel izlaz lokalno. Build nije deployment.
- `npm run astro -- check`: 0 grešaka, 0 upozorenja, 1 postojeći hint za JSON-LD script na kontakt stranici.
- `npm run test:e2e -- --workers=2`: 43 prošla, 1 očekivano preskočen desktop test mobilnog menija.
- Dodati regresioni testovi za dvije usluge i procesna sidra, pauzu/nastavak fotografija, reduced motion, rad bez JS-a, Escape/fokus i prelivanje na 320, 390, 768, 1024 i 1440 px.
- Ručni browser pregled: hero, about, obje usluge, proces, projekti, savjeti, završni CTA i footer na desktopu 1440×900 i telefonu 390×844; mobilni meni i fokus.
- `git diff --check`: bez grešaka.
- Poseban lint script nije definisan u projektu; Astro check je postojeća provjera tipova i Astro dijagnostike.
- Kontakt testovi koriste validaciju i honeypot putanju; nisu slali stvarne email poruke.

## Preostali materijal

- Postojeće fotografije ostaju vlasnički odobreni privremeni AI placeholderi prema `docs/10 - Photo Prompts.md`. Potrebne su stvarne fotografije pogona, obrade, mjerenja i namještaja za zamjenu. DRAFT oznake su očuvane.
- Nedostaju stvarne studije slučaja i njihove fotografije. Namjerno prazna kolekcija `projekti` daje postojeća build upozorenja.
- Nisu dodavane cijene, poslovne tvrdnje, svjedočanstva ili novi kontakt podaci.
- Izmjene su namijenjene samo pomoćnoj grani i Preview Deployment-u; nema merge-a u main niti produkcionog deploymenta.
