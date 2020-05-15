echo "CLEARING CACHE"

docker stop morehomes_app_1 morehomes
docker container rm morehomes_app_1 morehomes
docker image rm morehomes_app

echo "COMPOSE STARTING"
docker-compose up -d

echo "RESTARTING APP"
docker restart morehomes_app_1

echo "SEEDING DB"
docker exec morehomes_app_1 node seed/seed.js

echo "COMPOSE COMPLETE"
echo "app ready at localhost:3004"