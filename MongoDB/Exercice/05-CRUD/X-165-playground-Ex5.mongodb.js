use('db_entreprise');

db.employes.insertOne({
    "nom": "Müller",
    "prenom": "Pascal",
    "anciennete": 12,
});

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

db.employes.findOne({ prenom: "Félix", anciennete: 10 });

db.employes.findOne({ "adresse.ville": "Paris" });

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
