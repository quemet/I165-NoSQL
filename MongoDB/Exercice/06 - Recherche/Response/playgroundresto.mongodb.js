use('db_restaurant');
//1
db.restaurants.find();
//2
db.restaurants.find({},{id: 1, name: 1, borough: 1, cuisine: 1, restaurant_id: 1})
//3
db.restaurants.find({}, {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1});
//4
db.restaurants.find({}, {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1, "address.zipcode": 1});
//5
db.restaurants.find({"borough" : "Bronx"}).pretty();
//6
db.restaurants.findOne({"borough" : "Bronx"});
//7
db.restaurants.find({"borough" : "Bronx"}).skip(5).limit(5);
//8
db.restaurants.find({"grades.score" : {"$gt" : 90}});
//9
db.restaurants.find({$and : [{"grades.score" : {"$gt" : 90}},{"grades.score" : {"$lt" : 100}}]});
//10
db.restaurants.find({"address.coord.0" : { $lt : -95.754168 } });
//11
db.restaurants.find({$and : [{"cuisine" : {$ne : "American "}}, {"address.coord.0" : {$lt : -65.754168}}, {"grades.score" : {$gt : 70}}]});
// 12
db.restaurants.find({
    $and : [
        {"cuisine" : {$ne : "American "}}, {"address.coord.1" : {$lt : -65.754168}}, {"grades.score" : {$gt : 70}}]});
//13
db.restaurants.find({ $and : [
    { cuisine: { $not: /^American^/ } },
    { "grades.grade": "A"},
    { borough: { $not: /^Brooklyn^/ } }
]}).sort({ cuisine: -1 });
// 14
db.restaurants.find({ 
    name: /^wil*/ 
}, {
    _id: 0, 
    restaurant_id: 1, 
    name: 1, 
    "address.zipcode": 1, 
    cuisine: 1
});
// 15
db.restaurants.find({ 
    name: / *ces^/
}, {
    _id: 0, 
    restaurant_id: 1, 
    name: 1, 
    "address.zipcode": 1, 
    cuisine: 1
});
// 16
db.restaurants.find({
    name: /reg/
}, {
    name: 1, 
    "address.zipcode": 1, 
    cuisine: 1 
});
// 17
db.restaurants.find({
    $and: [
        { borough: "Bronx"},
        { $or: [
            {cuisine: "American"},
            {cuisine: "Chinese" }
        ]}
    ]
}, {name: 1, "address.zipcode": 1, cuisine: 1});
// 18
db.restaurants.find({
    $or: [
        { borough: "Staten Island" },
        { borough: "Queens"},
        { borough: "Bronxor Brooklyn"}
    ],
}, {
    name: 1, 
    borough: 1, 
    cuisine: 1
});
// 19
// 20
db.restaurants.find({
    "grades.score": {$lt: 10 }
}, {
    name: 1,
    borough: 1, 
    cuisine: 1
});
// 21
db.restaurants.find({
    $and: [
        { cuisine: "American" },
        { cuisine: "Chinese" }
    ],
    $or: [
        { name: /^Wil*/ }
    ],
}, {
    name: 1,
    borough: 1,
    cuisine: 1
});
// 22
db.restaurants.find({
    "grades.grade": "A",
    "grades.score": 11,
    "grades.$date": "2014-08-11T00:00:00Z"
}, {
    name: 1,
    "grades.grade": 1,
});
// 23
