---
sidebar_position: 99
---

# Primka materijala


Ovaj odjeljak pruža kratak uvod u koncept **kalkulacije** unutar Prokontik softvera. Naučićete kako da efikasno koristite opcije kalkulisanja cijena, marži i ostalih parametara koji su ključni za vođenje robnog knjigovodstva.


Kalkulacija je dokument kojim robu stavljamo na stanje i definišemo prodajne cijene artikala.  
Dokument se unosi u odgovarajuće skladište — **veleprodajno (VP)** ili **maloprodajno (MP)** — zavisno od poslovanja.  
Iz padajućeg menija **Ulazni dokumenti** biramo opciju **Kalkulacija**.

Za bolju ilustraciju, pogledajte priloženi video vodič:

## Pogledajte video

<iframe width="560" height="315" src="https://www.youtube.com/embed/chV68OsnDlQ" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Kreiranje nove kalkulacije

Za unos nove kalkulacije:
- Kliknemo na komandno dugme **Novi** u lijevom uglu ekrana.
- Kursor se pozicionira na polje za izbor dobavljača. Dobavljača biramo klikom na dugme pored šifre i naziva partnera ili unosom nekoliko slova imena/šifre i potvrdom tipkom **Enter**.
- Dokument automatski dobija sljedeći broj, a datum se preuzima sa sistema.
- U polje **Broj fakt. dob./br. rač.** unosimo broj fakture dobavljača.
- Unosimo **valutu** (broj dana za odgođeno plaćanje) — preuzima se iz registra partnera ako je tamo unesen.
- Odabiremo **paritet**, **način plaćanja** (npr. Žiralno) i **valutu plaćanja** (npr. KM).
- U polje **Iznos fakture** unosimo vrijednost fakture bez PDV-a.


<img
  src="/img/test.gif"
  alt="Kalkulacija template GIF"
  style={{ maxWidth: '100%', height: 'auto' }}
/>



> **Napomena (verzija 2.0):** Ova opcija je dostupna samo u verziji 2.0 softvera.
## Unos troškova

Ako imamo troškove vezane za fakturu:
- Kliknemo na dugme **Unos troškova**.
- Otvara se forma gdje unosimo svaki trošak: biramo trošak, partnera i unosimo iznos. Svaki unos potvrđujemo tipkom **Enter**.

## Unos ulaznog PDV-a

Ako je dobavljač u sistemu PDV-a:
- Kliknemo na dugme za unos ulaznog PDV-a.
- Unesemo vrijednost i snimimo unos.

## Unos stavki kalkulacije

Za svaki artikal:
- U polje za unos šifre/naziva artikla unosimo podatke i pritisnemo **Enter**.
- U formi unosimo količinu, nabavnu i prodajnu cijenu.
- Snimamo unos.

<div style={{
  padding: '0.8em',
  background: '#fff8e1',
  borderLeft: '4px solid #f39c12',
  margin: '0.5em 0'
}}>
  <strong>Napomena (verzija 1.0):</strong> Ova opcija je dostupna samo u verziji 1.0 softvera.
</div>

<div style={{
  padding: '0.8em',
  background: '#eaf4fb',
  borderLeft: '4px solid #2980b9',
  margin: '0.5em 0'
}}>
  <strong>Napomena (verzija 2.0):</strong> Ova opcija je dostupna samo u verziji 2.0 softvera.
</div>


Možemo unijeti:
- **Bar kod** artikla (dodavanje/izmjena)
- **Seriju artikla** (broj serije, količina, rok valjanosti)

## Završni koraci

- Nakon unosa svih stavki, pokrećemo **rekalkulaciju troška** iz menija.
- Dokument proknjižavamo klikom na dugme za knjiženje.
- Opcionalno, biramo način štampe (pregled na ekranu, direktna štampa, bez štampe).

## Brisanje i izmjene

- Izmjene: Klik na dugme **Izmjena dokumenta**.
- Brisanje stavke: Odabrati stavku i kliknuti na **Brisanje**.
- Brisanje cijelog dokumenta: Iz menija **Dokument** izabrati **Obriši SVE stavke dokumenta** i potom **Obriši tekući dokument**.

## Prikaz proknjiženih kalkulacija

Za pregled proknjiženih kalkulacija:
- U polju **Filter** izaberemo opciju **Proknjiženi**.
