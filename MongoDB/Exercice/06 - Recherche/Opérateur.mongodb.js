// 1
use("db_restaurant");
db.restaurants.countDocuments();

// 2
use('db_restaurant');
db.restaurants.find({}, {_id:1, name:1, cuisine: 1, borough: 1, restaurant_id: 1});

// 3
use('db_restaurant');
db.restaurants.find({}, {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1});

// 4
use('db_restaurant');
db.restaurants.find({}, {_id:0, name:1, borough: 1, "address.zipcode":1, restaurant_id: 1});

// 5
use('db_restaurant');
db.restaurants.find({borough: "Bronx"}, {});

// 6
use('db_restaurant');
db.restaurants.findOne({borough: "Bronx"}, {});

// 7
use('db_restaurant');
db.restaurants.find({borough: "Bronx"}, {}).skip(5).limit(5);

// 8
use('db_restaurant');
db.restaurants.find({"grades.score": {$gt: 90}}, {});

// 9
use('db_restaurant');
db.restaurants.find({"grades.score": {$gt: 80, $lt: 100}}, {});

// 10
use('db_restaurant');
db.restaurants.find({"address.coord.0": {$lt: -95.754168}});

// 11
use('db_restaurant');
db.restaurants.find({$and: [{cuisine: {$ne : "American"}, "address.coord.0": {$lt: 65.754168},"grades.score": {$gt: 70}}]});
