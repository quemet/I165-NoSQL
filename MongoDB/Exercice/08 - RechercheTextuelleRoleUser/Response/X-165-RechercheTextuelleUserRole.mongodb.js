// Afficher les indexes existants de la collection address
use('db_index');
db.address.getIndexes();

// Créer un index de type unique dans la collection pour le champ email.
use('db_index');
db.address.createIndex({ email: 1 }, { unique: true } );

// Créer un index composé dans la collection pour les champs first_name et last_name.
use('db_index');
db.address.createIndex({ first_name: 1, last_name: 1 });

// Créer un index composé nommé “street_1” dans la collection pour les champs street et street_number.
use('db_index');
db.address.createIndex({ "address.street": 1, "address.street_number": 1}, { name: "street_1" } );

// Supprimer l’index “street_1” créer à l'éxercice d'avant
use('db_index');
db.address.dropIndex("street_1");

// Ajouter un index de type text pour le champ description de la collection
use('db_index');
db.jobs.createIndex({ description: "text" });

// Rechercher dans la collection “jobs” une description qui contient les mots suivant “Etiam pretium iaculis justo” en utilisant l’opérateur $text
use('db_index');
db.jobs.find( { $text: { $search: "Etiam pretium iaculis justo" } } );

//  Ajouter un rôle spécifique nommé Manager permétant de pouvoir modifier, ajouter et lire les documents de la collection jobs et permétant de lire et supprimer les documents de la collection address
use('db_index');
db.createRole({
    role: "Manager",
    privileges: [
        {
            resource: { db: "db_index", collection: "jobs" },
            actions: ["find", "insert", "update"],
        },
        {
            resource: { db: "db_index", collection: "address" },
            actions: ["find", "remove"],
        }
    ],
    roles: [],
});

// Ajouter un rôle spécifique nommé Administrator peut effectuer n'importe quelle action administrative sur la base de données db_index, inclus lecture, écriture et gestion des utilisateur
use('db_index');
db.createRole({
    role: "Administrator",
    privileges: [],
    roles: ["userAdmin"],
});

// Ajouter l’utilisateur manage1 avec le mot de passe manage1234 qui a le rôle Manager sur la base de données “db_index
use('db_index');
db.createUser({
    user: "manage1",
    pwd: "manage1234",
    roles: ["Manager"],
});

// Ajouter l’utilisateur admin1 avec le mot de passe admin1234 qui a le rôle Administrator sur la base de données “db_index
use('db_index');
db.createUser({
    user: "admin1",
    pwd: "admin1234",
    roles: ["Administrator"],
});

// Afficher tous les rôles de la base de données db_index
use('db_index');
db.getRoles();

// Afficher les privilèges du rôle Manager
use('db_index');
db.getRole("Manager", { 
    showPrivileges: true
});

