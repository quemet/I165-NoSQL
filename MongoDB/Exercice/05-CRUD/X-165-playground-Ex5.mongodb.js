// Permet d' utiliser la db dB_entreprise
use('db_entreprise');

// Insere dans la collection employes un objet JSON
db.employes.insertOne({
    "nom": "Müller",
    "prenom": "Pascal",
    "anciennete": 12,
});

// Insere dans la collection employes plusieurs objet JSON
db.employes.insertMany([
    {
        "nom": "Remond",
        "prenom": "Félix",
        "anciennete": 10
    },
    {
        "nom": "Uka",
        "prenom": "Félix",
        "anciennete": 10
    }
]);

// Trouve un document avec comme prénom Félix et comme anciennette 10
db.employes.findOne({ prenom: "Félix", anciennete: 10 });

// Trouve un document avec come ville Paris
db.employes.findOne({ "adresse.ville": "Paris" });

//
db.employes.find({ anciennete: 7 });

db.employes.find({ "adresse.ville": "Toulouse" }).count();

db.employes.updateOne({ nom: 'Uka'}, {
    $set: {
        prenom: 'Julie',
        tel: 123456789
    }
})

db.employes.findOneAndUpdate({ nom: "Remond"}, {
    $set: {
        adresse: {
            numero: 22,
            codepostal: 1000,
            ville: "Lausanne"
        }
    }
}, { returnDocument: "after" });

db.employes.findOneAndUpdate({ nom: "King", prenom: "David"}, {
    $unset: {
        adresse: {}
    }
});

db.employes.deleteOne({ nom: "Briu", "adresse.ville": "Foix" });

db.employes.deleteMany({ prenom: "Christophe" });

db.user.drop();

db.dropDatabase();

const cursor = db.employes.find().toArray();
cursor.forEach(d => printjson(d.nom));
