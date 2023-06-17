# Build the docker image using following command
$ docker build -t TAGNAME DOCKER_FILE_PATH 
Ex:
$ docker build -t nodeappv1.0.0 .


# Build the container using following command
$ docker container -d -p 3000:3000 --name docker-node-app -v $(pwd):/[APP_PATH_IN_DOCKER] [IMAGE_NAME|IMAGE_ID]
Ex:
$ docker container -d -p 3000:3000 --name docker-node-app -v $(pwd):/app nodeappv1.0.0

# To prevent deleting the node_modules inside the container use the following volume
-v /[APP_PATH_IN_DOCKER]/node_modules
Ex:
-v /app/node_modules


# Build a read only docker container using following command
$ docker container -d -p 3000:3000 --name docker-node-app -v $(pwd):/[APP_PATH_IN_DOCKER]:ro -v /[APP_PATH_IN_DOCKER]/node_modules [IMAGE_NAME|IMAGE_ID]
Ex:
$ docker container -d -p 3000:3000 --name docker-node-app -v $(pwd):/app:ro -v /app/node_modules [IMAGE_NAME|IMAGE_ID]


# Pass the env file running the container (--en-file conmmand)
Ex:
$ docker container run -d -p 3000:4000 -v $(pwd):/app:ro -v /app/node_modules --env-file ./.env --name docker-node-ap  nodeappv1.0.5

--------------- DOCKER COMPOSE ------------------

Docker compose is mainly used to start/stop the container using configuration file not writing it manually.

For Development mode.
# Start the docker container
$ docker-compose -f  docker-compose.yml -f docker-compose.dev.yml up -d

# Stop the docker container
$ docker-compose -f  docker-compose.yml -f docker-compose.dev.yml down -v

-v: for removing the volumes


For Production Mode
# Start the docker container
$ docker-compose -f  docker-compose.yml -f docker-compose.prod.yml up -d

# Stop the docker container
$ docker-compose -f  docker-compose.yml -f docker-compose.prod.yml down -v

# Rebuild the image and then start the container use following command
$ docker-compose -f  docker-compose.yml -f docker-compose.prod.yml up --build -d