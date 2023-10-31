# nodejs docker container example

```shell
## install docker
curl -fsSL get.docker.com -o get-docker.sh && sh get-docker.sh

## build docker image
docker build -t mynodeapp:latest .

## run docker image in detach mode to keep running in the background
# the "target port" is not required as it was specified as "EXPOSE" within the dockerfile
docker run -d -p 3000 --name mynodeapp mynodeapp:latest

## get logs
docker logs -f nodeapp
```
