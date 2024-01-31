Answer BackUp and Restore
======
  ```
● 2.1: docker exec -i mongo mongoimport
     --uri=mongodb://root:admin@localhost:27017
     --authenticationDatabase admin
     --db="library" /backupdb/books.json
```

```   
● 2.2: docker exec -i mongo mongodump
  --uri mongodb://root:admin@localhost:27017 
  --authenticationDatabase=admin   
  --db="library"
  --out=./backupdb/mongo-dump-012624
```

```
● 2.3: docker exec -i mongo mongodump 
  --uri=mongodb://root:admin@localhost:27017  
  --gzip  
  --out=/backupdb/mongo-dump-gzip-012624
```

```
  
● 2.4: docker exec -i mongo mongorestore
  --uri=mongodb://root:admin@localhost:27017
  --authenticationDatabase=admin    
  --gzip --drop
  --db="library" /backupdb/mongo-dump-gzip-012624/library
```

```
● 2.5: docker exec -i mongo mongorestore
  --uri=mongodb://root:admin@localhost:27017
  --authenticationDatabase=admin   
  --gzip --drop 
  --nsInclude=library.books /backupdb/mongo-dump-gzip-012624
```

```
● 2.7: docker exec -i mongo mongorexport
  --uri=mongodb://root:admin@localhost:27017
  --authenticationDatabase=admin   
  --db=library --collection=books 
  --out=/backupdb/library-book.json
```
