interface IProdotto {
    tipo: string;
    id: number;
    taglia: string;
    colore: string;
    stato: string;
    assegnaCliente(cliente: ICliente): void;
}

interface ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
    ordinaProdotto(prodotto: IProdotto): void;
}

interface IProcessoProduzione {
    nomeDelProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];
    aggiungiProdotto(prodotto: IProdotto): void;
}

class Prodotto implements IProdotto {
    tipo: string;
    id: number;
    taglia: string;
    colore: string;
    stato: string;

    constructor(tipo: string, id: number, taglia: string, colore: string, stato: string) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }

    assegnaCliente(cliente: ICliente): void {
            console.log(`Il prodotto ${this.tipo} (ID: ${this.id}) è stato assegnato al cliente ${cliente.nome} ${cliente.cognome}.`);
        // Implementation for assigning a client to the product
    }
}

class Cliente implements ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;

    constructor(nome: string, cognome: string, email: string, metodoPagamento: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }

    ordinaProdotto(prodotto: IProdotto): void {
        if (prodotto.stato === "Disponibile") {
            prodotto.stato = "Esaurito";
            console.log(`Il cliente ${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.tipo} (ID: ${prodotto.id}).`);
        } else {            console.log(`Il prodotto ${prodotto.tipo} (ID: ${prodotto.id}) non è disponibile per l'ordine.`);
        }
        // Implementation for ordering a product
    }
}

class ProcessoProduzione implements IProcessoProduzione {
    nomeDelProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

    constructor(nomeDelProcesso: string, descrizione: string) {
        this.nomeDelProcesso = nomeDelProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = [];
    }
    aggiungiProdotto(prodotto: IProdotto): void {   
        this.prodottiInProduzione.push(prodotto);
        prodotto.stato = "Disponibile";
        console.log(`Il prodotto ${prodotto.tipo} (ID: ${prodotto.id}) è stato aggiunto al processo di produzione "${this.nomeDelProcesso}".`);
    }
} 

// Example usage
const cliente1 = new Cliente("Raffaele", "Esposito", "raffaele.esposito@example.com", "PayPal");
const cliente2 = new Cliente("Giovanni", "Rossi", "giovanni.rossi@example.com", "Carta di credito");
const cliente3 = new Cliente("Maria", "Bianchi", "maria.bianchi@example.com", "Bonifico");
const prodotto1 = new Prodotto("Maglietta", 1, "M", "Blu", "In arrivo");
const prodotto2 = new Prodotto("Costume da bagno", 2, "L", "Nero", "In arrivo");
const prodotto3 = new Prodotto("Bikini", 3, "S", "Rosso", "In arrivo");
const processo1 = new ProcessoProduzione("Filatura e tessitura", "La materia prime viene pulita, cardata e filata per creare il filato, che viene lavorato con macchine da maglieria per formare la stoffa, solitamente in tessuto jersey..");
const processo2 = new ProcessoProduzione("Cucitura", "Assemblaggio tramite macchinari industriali specializzati e utilizzo di filati tecnici ed elastici adatti a sopportare le sollecitazioni dell'acqua.");

console.log("Prodotto 1 prima dell'aggiunta al processo di produzione:", prodotto1);
console.log("Prodotto 2 prima dell'aggiunta al processo di produzione:", prodotto2);
console.log("Prodotto 3 prima dell'aggiunta al processo di produzione:", prodotto3);    

processo1.aggiungiProdotto(prodotto1);
processo2.aggiungiProdotto(prodotto2);
processo2.aggiungiProdotto(prodotto3);

console.log("Prodotto 1 dopo l'aggiunta al processo di produzione:", prodotto1);
console.log("Prodotto 2 dopo l'aggiunta al processo di produzione:", prodotto2);
console.log("Prodotto 3 dopo l'aggiunta al processo di produzione:", prodotto3);

cliente1.ordinaProdotto(prodotto1);
prodotto1.assegnaCliente(cliente1);
cliente2.ordinaProdotto(prodotto2);
prodotto2.assegnaCliente(cliente2);
cliente3.ordinaProdotto(prodotto3);
prodotto3.assegnaCliente(cliente3);


console.log("Prodotto 1 dopo l'ordine:", prodotto1);
console.log("Prodotto 2 dopo l'ordine:", prodotto2);
console.log("Prodotto 3 dopo l'ordine:", prodotto3);

console.log("Processo di produzione 1:", processo1);
console.log("Processo di produzione 2:", processo2);
console.log("Processo di produzione 3:", processo2);

console.log("Cliente 1:", cliente1);
console.log("Cliente 2:", cliente2);
console.log("Cliente 3:", cliente3);