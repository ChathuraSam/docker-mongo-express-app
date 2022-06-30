# Docker-Mongo-Express App
My first NodeJS and MongoDB application on Docker

# Docker Commands Use to run the application

## Create a common network in order to run the containers
```docker network create mongo-network```

## Start mongodb
```
docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--name mongodb \
--net mongo-network \
mongo
```

## Start mongo-express (the UI application)
```
docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
--name mongo-express \
--net mongo-network \
mongo-express
```

The \ after every line may be differ in windows.
In windows you can use `


# How to run with docker-compose

Create the .yaml file to run ```docker-compose```
The [.yaml] file available in the code base

Note: You don't need to create a network and define it in the .yaml file. Because the network will automatically create by docker-compose.


## Run command to start the containers
```docker-compose -f mongo.yaml up```

## Run the command to stop the containers
```docker-compose -f mongo.yaml down```