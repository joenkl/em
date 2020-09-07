# Jatda Info

## Docker Commands

### Start

`docker-compose up` or start in detached mode `docker-compose up -d`

### Down

`docker-compose down -v`

### Clean EM images and container

`docker-compose down -v --rmi all --remove-orphans`

### Runing Unit Test

`docker exec -it <container-name> /bin/sh` then `npm test`

### Clean up docker

```bash
docker-compose down -v --rmi all --remove-orphans
docker rmi $(docker images -q)
docker volume rm $(docker volume ls -f dangling=true -q)
docker rm $(docker ps -q)

docker ps -a
docker images
docker volume ls
```

## How to bootstrap the app

"start": "node server/index.js",
"server": "nodemon server/index.js",
"client": "npm run start --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\""
