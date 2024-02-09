use('db_restaurant');
//1
//db.restaurants.find();
//2
//db.restaurants.find({},{id: 1, name: 1, borough: 1, cuisine: 1, restaurant_id: 1})
//3
//db.restaurants.find({}, {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1});
//4
//db.restaurants.find({}, {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1, "address.zipcode": 1});
//5
//db.restaurants.find({"borough" : "Bronx"}).pretty();
//6
//db.restaurants.findOne({"borough" : "Bronx"});
//7
//db.restaurants.find({"borough" : "Bronx"}).skip(5).limit(5);
//8
//db.restaurants.find({"grades.score" : {"$gt" : 90}});
//9
//db.restaurants.find({"grades.score" : {"$gt" : 80,"$lt" : 100}});
//db.restaurants.find({$and : [{"grades.score" : {"$gt" : 90}},{"grades.score" : {"$lt" : 100}}]});
//10
//db.restaurants.find({"address.coord.0" : {$lt : -95.754168}});
//11
//db.restaurants.find({$and : [{"cuisine" : {$ne : "American "}}, {"address.coord.0" : {$lt : -65.754168}}, {"grades.score" : {$gt : 70}}]});
//12
//db.restaurants.find({$and : [{"cuisine" : {$ne : "American "}}, {"address.coord.1" : {$lt : -65.754168}}, {"grades.score" : {$gt : 70}}]});
//13
db.restaurants.find