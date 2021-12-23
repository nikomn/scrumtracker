# Scrum Tracker App

![Github Actions](https://github.com/nikomn/scrumtracker/workflows/Push%20to%20main/badge.svg)

Full Stack -websovelluskehitys harjoitustyönä toteutettu sovellus, jonka avulla
voi seurata yksinkertaisten Scrum tekniikoita käyttävän projektin etenemistä. 

Sovellus on tehty Full Stack kurssilla opittujen tekniikoiden pohjalta käyttäen
Reactia ja Nodea.

## Asennusohjeet

Lataa sovelluksen lähdekoodi esim. kloonaamalla git repo

```bash
$ git clone https://github.com/nikomn/scrumtracker.git
```

Asenna kirjastot:

```bash
$ cd frontend
$ npm install
$ cd ..
$ cd backend
$ npm install
```

### Backendin käynnistäminen

**HUOM!** Backendiin pitää lisätä .env tiedosto, jossa määritellään tarvittavat
ympäristömuuttujat. Tätä varten tulee luoda kaksi mongo tietokantaa MongoDB
Atlas palveluun. ks. [ohjeita Fullstack Open kurssimateriaalista](https://fullstackopen.com/osa3/tietojen_tallettaminen_mongo_db_tietokantaan#mongo-db).

.env tiedostoon määritellään seuraavat ympäristömuuttujat:

```bash
MONGODB_URI=mongodb+srv://tunnus:salasana@osoite?retryWrites=true
PORT=3001

TEST_MONGODB_URI=mongodb+srv://tunnus:salasana@osoite?retryWrites=true

SECRET=jokin-satunnainen-merkkijono-jota-käytetään-salasanojen-salaamiseen
```

Backend voidaan käynnistää kehitysmoodissa, jolloin se käynnistyy itsestään
uudelleen muutosten jälkeen:

```bash
$ npm run dev
```

Automaattiset testit voi ajaa komennolla:

```bash
$ npm run test
```

End-to-end testejä varten backendin voi käynnistää testimoodissa
komennolla:

```bash
$ npm run start:test
```

**HUOM!** Oletuksena backend sisältää frontend buildin, joka on nähtävissä backendin
käynnistämisen jälkeen selaimella osoitteessa http://localhost:3001/

Jos frontendiin tehdään muokkauksia, saa uuden buildin muodostettua backendin
puolelle komennolla:

```bash
$ npm run build:ui
```

### Frontendin käynnistäminen

Frontend käynnisteään frontendin kansiossa komennolla:

```bash
$ npm start
```

Frontendin automaattiset testit voi ajaa komennolla:

```bash
$ CI=true npm test
```

## End to end testit

e2e testit saa ajettua seuraavasti:

```bash
$ cd backend
$ npm run start:test
# Uusi terminaali
$ cd frontend
$ npm start
# Uusi terminaali
$ cd frontend
$ npm run cypress open
```

## Käyttöohjeet

[Sovelluksen käyttöohje loppukäyttäjille](Dokumentit/kayttoohje.md)

## Heroku

Sovelluksen staging (tai näkökulmasta riippuen tuotanto) versio pyörii Herokussa osoitteessa https://scrumtracker-app.herokuapp.com/

## Työaikakirjanpito
- [Työaikakirjanpito](Dokumentit/tuntikirjanpito.md)

## Backlogit

Työn etenemistä ja suunnitelmia voi seurata product backlogista ja sprint backlogeista.

- [ProductBacklog](Dokumentit/productbacklog.md)
- [Sprint 0](Dokumentit/sprint0backlog.md)
- [Sprint 1](Dokumentit/sprint1backlog.md)
- [Sprint 2](Dokumentit/sprint2backlog.md)
- [Sprint 3](Dokumentit/sprint3backlog.md)
- [Sprint 4](Dokumentit/sprint4backlog.md)
- [Sprint 5](Dokumentit/sprint5backlog.md)
- [Sprint 6](Dokumentit/sprint6backlog.md)
- [Sprint 7](Dokumentit/sprint7backlog.md)
- [Sprint 8](Dokumentit/sprint8backlog.md)


## Käyttöliittymäluonnostelua (alustava)

- [Käyttöliittymä (luonnos)](Dokumentit/kayttoliittyma_luonnos.md) 