// 1
// Trouvez la note de film la plus élevée pour chaque réalisateur.
use("db_movie");
db.movies.aggregate([
    {
        $group:{
            _id: "$director",
            BestMovieRating: {$max: "$rating"}
        }
    }
]);

// 2
// Trouvez le nombre de films réalisés par un réalisateur.
use("db_movie");
db.movies.aggregate([
    {
        $group:{
            _id: "$director",
            nbMovie: {$sum: 1},
        }
    }
]);

// 3
// Trouvez la meilleure note du film avec Ricky comme réalisateur et Tom Hanks comme l'un des acteurs.
use("db_movie");
db.movies.aggregate([
    {
        $match:{
            director: "Ricky",
            starring: "Tom Hanks"
        }
    },
    {
        $group:{
            _id: "$director",
            BestRating: {$max: "$rating"}
        }
    }
]);

// 4
// Dans combien de films Tom Hanks a-t-il joué ?
use("db_movie");
db.movies.aggregate([
    {
        $match:{
            starring: "Tom Hanks"
        }
    },
    {
        $count: "NbMovieTomHanks"
    }
]);

// 5
// Afficher la liste de toutes les stars qui ont travaillé avec le réalisateur Jon What.
use("db_movie");
db.movies.aggregate([
    {
        $match:{
            director: "Jon What"
        }
    },
    {
        $unwind: "$starring"
    },
    {
        $group:{
            _id: "$starring",
            direc:{$first:"$director"}
        }
    },
    {
        $group:{
            _id: "$direc",
            Starring: {$push: "$_id"}
        }
    }
]);
