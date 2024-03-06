// Afficher les indexes existants de la collection address
use('db_index');
db.address.getIndexes();

// 2
use('db_index');
db.address.createIndex({ email: 1 });

// 3
use('db_index');
db.address.createIndex({ first_name: 1, last_name: 1 });

// 4
use('db_index');
db.address.createIndex({ street: 1, street_number: 1}, { name: "street_1" } );

// 5
use('db_index');
db.address.dropIndex("street_1");

// 6
use('db_index');
db.jobs.createIndex({ description: "text" });

// 7
use('db_index');
db.jobs.find( { $text: { $search: "Etiam pretium iaculis justo" } } );

// 8
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

// 9
use('db_index');
db.createRole({
    role: "Administrator",
    privileges: [],
    roles: ["userAdmin"],
});

// 10
use('db_index');
db.createUser({
    user: "manage1",
    pwd: "manage1234",
    roles: ["Manager"],
});

// 11
use('db_index');
db.createUser({
    user: "admin1",
    pwd: "admin1234",
    roles: ["Administrator"],
});

// 12
use('db_index');
db.getRoles();

// 13
use('db_index');
db.getRole("Manager", { 
    showPrivileges: true
});

