FROM eclipse-temurin:17-jdk-alpine

# Set environment variables


VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
