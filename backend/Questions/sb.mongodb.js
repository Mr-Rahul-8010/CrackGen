use('crackGen');

db.questions.insertMany([
    {
        subject: "Spring Boot",
        question: "What is Spring Boot?",
        answer: "Spring Boot is an extension of the Spring framework that eliminates the boilerplate configurations required for setting up a Spring application, offering an opinionated, production-ready environment out of the box."
    },
    {
        subject: "Spring Boot",
        question: "What are the main advantages of using Spring Boot?",
        answer: "Key advantages include auto-configuration, dependency management via starter POMs, embedded servlet containers (like Tomcat, eliminating external server setups), and production-ready metrics through Actuator."
    },
    {
        subject: "Spring Boot",
        question: "What is Dependency Injection (DI) and Inversion of Control (IoC)?",
        answer: "IoC is a design principle where the control of object creation is inverted from the program to a container. Dependency Injection is the specific pattern used to implement IoC, where dependencies are supplied to an object rather than created by it."
    },
    {
        subject: "Spring Boot",
        question: "What does the @SpringBootApplication annotation do?",
        answer: "@SpringBootApplication is a convenience annotation that combines three essential annotations: @Configuration (enables Java configuration), @EnableAutoConfiguration (enables auto-configuration mechanics), and @ComponentScan (scans for Spring beans in the package)."
    },
    {
        subject: "Spring Boot",
        question: "What is a Spring Bean?",
        answer: "A Spring Bean is simply an object that is instantiated, assembled, and managed by the Spring IoC container."
    },
    {
        subject: "Spring Boot",
        question: "What is the difference between @Component, @Service, and @Repository annotations?",
        answer: "@Component is a generic stereotype for any Spring-managed component. @Service indicates the class holds business logic. @Repository indicates the class interacts with the data access layer and translates database exceptions."
    },
    {
        subject: "Spring Boot",
        question: "What is Spring Boot Actuator?",
        answer: "Actuator is a sub-project of Spring Boot that provides built-in production-ready HTTP endpoints to monitor and manage the application health, metrics, configurations, and traffic statistics."
    },
    {
        subject: "Spring Boot",
        question: "What is Spring Data JPA?",
        answer: "Spring Data JPA is a framework that significantly reduces boilerplate code for data access layers by allowing developers to implement data repositories simply by defining interfaces extending JpaRepository."
    },
    {
        subject: "Spring Boot",
        question: "What is the difference between @RestController and @Controller?",
        answer: "@Controller is used to create traditional web pages and requires returning views. @RestController is a convenience annotation that combines @Controller and @ResponseBody, directly serializing returned objects into JSON or XML response bodies."
    },
    {
        subject: "Spring Boot",
        question: "How do you control application properties dynamically in Spring Boot?",
        answer: "Properties are managed using application.properties or application.yml files. These values can be injected directly into Java code using the @Value annotation or mapped to object structures via @ConfigurationProperties."
    }
])