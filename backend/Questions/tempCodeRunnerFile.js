use('CrackGen');

db.questions.insertMany([
    {
        subject: "Python",
        question: "What is Python?",
        answer: "Python is a high-level, interpreted, object-oriented programming language with dynamic semantics, known for its simple syntax, readability, and versatility."
    },
    {
        subject: "Python",
        question: "What is the difference between a List and a Tuple?",
        answer: "Lists are mutable, meaning their elements can be modified, added, or removed after creation, and use square brackets []. Tuples are immutable, meaning they cannot be changed after creation, and use parentheses ()."
    },
    {
        subject: "Python",
        question: "What is PEP 8?",
        answer: "PEP 8 is Python's official Style Guide. It provides a set of rules and guidelines on how to format Python code to maximize its readability and consistency."
    },
    {
        subject: "Python",
        question: "What are Python Decorators?",
        answer: "A decorator is a design pattern in Python that allows you to modify or extend the behavior of a function or class without permanently changing its source code, using the @decorator syntax."
    },
    {
        subject: "Python",
        question: "What is a Dictionary in Python?",
        answer: "A dictionary is an unordered, mutable collection of data values stored as key-value pairs, where each key must be unique and hashable, written using curly braces {}."
    },
    {
        subject: "Python",
        question: "What is the difference between 'is' and '=='?",
        answer: "The '==' operator checks for equality of values (whether two variables hold the same data), while the 'is' operator checks for identity (whether two variables point to the exact same object in memory)."
    },
    {
        subject: "Python",
        question: "What are List Comprehensions?",
        answer: "List comprehension is a concise and syntactic way to create new lists from existing iterables (like lists, tuples, or strings) based on a conditional expression, replacing verbose for-loops."
    },
    {
        subject: "Python",
        question: "What is the Global Interpreter Lock (GIL)?",
        answer: "The GIL is a mutex (lock) used by the CPython interpreter to ensure that only one thread executes Python bytecode at a time, making execution single-threaded even on multi-core systems."
    },
    {
        subject: "Python",
        question: "What is the purpose of the '__init__' method?",
        answer: "The '__init__' method is a special reserved method (constructor) in Python classes that is automatically called to initialize an object's attributes when a new instance of the class is created."
    },
    {
        subject: "Python",
        question: "What is the difference between deep copy and shallow copy in Python?",
        answer: "A shallow copy creates a new object but references the nested child objects of the original. A deep copy recursively duplicates the entire structure, copying all nested elements completely so they share no references."
    }
])