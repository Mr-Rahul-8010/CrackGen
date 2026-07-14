use('crackGen');

db.questions.insertMany([
    {
        subject: "Java",
        question: "What is Java?",
        answer: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible, following the 'Write Once, Run Anywhere' (WORA) principle."
    },
    {
        subject: "Java",
        question: "What is the difference between JDK, JRE, and JVM?",
        answer: "JVM (Java Virtual Machine) executes the bytecode. JRE (Java Runtime Environment) contains the JVM and libraries needed to run Java apps. JDK (Java Development Kit) is the full development toolset containing the JRE, compilers, and debuggers."
    },
    {
        subject: "Java",
        question: "Why is Java not a purely object-oriented programming language?",
        answer: "Java is not purely object-oriented because it supports primitive data types (like int, char, boolean, float) which are not objects, though wrapper classes exist to objectify them."
    },
    {
        subject: "Java",
        question: "What is the difference between an Interface and an Abstract Class?",
        answer: "An abstract class can have instance variables, constructors, and both abstract and concrete methods, supporting single inheritance. An interface primarily defines abstract methods (though default/static methods are allowed) and supports multiple inheritance."
    },
    {
        subject: "Java",
        question: "What is the purpose of the 'final' keyword?",
        answer: "The 'final' keyword restricts further modification: a final variable cannot be reassigned, a final method cannot be overridden by subclasses, and a final class cannot be inherited."
    },
    {
        subject: "Java",
        question: "What is Garbage Collection in Java?",
        answer: "Garbage Collection is an automatic process managed by the JVM that identifies and deletes unused, unreferenced objects from the heap memory to free up resources."
    },
    {
        subject: "Java",
        question: "What is the difference between String, StringBuilder, and StringBuffer?",
        answer: "String is immutable and creates a new object on modification. StringBuilder and StringBuffer are mutable; StringBuilder is non-thread-safe but faster, while StringBuffer is thread-safe (synchronized) but slower."
    },
    {
        subject: "Java",
        question: "What is the difference between Checked and Unchecked Exceptions?",
        answer: "Checked exceptions are checked at compile-time (e.g., IOException) and must be handled using try-catch or declared with throws. Unchecked exceptions occur at runtime (e.g., NullPointerException) and extend RuntimeException."
    },
    {
        subject: "Java",
        question: "What are the four pillars of OOPs?",
        answer: "The four pillars are Encapsulation (hiding data via access modifiers), Inheritance (sharing traits between classes), Polymorphism (one interface, multiple implementations), and Abstraction (hiding implementation details)."
    },
    {
        subject: "Java",
        question: "What is the difference between equals() and the == operator?",
        answer: "The == operator compares primitive values or reference memory addresses for objects. The equals() method is a method in the Object class intended to be overridden to compare the actual content or values within two objects."
    }
])