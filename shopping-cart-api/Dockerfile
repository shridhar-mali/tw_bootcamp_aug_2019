FROM openjdk:8-alpine
ADD /build/libs/shopping-cart-api-1.0-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-Dspring.profiles.active=prod","-jar","/app.jar"]
