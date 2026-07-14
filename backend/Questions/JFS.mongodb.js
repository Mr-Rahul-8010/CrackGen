use('crackGen');

db.questions.insertMany([
    /* ==========================================
       JAVA SECTION (1-10)
       ========================================== */
    {
        subject: "JFS",
        question: "What is Java?",
        answer: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible, following the 'Write Once, Run Anywhere' (WORA) principle."
    },
    {
        subject: "JFS",
        question: "What is the difference between JDK, JRE, and JVM?",
        answer: "JVM (Java Virtual Machine) executes the bytecode. JRE (Java Runtime Environment) contains the JVM and libraries needed to run Java apps. JDK (Java Development Kit) is the full development toolset containing the JRE, compilers, and debuggers."
    },
    {
        subject: "JFS",
        question: "Why is Java not a purely object-oriented programming language?",
        answer: "Java is not purely object-oriented because it supports primitive data types (like int, char, boolean, float) which are not objects, though wrapper classes exist to objectify them."
    },
    {
        subject: "JFS",
        question: "What is the difference between an Interface and an Abstract Class?",
        answer: "An abstract class can have instance variables, constructors, and both abstract and concrete methods, supporting single inheritance. An interface primarily defines abstract methods (though default/static methods are allowed) and supports multiple inheritance."
    },
    {
        subject: "JFS",
        question: "What is the purpose of the 'final' keyword?",
        answer: "The 'final' keyword restricts further modification: a final variable cannot be reassigned, a final method cannot be overridden by subclasses, and a final class cannot be inherited."
    },
    {
        subject: "JFS",
        question: "What is Garbage Collection in Java?",
        answer: "Garbage Collection is an automatic process managed by the JVM that identifies and deletes unused, unreferenced objects from the heap memory to free up resources."
    },
    {
        subject: "JFS",
        question: "What is the difference between String, StringBuilder, and StringBuffer?",
        answer: "String is immutable and creates a new object on modification. StringBuilder and StringBuffer are mutable; StringBuilder is non-thread-safe but faster, while StringBuffer is thread-safe (synchronized) but slower."
    },
    {
        subject: "JFS",
        question: "What is the difference between Checked and Unchecked Exceptions?",
        answer: "Checked exceptions are checked at compile-time (e.g., IOException) and must be handled using try-catch or declared with throws. Unchecked exceptions occur at runtime (e.g., NullPointerException) and extend RuntimeException."
    },
    {
        subject: "JFS",
        question: "What are the four pillars of OOPs?",
        answer: "The four pillars are Encapsulation (hiding data via access modifiers), Inheritance (sharing traits between classes), Polymorphism (one interface, multiple implementations), and Abstraction (hiding implementation details)."
    },
    {
        subject: "JFS",
        question: "What is the difference between equals() and the == operator?",
        answer: "The == operator compares primitive values or reference memory addresses for objects. The equals() method is a method in the Object class intended to be overridden to compare the actual content or values within two objects."
    },

    /* ==========================================
       SPRING BOOT SECTION (11-20)
       ========================================== */
    {
        subject: "JFS",
        question: "What is Spring Boot?",
        answer: "Spring Boot is an extension of the Spring framework that eliminates the boilerplate configurations required for setting up a Spring application, offering an opinionated, production-ready environment out of the box."
    },
    {
        subject: "JFS",
        question: "What are the main advantages of using Spring Boot?",
        answer: "Key advantages include auto-configuration, dependency management via starter POMs, embedded servlet containers (like Tomcat, eliminating external server setups), and production-ready metrics through Actuator."
    },
    {
        subject: "JFS",
        question: "What is Dependency Injection (DI) and Inversion of Control (IoC)?",
        answer: "IoC is a design principle where the control of object creation is inverted from the program to a container. Dependency Injection is the specific pattern used to implement IoC, where dependencies are supplied to an object rather than created by it."
    },
    {
        subject: "JFS",
        question: "What does the @SpringBootApplication annotation do?",
        answer: "@SpringBootApplication is a convenience annotation that combines three essential annotations: @Configuration (enables Java configuration), @EnableAutoConfiguration (enables auto-configuration mechanics), and @ComponentScan (scans for Spring beans in the package)."
    },
    {
        subject: "JFS",
        question: "What is a Spring Bean?",
        answer: "A Spring Bean is simply an object that is instantiated, assembled, and managed by the Spring IoC container."
    },
    {
        subject: "JFS",
        question: "What is the difference between @Component, @Service, and @Repository annotations?",
        answer: "@Component is a generic stereotype for any Spring-managed component. @Service indicates the class holds business logic. @Repository indicates the class interacts with the data access layer and translates database exceptions."
    },
    {
        subject: "JFS",
        question: "What is Spring Boot Actuator?",
        answer: "Actuator is a sub-project of Spring Boot that provides built-in production-ready HTTP endpoints to monitor and manage the application health, metrics, configurations, and traffic statistics."
    },
    {
        subject: "JFS",
        question: "What is Spring Data JPA?",
        answer: "Spring Data JPA is a framework that significantly reduces boilerplate code for data access layers by allowing developers to implement data repositories simply by defining interfaces extending JpaRepository."
    },
    {
        subject: "JFS",
        question: "What is the difference between @RestController and @Controller?",
        answer: "@Controller is used to create traditional web pages and requires returning views. @RestController is a convenience annotation that combines @Controller and @ResponseBody, directly serializing returned objects into JSON or XML response bodies."
    },
    {
        subject: "JFS",
        question: "How do you control application properties dynamically in Spring Boot?",
        answer: "Properties are managed using application.properties or application.yml files. These values can be injected directly into Java code using the @Value annotation or mapped to object structures via @ConfigurationProperties."
    },

    /* ==========================================
       HTML SECTION (21-25)
       ========================================== */
    {
        subject: "JFS",
        question: "What is Semantic HTML?",
        answer: "Semantic HTML is the practice of using HTML tags that inherently describe the meaning and purpose of their content (such as <article>, <header>, <footer>, <nav>) rather than just for presentation or structure (<div>, <span>)."
    },
    {
        subject: "JFS",
        question: "What is the difference between block-level and inline elements?",
        answer: "Block-level elements (e.g., <div>, <p>) always start on a new line and stretch to take up the full available width. Inline elements (e.g., <span>, <a>) do not start on a new line and only take up as much width as necessary."
    },
    {
        subject: "JFS",
        question: "What is the purpose of the 'alt' attribute on an <img> tag?",
        answer: "The 'alt' attribute provides an alternative text description of an image if it fails to load, and is critically important for accessibility, allowing screen readers to describe the image to visually impaired users."
    },
    {
        subject: "JFS",
        question: "What is the purpose of data- attributes?",
        answer: "Data attributes (data-*) allow developers to store custom, private data directly inside standard HTML elements, which can later be easily accessed and manipulated using JavaScript."
    },
    {
        subject: "JFS",
        question: "What is the difference between local storage, session storage, and cookies?",
        answer: "Local storage persists indefinitely until cleared. Session storage lasts only as long as the browser tab remains open. Cookies are small data pieces sent back and forth with HTTP network requests, usually tracking session states."
    },

    /* ==========================================
       CSS SECTION (26-30)
       ========================================== */
    {
        subject: "JFS",
        question: "What is the CSS Box Model?",
        answer: "The CSS Box Model is a container wrapping every HTML element, consisting of four layers from inside out: Content (text/images), Padding (space around content), Border (edge line), and Margin (space outside the border)."
    },
    {
        subject: "JFS",
        question: "What is the difference between absolute, relative, fixed, and sticky positioning?",
        answer: "Relative positions an element relative to its normal position. Absolute positions it relative to its nearest positioned ancestor. Fixed positions it relative to the browser window. Sticky toggles between relative and fixed depending on scroll position."
    },
    {
        subject: "JFS",
        question: "What is Flexbox?",
        answer: "Flexbox (Flexible Box Layout) is a one-dimensional layout model designed for laying out items in a row or a column, optimizing space distribution and alignment between items inside a container."
    },
    {
        subject: "JFS",
        question: "What is CSS Grid?",
        answer: "CSS Grid is a powerful two-dimensional grid-based layout system that allows developers to align content easily into complex rows and columns simultaneously."
    },
    {
        subject: "JFS",
        question: "What does the box-sizing: border-box property do?",
        answer: "border-box alters the Box Model calculation so that the specified width and height properties include the element's padding and borders, preventing layout breakages when padding is added."
    },

    /* ==========================================
       JAVASCRIPT SECTION (31-40)
       ========================================== */
    {
        subject: "JFS",
        question: "What are the different data types present in JavaScript?",
        answer: "JavaScript data types are divided into Primitive (String, Number, BigInt, Boolean, Undefined, Null, Symbol) and Non-Primitive (Object, including Arrays and Functions)."
    },
    {
        subject: "JFS",
        question: "What is the difference between == and === operators?",
        answer: "The == operator (loose equality) compares values after converting them to a common type (coercion), while === (strict equality) compares both the value and the type without coercion."
    },
    {
        subject: "JFS",
        question: "What is the difference between var, let, and const?",
        answer: "var is function-scoped and hoisted with an undefined value. let and const are block-scoped and hoisted into a Temporal Dead Zone; let can be reassigned, whereas const cannot."
    },
    {
        subject: "JFS",
        question: "What is Hoisting in JavaScript?",
        answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before execution. Functions are fully hoisted, var is hoisted as undefined, and let/const are hoisted but uninitialized."
    },
    {
        subject: "JFS",
        question: "What is a Closure?",
        answer: "A closure is the combination of a function bundled together with references to its surrounding state (lexical environment), allowing an inner function to access variables from an outer function even after the outer function has executed."
    },
    {
        subject: "JFS",
        question: "Explain Prototype and Prototypal Inheritance.",
        answer: "Every JavaScript object has a built-in prototype object. When accessing a property or method, JavaScript looks up the prototype chain until it finds it or hits null, allowing objects to inherit features from other objects."
    },
    {
        subject: "JFS",
        question: "What is the Event Loop?",
        answer: "The Event Loop is a mechanism that allows JavaScript to perform non-blocking asynchronous operations despite being single-threaded, by constantly pushing tasks from the Callback and Microtask Queues onto the Call Stack once it is empty."
    },
    {
        subject: "JFS",
        question: "What is the difference between call(), apply(), and bind()?",
        answer: "call() executes a function immediately with a specified 'this' context and individual arguments. apply() does the same but accepts arguments as an array. bind() returns a new function with 'this' bound, to be executed later."
    },
    {
        subject: "JFS",
        question: "What is the difference between Debouncing and Throttling?",
        answer: "Debouncing delays function execution until a specific amount of time has passed since the last event fired (resetting the timer with each event). Throttling limits function execution to once every specified time interval, regardless of event frequency."
    },
    {
        subject: "JFS",
        question: "What is a Promise in JavaScript?",
        answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected."
    }
])