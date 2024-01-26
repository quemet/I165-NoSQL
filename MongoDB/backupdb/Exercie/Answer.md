Answer BackUp and Restore
======
  ```
● docker exec -i mongo mongoimport
     --uri=mongodb://root:admin@localhost:27017
     --authenticationDatabase admin
     --db="library" /backupdb/books.json
```

```   
● docker exec -i mongo mongodump
  --host=localhost 
  --port=27017
  --username=root` 
  --password=admin  
  --authenticationDatabase=admin   
  --db="library"
  --out=./backupdb/mongo-dump-012624
```

```
● docker exec -i mongo mongodump 
  --uri=mongodb://root:admin@localhost:27017  
  --gzip  
  --out=/backupdb/mongo-dump-gzip-012624
```

```
  
● docker exec -i mongo mongorestore  
  --gzip  
  --db="library"  
  --uri=mongodb://root:admin@localhost:27017  
  --authenticationDatabase=admin /backupdb/mongo-dump-gzip-012624/library
```

```
● docker exec -i mongo mongorestore  
  --gzip
  --uri=mongodb://root:admin@localhost:27017  
  --nsInclude=library.books  
  --drop 
  --authenticationDatabase=admin /backupdb/mongo-dump-gzip-012624
```
