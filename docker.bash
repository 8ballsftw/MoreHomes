docker build -t morehomes .
docker run -it -p 1000:3000 --name attempt --rm morehomes