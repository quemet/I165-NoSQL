use("db_entreprise");
db.employes.countDocuments();


use("db_entreprise");
db.employes.insertOne({
  nom: "Müller",
  prenom: "Pascal",
  anciennete: 12,
});

db.employes.insertMany([
  { nom: "Remond", prenom: "Félix", anciennete: 10 },
  { nom: "Uka", prenom: "Félix", anciennete: 10 },
]);


use("db_entreprise");
db.employes.findOne({ prenom: "Félix", anciennete: 10 });

db.employes.findOne({ "adresse.ville": "Paris" });

db.employes.find({ anciennete: 7 });


use("db_entreprise");
db.employes.countDocuments({ "adresse.ville": "Toulouse" });
// db.employes.find({"adresse.ville": "Toulouse"}).count();


use("db_entreprise");
db.employes.find().count();
const curseur = db.employes.find();
while (curseur.hasNext()) {
  const document = curseur.next();
  printjson(document.name);
}


use("db_entreprise");
db.employes.updateOne(
  { prenom: "Pascal" },
  {
    $set: {
      name: "Pascal2",
      age: 22,
    },
  }
);

db.employes.updateOne(
  { prenom: "Uka" },
  {
    $set: {
      name: "Julie",
      tel: 123456789,
    },
  }
);

db.employes.findOneAndUpdate(
  { nom: "Remond" },
  {
    $set: {
      adresse: {
        numero: 22,
        codepostal: 1000,
        ville: "Lausanne",
      },
    },
  }
);

// retroune avant la suppression
db.employes.findOneAndUpdate(
  { prenom: "Uka", nom: "David" },
  {
    $unset: {
      adresse: {},
    },
  }
);

db.employes.updateMany(
  { prenom: "Uka" },
  {
    $inc: {
      // ajoute 12 à l'age actuel
      age: 12,
    },
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


use("db_entreprise");
db.employes.deleteOne({"prenom": 'Pascal'});

db.employes.deleteOne({"nom": 'Briu', "adresse.ville": "Foix"});


// La méthode findOneAndDelete() permet de supprimer le premier document correspondant au filtre et de le retourner.

db.employes.deleteMany({"prenom": 'Alan'});

use("db_entreprise");

// La méthode drop() va supprimer la collection sur laquelle elle est appelée.
db.employes.drop();

// La méthode dropDatabase() va supprimer la base de données sur laquelle elle est appelée.
db.dropDatabase();
