# 06 — Development Rules

## Osnovni pristup

Tehnička arhitektura nije unaprijed zaključana. Claude Code treba prvo pregledati zahtjeve, dokumentaciju i obim projekta, a zatim predložiti racionalan stack.

## Prioriteti

1. stabilnost;
2. performanse;
3. pristupačnost;
4. SEO;
5. jednostavno održavanje;
6. dosljedna primjena design sistema;
7. minimalna nepotrebna kompleksnost.

## Pravila

- koristiti komponente kada postoji stvarno ponavljanje;
- ne apstrahovati prije potrebe;
- ne uvoditi biblioteku za problem koji se jednostavno rješava bez nje;
- koristiti semantic HTML;
- optimizovati slike;
- poštovati reduced motion;
- održavati jasnu separaciju sadržaja, prezentacije i ponašanja;
- ne hardkodirati dizajnerske vrijednosti;
- ne mijenjati UX strukturu kroz implementaciju.

## SEO

- svaka ključna usluga ima zaseban URL;
- svaki projekat ima zaseban URL;
- semantička struktura naslova;
- strukturirani podaci gdje imaju smisla;
- optimizovane slike i metadata;
- sadržaj mora ostati čitljiv i bez JavaScripta gdje je praktično.

## Dokumentovanje

Važne tehničke odluke evidentirati u `CLAUDE.md` ili posebnom ADR dokumentu ako Claude Code procijeni da je odluka dugoročno značajna.
