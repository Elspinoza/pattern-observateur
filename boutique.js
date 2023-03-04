// Définition du sujet
class Boutique {
    constructor() {
      this.produits = [];
      this.clients = new Set();
    }
  
    ajouterProduit(produit) {
      this.produits.push(produit);
      this.notifierClients();
    }
  
    supprimerProduit(produit) {
      const index = this.produits.indexOf(produit);
      if (index !== -1) {
        this.produits.splice(index, 1);
        this.notifierClients();
      }
    }
  
    ajouterClient(client) {
      this.clients.add(client);
    }
  
    supprimerClient(client) {
      this.clients.delete(client);
    }
  
    notifierClients() {
      for (const client of this.clients) {
        client.actualiser(this.produits);
      }
    }
  }
  
  // Définition des observateurs
  class Client {
    constructor(nom) {
      this.nom = nom;
    }
  
    actualiser(produits) {
      console.log(`[${this.nom}] Produits mis à jour :`, produits);
    }
  }
  
  // Utilisation du pattern observateur
  const boutique = new Boutique();
  
  const client1 = new Client('Hans');
  const client2 = new Client('Theophile');
  const client3 = new Client('Samuel');
  const client4 = new Client('Elsira');
  const client5 = new Client('Abigael');
  const client6 = new Client('Elora');
  
  boutique.ajouterClient(client1);
  boutique.ajouterClient(client2);
  boutique.ajouterClient(client3);
  boutique.ajouterClient(client4);
  boutique.ajouterClient(client5);
  boutique.ajouterClient(client6);
  
  boutique.ajouterProduit('IPHONE');
  boutique.ajouterProduit('SAMSUNG');
  boutique.ajouterProduit('ASUS');
  
  boutique.supprimerClient(client2);
  
  boutique.ajouterProduit('HUAWEI');
  