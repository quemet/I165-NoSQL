// 2.1 Test : Ok
use('testdb')

// 2.2 Test : Ok
use('testdb')
db.createCollection('users')

// 2.3 Test : Ok
use('testdb')
db.users.insertOne(
    {
        firstname: "Doe",
        lastname: "John"
    }
)

// 2.4 Test: Ok
use('testdb')
db.users.insertMany([
    {
        firstname: "Paola",
        lastname: "Müller"
    },
    {
        firstname: "Paul",
        lastname: "Zirris"
    },
    {
        firstname: "Josette",
        lastname: "Obama"
    },
    {
        firstname: "Paola",
        lastname: "Pinto"
    },
    {
        firstname: "Julie",
        lastname: "Sbinden"
    }
])

// 2.5 Test: Ok
use('testsb')
db.users.countDocuments()

// 2.6 Test: Ok
use('testdb')
db.users.findOne({firstname: "Paola"})

// 2.7 Test: Ok
use('testdb')
db.users.find({firstname: "Paola"})

// 2.8 Test: Ok
use('testdb')
db.users.countDocuments({firstname: "Paola"})

// 2.9 Test: Ok
use('testdb')
db.users.deleteOne({lastname: "Zirris"})

// 2.10 Test: Ok
use('testdb')
db.users.deleteMany({firstname: "Paola"})

// 2.11 Test: Ok
use('testdb')
db.dropDatabase()