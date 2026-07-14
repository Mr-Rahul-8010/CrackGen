use('crackGen');

db.questions.insertMany([
    {
        subject: "Django",
        question: "What is Django?",
        answer: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design, famous for its 'batteries-included' philosophy."
    },
    {
        subject: "Django",
        question: "What architecture pattern does Django follow?",
        answer: "Django follows the MVT (Model-View-Template) architecture pattern, which is a slight variation of MVC. The Model handles data, the View executes business logic and interacts with the model, and the Template handles the presentation layer."
    },
    {
        subject: "Django",
        question: "What is the purpose of Django Migrations?",
        answer: "Migrations are Django’s way of propagating changes you make to your models (adding a field, deleting a model, etc.) into your database schema automatically."
    },
    {
        subject: "Django",
        question: "What is Django ORM?",
        answer: "The Django Object-Relational Mapper (ORM) allows you to interact with your database using Python code and objects instead of writing raw SQL queries."
    },
    {
        subject: "Django",
        question: "What is the difference between a project and an app in Django?",
        answer: "A Django project is a complete web application instance containing configurations and settings. An app is a web application submodule created to perform a specific function (e.g., a blog, a payment system) that can live inside a project."
    },
    {
        subject: "Django",
        question: "What is Middleware in Django?",
        answer: "Middleware is a framework of hooks into Django’s request/response processing. It is a light, low-level 'plugin' system for globally altering Django’s input or output (e.g., handling authentication or session data)."
    },
    {
        subject: "Django",
        question: "What does the 'select_related' method do?",
        answer: "select_related is a performance optimization method used to follow foreign-key relationships, selecting additional related-object data when the query is executed via a SQL JOIN, reducing subsequent database hits."
    },
    {
        subject: "Django",
        question: "What is the function of settings.py?",
        answer: "settings.py is the core configuration file of a Django project, managing database setups, installed applications, middleware configurations, static file paths, and security keys."
    },
    {
        subject: "Django",
        question: "How does Django protect against Cross-Site Request Forgery (CSRF)?",
        answer: "Django protects against CSRF attacks by embedding a unique, secret user-specific token inside POST forms (using the {% csrf_token %} template tag) and validating it on submission."
    },
    {
        subject: "Django",
        question: "What is Django REST Framework (DRF)?",
        answer: "DRF is a powerful and flexible toolkit built on top of Django used specifically for building Web APIs (Application Programming Interfaces) quickly and efficiently."
    }
])