use('db_bird');
db.sightings.aggregate([
   {$match:{species_common: "Eastern Bluebird"}},{$group:{_id:"location.coordinates", lenombre:{$count:{}}}
}]).pretty();

use('db_bird');
db.sightings.aggregate([
   { $sort: {'location.coordinates.1': -1}},{$limit: 4}
 ]).pretty();

use('db_bird');
db.sightings.aggregate([{$project: {_id: 0,species_common: 1,date: 1}}])

use('db_bird');
db.birds.aggregate([{$set:{'class':'quentin'}}])


use('db_bird');
db.sightings.aggregate([
  {
    $match:{
        species_common: "Eastern Bluebird",
        date: {
            $gt: ISODate('2022-01-01T00:00:00.0Z'),
            $lt: ISODate('2023-01-01T00:00:00.0Z')
        }}
},{$count:'quentin'}   
]).pretty();