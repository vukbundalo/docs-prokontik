---
sidebar_position: 3
---

# Kalkulacija


Ovaj odjeljak pruža kratak uvod u koncept **kalkulacije** unutar Prokontik softvera. Naučićete kako da efikasno koristite opcije kalkulisanja cijena, marži i ostalih parametara koji su ključni za vođenje robnog knjigovodstva.


Kalkulacija je dokument kojim robu stavljamo na stanje i definišemo prodajne cijene artikala.  
Dokument se unosi u odgovarajuće skladište — **veleprodajno (VP)** ili **maloprodajno (MP)** — zavisno od poslovanja.  
Iz padajućeg menija **Ulazni dokumenti** biramo opciju **Kalkulacija**.

Za bolju ilustraciju, pogledajte priloženi video vodič:

## Pogledajte video

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/chV68OsnDlQ"
    title="YouTube video player"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>


## Kreiranje nove kalkulacije

Za unos nove kalkulacije:
- Kliknemo na dugme "Ulazni dokumenti" i zatum na stavku "Kalkulacija" ili na prečicu "Kalkulacija" ukoliko je dostupna na vašem ekranu.

<img
  src="/docs-prokontik/img/generalno/kalkulacija/ulazKalkulacija.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto' }}
/>

- Da bi smo otvorili novi dokument kliknemo na komandno dugme **Novi** u lijevom uglu ekrana.

<img
  src="/docs-prokontik/img/gifElementi/noviDokument.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>

- Kursor se pozicionira na polje za izbor dobavljača. Dobavljača biramo klikom na dugme pored šifre čime otvaramo registar gdje biramo željenog dobavljača ili dobavljača možemo izabrati unosom nekoliko slova imena/šifre i potvrdom tipkom **Enter**. Na svako naredno polje tj u ovom slučaju valutu prelazimo pritiskom na tipku **Tab** na tastaturi ili ručnim klikom na željeno polje za unos.

<img
  src="/docs-prokontik/img/gifElementi/izborDobavljaca.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>

- Unosimo datum plaćanja tj  **valutu** (broj dana za odgođeno plaćanje) — preuzima se iz registra partnera ako ste tamo već unaprijed definisali valutu.
- Odabiramo **paritet** (uslove isporuke između kupca i dobavljača), **način plaćanja** (npr. Žiralno) i **valutu plaćanja** (npr. KM).

<img
  src="/docs-prokontik/img/gifElementi/valuta&Placanje.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>

## Unos troškova

Ako imamo troškove vezane za fakturu:
- Kliknemo na dugme **Unos troškova**.

<img
  src="/docs-prokontik/img/gifElementi/unosTroskova1.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>

- Otvara se forma gdje unosimo svaki trošak: biramo trošak, partnera i unosimo iznos. Svaki unos potvrđujemo tipkom **Enter**.

<img
  src="/docs-prokontik/img/gifElementi/unosTroskova2.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>

## Unos ulaznog PDV-a
Ako je dobavljač u sistemu PDV-a, neophodno je evidentirati iznos ulaznog PDV-a kako bi knjiženje kalkulacije bilo ispravno u skladu sa propisima i pravilima PDV obračuna.


1. Kliknite na dugme **PDV**.
2. Otvoriće se prozor za unos iznosa PDV-a.
3. U  polje "Ukupan iznos ulaznog PDV-a" unesite **ukupan iznos PDV-a** sa fakture (onaj koji je naveden na fakturi dobavljača).
4. Kliknite na dugme **Snimi** ili potvrdite pritiskom tipke **Enter**.

> **Napomena:** Ulazni PDV mora biti unesen **tačno onako kako je naveden na fakturi** dobavljača.  
> To omogućava usklađenost sa računovodstvom i tačnost prilikom PDV prijava.

<img
  src="/docs-prokontik/img/gifElementi/ulazniPDV.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>

### Šta ako se ulazni PDV ne unese?

Ako se ulazni PDV ne unese, dokument kalkulacije može biti formalno proknjižen, ali:

- **PDV evidencija neće biti potpuna**
- može doći do **razlike u obračunu obaveze prema Poreskoj upravi**
- i **računi neće biti usklađeni sa knjigovodstvom**

Zato je ovaj korak **obavezan za sve dobavljače koji su u sistemu PDV-a**.

## Unos stavki kalkulacije

Za svaki artikal:
- U polje za izbor stavke unosimo **šifru artikla**, **naziv artikla** i pritisnemo **Enter** ili unosimo **bar kod** što će automatski otvoriti stavku. Ukoliko samo pritisnemo **Enter** bez unosa podataka otvoriće nam se forma za izbor stavki.
- Ukoliko želimo da nam se umjesto ekrana za izbor stavki otvori kompletan registar artikala zbog detaljnijih informacija potrebno je da označimo kućicu "Registar" koja se nalazi odmah iznad polja za unos stavki.
- Artikle u ekranima izbora možemo filtrirati dalje po nazivu, vrsti, grupama,...
- Kada pronađemo željenu stavku dvoklikom je izaberemo i automatski prelazimo na ekran za unos cijena.
- U formi unosimo količinu, nabavnu i prodajnu cijenu ako stavka ulazi prvi put ili ako želimo napraviti izmjene. Ukoliko su sva polja već popunjena željenim vrijednostima možemo da kliknemo da dugme **Snimi** ili da prelazimo tipkom **Enter** na sledeće polje sve dok ne dođemo do dugmeta Snimi. 

<img
  src="/docs-prokontik/img/gifElementi/izborStavki.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>

U donjem desnom uglu imamo dugmad sa kojima dodatno možemo izmjeniti prethodnu uneseno stavku nakon što prvo kliknemo na nju.
Možemo unijeti:
-  **Serijski broj** artikla
-  **Seriju artikla / LOT** i rok trajanja (Kreirati novu seriju ili dodati na postojeću)
-  **Bar kod** artikla
-  **Uređaje**

Takođe možemo da izmjenimo ili izbrišemo označenu stavku.

<img
  src="/docs-prokontik/img/gifElementi/kontrolaStavke.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>


## Proknjižavanje dokumenta

- Nakon unosa svih stavki, pokrećemo **rekalkulaciju troška** iz menija.
- Dokument proknjižavamo klikom na dugme za knjiženje.
- Opcionalno, biramo način štampe (pregled na ekranu, direktna štampa, bez štampe).

<img
  src="/docs-prokontik/img/gifElementi/proknjizavanje.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>
<img
  src="/docs-prokontik/img/gifElementi/proknjizavanje2.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>


## Brisanje i izmjene stavki i dokumenta

- Izmjene: Klik na dugme **Izmjena dokumenta**.
- Brisanje stavke: Odabrati stavku i kliknuti na **Brisanje**.
- Brisanje cijelog dokumenta: Iz menija **Dokument** izabrati **Obriši SVE stavke dokumenta** i potom **Obriši tekući dokument**.

<img
  src="/docs-prokontik/img/gifElementi/brisanjeDokumenta1.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>
<img
  src="/docs-prokontik/img/gifElementi/brisanjeDokumenta2.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>

## Prikaz proknjiženih kalkulacija

Za pregled proknjiženih kalkulacija:
- U polju **Filter** izaberemo opciju **Proknjiženi**.

<img
  src="/docs-prokontik/img/gifElementi/filterProknjizeni.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', marginTop: '20px'  }}
/>