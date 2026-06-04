# Sunnee

Un piccolo progetto front-end che mostra un modello di gestione di prodotti, clienti e processi di produzione in TypeScript.

## Descrizione

Questa applicazione contiene esempi di classi e interfacce TypeScript per gestire:
- prodotti con stato, taglia, colore e assegnazione cliente;
- clienti che ordinano prodotti;
- processi di produzione a cui aggiungere prodotti.

Il progetto viene eseguito in un semplice file HTML che importa `main.js`.

## Struttura del progetto

- `index.html` - pagina principale che carica lo script JavaScript.
- `main.ts` - implementazione TypeScript delle entità `Prodotto`, `Cliente` e `ProcessoProduzione`.
- `main.js` - output JavaScript generato e importato in `index.html`.
- `tsconfig.json` - configurazione TypeScript del progetto.

## Funzionalità principali

- Creazione di prodotti con stato iniziale.
- Creazione di clienti con metodo di pagamento.
- Aggiunta di prodotti a processi di produzione e aggiornamento dello stato a `Disponibile`.
- Ordine di prodotti da parte dei clienti, con controllo di disponibilità.
- Assegnazione del cliente al prodotto dopo l'ordine.
- Log di stato nel console output per tracciare l'esecuzione.

## Come usare

1. Apri `index.html` in un browser.
2. Apri la console del browser per visualizzare i messaggi generati dall'esecuzione dello script.

## Note

- Al momento il progetto non include un sistema di packaging o una build automatica.
- Il file `main.js` rappresenta la versione compatibile browser generata dal TypeScript in `main.ts`.

## Miglioramenti possibili

- aggiungere una vera interfaccia utente HTML/CSS;
- implementare un flusso di gestione ordini più completo;
- aggiungere test automatici e script di build.
