use('crackGen');

db.questions.insertMany([
    /* ==========================================
       PYTHON CORE & ADVANCED (1-10)
       ========================================== */
    {
        subject: "PFS",
        question: "What is Python?",
        answer: "Python is a high-level, interpreted, object-oriented programming language with dynamic semantics, known for its simple syntax, readability, and versatility."
    },
    {
        subject: "PFS",
        question: "What is the difference between a List and a Tuple?",
        answer: "Lists are mutable, meaning their elements can be modified, added, or removed after creation, and use square brackets []. Tuples are immutable, meaning they cannot be changed after creation, and use parentheses ()."
    },
    {
        subject: "PFS",
        question: "What is PEP 8?",
        answer: "PEP 8 is Python's official Style Guide. It provides a set of rules and guidelines on how to format Python code to maximize its readability and consistency."
    },
    {
        subject: "PFS",
        question: "What are Python Decorators?",
        answer: "A decorator is a design pattern in Python that allows you to modify or extend the behavior of a function or class without permanently changing its source code, using the @decorator syntax."
    },
    {
        subject: "PFS",
        question: "What is the difference between 'is' and '=='?",
        answer: "The '==' operator checks for equality of values (whether two variables hold the same data), while the 'is' operator checks for identity (whether two variables point to the exact same object in memory)."
    },
    {
        subject: "PFS",
        question: "What are List Comprehensions?",
        answer: "List comprehension is a concise and syntactic way to create new lists from existing iterables (like lists, tuples, or strings) based on a conditional expression, replacing verbose for-loops."
    },
    {
        subject: "PFS",
        question: "What is the Global Interpreter Lock (GIL)?",
        answer: "The GIL is a mutex (lock) used by the CPython interpreter to ensure that only one thread executes Python bytecode at a time, making execution single-threaded even on multi-core systems."
    },
    {
        subject: "PFS",
        question: "What is the purpose of the '__init__' method?",
        answer: "The '__init__' method is a special reserved method (constructor) in Python classes that is automatically called to initialize an object's attributes when a new instance of the class is created."
    },
    {
        subject: "PFS",
        question: "What is the difference between deep copy and shallow copy in Python?",
        answer: "A shallow copy creates a new object but references the nested child objects of the original. A deep copy recursively duplicates the entire structure, copying all nested elements completely so they share no references."
    },
    {
        subject: "PFS",
        question: "What are *args and **kwargs in Python?",
        answer: "*args allows a function to accept any number of positional arguments as a tuple, while **kwargs allows it to accept any number of keyword arguments as a dictionary."
    },

    /* ==========================================
       DJANGO & BACKEND (11-20)
       ========================================== */
    {
        subject: "PFS",
        question: "What is Django?",
        answer: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design, famous for its 'batteries-included' philosophy."
    },
    {
        subject: "PFS",
        question: "What architecture pattern does Django follow?",
        answer: "Django follows the MVT (Model-View-Template) architecture pattern, which is a slight variation of MVC. The Model handles data, the View executes business logic and interacts with the model, and the Template handles the presentation layer."
    },
    {
        subject: "PFS",
        question: "What is the purpose of Django Migrations?",
        answer: "Migrations are Django’s way of propagating changes you make to your models (adding a field, deleting a model, etc.) into your database schema automatically."
    },
    {
        subject: "PFS",
        question: "What is Django ORM?",
        answer: "The Django Object-Relational Mapper (ORM) allows you to interact with your database using Python code and objects instead of writing raw SQL queries."
    },
    {
        subject: "PFS",
        question: "What is Middleware in Django?",
        answer: "Middleware is a framework of hooks into Django’s request/response processing. It is a light, low-level 'plugin' system for globally altering Django’s input or output (e.g., handling authentication or session data)."
    },
    {
        subject: "PFS",
        question: "What does the 'select_related' method do?",
        answer: "select_related is a performance optimization method used to follow foreign-key relationships, selecting additional related-object data when the query is executed via a SQL JOIN, reducing subsequent database hits."
    },
    {
        subject: "PFS",
        question: "How does Django protect against Cross-Site Request Forgery (CSRF)?",
        answer: "Django protects against CSRF attacks by embedding a unique, secret user-specific token inside POST forms (using the {% csrf_token %} template tag) and validating it on submission."
    },
    {
        subject: "PFS",
        question: "What is Django REST Framework (DRF)?",
        answer: "DRF is a powerful and flexible toolkit built on top of Django used specifically for building Web APIs (Application Programming Interfaces) quickly and efficiently."
    },
    {
        subject: "PFS",
        question: "What is the difference between Function-Based Views (FBVs) and Class-Based Views (CBVs) in Django?",
        answer: "FBVs are explicit and easy to implement using standard Python functions, while CBVs leverage object-oriented principles like inheritance and mixins to reuse code and structures for common web workflows."
    },
    {
        subject: "PFS",
        question: "What is the purpose of Django signals?",
        answer: "Django signals allow decoupled applications to get notified when certain actions occur elsewhere in the framework, such as performing a specific task immediately after a database row is saved."
    }
])