

# Docker-Swarm-Kafka-App

This is a distributed application that leverages Docker Swarm for orchestration and Kafka for real-time data streaming. It consists of several microservices, each running in its own Docker container. The application also includes two Spring Boot applications, each connecting to a different database and exposing its own REST API. The Docker Swarm configuration for the application is specified in a compose2.yaml file.

## Prerequisites

- Docker
- Docker Swarm
- Kafka

## Setup

1. Initialize Docker Swarm:

```bash
docker swarm init
```

2. Join other nodes to the swarm (if any):

```bash
docker swarm join --token SWMTKN-1-5o5f1fl8k8gmjswniia2a2i9wbwq4x8dksonv7stbbdyguavz2-dar8c4katvw0t4u6cmog65hj7 192.168.65.3:2377
```

## Deployment

To deploy the services to Docker Swarm, run the following command:

```bash
docker stack deploy -c compose2.yaml project
```

## Stopping Services

To stop the services, you can leave the swarm:

```bash
docker swarm leave --force
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
