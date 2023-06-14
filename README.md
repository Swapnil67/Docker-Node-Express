# Build the docker image using following command
$ docker build -t TAGNAME DOCKER_FILE_PATH 
Ex:
$ docker build -t nodeappv1.0.0 .


# Build the container using following command
$ docker container -d -p 3000:3000 --name docker-node-app -v $(pwd):/[APP_PATH_IN_DOCKER] [IMAGE_NAME|IMAGE_ID]
Ex:
$ docker container -d -p 3000:3000 --name docker-node-app -v $(pwd):/app nodeappv1.0.0


# Build a read only docker container using following command
$ docker container -d -p 3000:3000 --name docker-node-app -v $(pwd):/[APP_PATH_IN_DOCKER]:ro [IMAGE_NAME|IMAGE_ID]

$ docker container -d -p 3000:3000 --name docker-node-app -v $(pwd):/app:ro [IMAGE_NAME|IMAGE_ID]

