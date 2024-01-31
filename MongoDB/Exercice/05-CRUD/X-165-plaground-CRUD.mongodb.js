// Utiliser la db db-entreprise
use("db_entreprise");

// returne le nombre de documents dans employes
db.employes.countDocuments();

// Utiliser la db db-entreprise
use("db_entreprise");

// Insere un document dans la collection employes
db.employes.insertOne({
  nom: "Müller",
  prenom: "Pascal",
  anciennete: 12,
});

// Insere plusieurs documents dans la collection employes
db.employes.insertMany([
  { nom: "Remond", prenom: "Félix", anciennete: 10 },
  { nom: "Uka", prenom: "Félix", anciennete: 10 },
]);


// Utilise la db db_entreprise
use("db_entreprise");

// Trouve le document ou le prenom est Félix et l'anciennete est 10
db.employes.findOne({ prenom: "Félix", anciennete: 10 });

// Trouve le document ou la ville est Paris
db.employes.findOne({ "adresse.ville": "Paris" });

// Trouve tout les documents ou l'anciennete est de 7
db.employes.find({ anciennete: 7 });

// Utilise la db db_entreprise
use("db_entreprise");

// return le nombre de documents ou la ville est Toulouse
db.employes.countDocuments({ "adresse.ville": "Toulouse" });
// db.employes.find({"adresse.ville": "Toulouse"}).count();

// Utilise la db db_entreprise
use("db_entreprise");

// Trouve le nombre de documents dans employes
db.employes.find().count();

// Trouve tout les documents
const curseur = db.employes.find();

// boucle sur le curseur
while (curseur.hasNext()) {
  // mettre dans document le document du curseur
  const document = curseur.next();

  // affiche le nom du document
  printjson(document.name);
}

// Utilise la db db_entreprise
use("db_entreprise");

// Mis à jour d'un document avec comme prénom Pascal
db.employes.updateOne(
  { prenom: "Pascal" },
  // change les données
  {
    $set: {
      name: "Pascal2",
      age: 22,
    },
  }
);

// Mise à jour d'un document avec comme prénom Uka
db.employes.updateOne(
  { prenom: "Uka" },
  {
    // change les données
    $set: {
      name: "Julie",
      tel: 123456789,
    },
  }
);

// Mise à jour d'un document avec comme nom Remond
db.employes.findOneAndUpdate(
  { nom: "Remond" },
  {
    // Change les données
    $set: {
      adresse: {
        numero: 22,
        codepostal: 1000,
        ville: "Lausanne",
      },
    },
  }
), { returnDocument: "after"};

// retroune avant la suppression
db.employes.findOneAndUpdate(
  { prenom: "Uka", nom: "David" },
  {
    // Enleve les données de l'adresse
    $unset: {
      adresse: {},
    },
  }
);

// Mise à jour de tout les documents qui ont comme prénom Uka
db.employes.updateMany(
  { prenom: "Uka" },
  {
    // Incrémente un nombre
    $inc: {
      // ajoute 12 à l'age actuel
      age: 12,
    },
    // Change les données
    $set: {
      name: "Julie",
    },
  }
);

//Si un document avec un champ prenom ayant pour valeur Alan existe alors il sera remplacé par un nouveau document { age: 25, name: 'BOB' }.
// Dans le cas contraire, un nouveau document { age: 25, name: 'BOB' } sera inséré.
db.employes.replaceOne(
  { prenom: "Paul" },
  {
    age: 25,
    prenom: "BOB",
  },
  { upsert: true }
);


// Utilise la db db_entreprise
use("db_entreprise");

// Supprimme le premier document ou le prénom vaut Pascal
db.employes.deleteOne({"prenom": 'Pascal'});

// Supprimme le premier document ou le nom vaut Briu et ville vaut Foix
db.employes.deleteOne({"nom": 'Briu', "adresse.ville": "Foix"});


// La méthode findOneAndDelete() permet de supprimer le premier document correspondant au filtre et de le retourner.

// Supprimme tout les documents ou le prenom vaut Alan
db.employes.deleteMany({"prenom": 'Alan'});

// Utilise la db db_entreprise
use("db_entreprise");

// La méthode drop() va supprimer la collection sur laquelle elle est appelée.
db.employes.drop();

// La méthode dropDatabase() va supprimer la base de données sur laquelle elle est appelée.
db.dropDatabase();
