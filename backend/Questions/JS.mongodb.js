use('crackGen');

db.questions.insertMany([
    {
        subject: "JavaScript",
        question: "What is JavaScript?",
        answer: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification, used to create interactive and dynamic web applications."
    },
    {
        subject: "JavaScript",
        question: "What are the different data types present in JavaScript?",
        answer: "JavaScript data types are divided into Primitive (String, Number, BigInt, Boolean, Undefined, Null, Symbol) and Non-Primitive (Object, including Arrays and Functions)."
    },
    {
        subject: "JavaScript",
        question: "What is the difference between == and === operators?",
        answer: "The == operator (loose equality) compares values after converting them to a common type (coercion), while === (strict equality) compares both the value and the type without coercion."
    },
    {
        subject: "JavaScript",
        question: "What is the difference between var, let, and const?",
        answer: "var is function-scoped and hoisted with an undefined value. let and const are block-scoped and hoisted into a Temporal Dead Zone; let can be reassigned, whereas const cannot."
    },
    {
        subject: "JavaScript",
        question: "What is Hoisting in JavaScript?",
        answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before execution. Functions are fully hoisted, var is hoisted as undefined, and let/const are hoisted but uninitialized."
    },
    {
        subject: "JavaScript",
        question: "What is a Closure?",
        answer: "A closure is the combination of a function bundled together with references to its surrounding state (lexical environment), allowing an inner function to access variables from an outer function even after the outer function has executed."
    },
    {
        subject: "JavaScript",
        question: "Explain Prototype and Prototypal Inheritance.",
        answer: "Every JavaScript object has a built-in prototype object. When accessing a property or method, JavaScript looks up the prototype chain until it finds it or hits null, allowing objects to inherit features from other objects."
    },
    {
        subject: "JavaScript",
        question: "What is the Event Loop?",
        answer: "The Event Loop is a mechanism that allows JavaScript to perform non-blocking asynchronous operations despite being single-threaded, by constantly pushing tasks from the Callback and Microtask Queues onto the Call Stack once it is empty."
    },
    {
        subject: "JavaScript",
        question: "What is the difference between call(), apply(), and bind()?",
        answer: "call() executes a function immediately with a specified 'this' context and individual arguments. apply() does the same but accepts arguments as an array. bind() returns a new function with 'this' bound, to be executed later."
    },
    {
        subject: "JavaScript",
        question: "What is the difference between Debouncing and Throttling?",
        answer: "Debouncing delays function execution until a specific amount of time has passed since the last event fired (resetting the timer with each event). Throttling limits function execution to once every specified time interval, regardless of event frequency."
    },
    {
        subject: "JavaScript",
        question: "What is a Promise in JavaScript?",
        answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected."
    },
    {
        subject: "JavaScript",
        question: "What is the difference between Promise.all() and Promise.allSettled()?",
        answer: "Promise.all() rejects immediately if any promise rejects. Promise.allSettled() waits for all promises to either resolve or reject and returns an array of objects describing the outcome of each."
    },
    {
        subject: "JavaScript",
        question: "What is the purpose of async/await?",
        answer: "async/await is syntactic sugar built on top of Promises, allowing you to write asynchronous code that looks and behaves like synchronous code, making it cleaner and easier to read."
    },
    {
        subject: "JavaScript",
        question: "What is the output of 'typeof null' and why?",
        answer: "The output is 'object'. This is a well-known historical bug in JavaScript from its first version, where values were stored in 32-bit units and the object type tag was 000, which null erroneously matched."
    },
    {
        subject: "JavaScript",
        question: "What is the difference between an Arrow function and a Regular function?",
        answer: "Arrow functions do not have their own 'this' context (they inherit it lexically), cannot be used as constructors (no 'new' keyword), and do not have access to the 'arguments' object."
    },
    {
        subject: "JavaScript",
        question: "What is the purpose of the 'use strict' directive?",
        answer: "'use strict' enables Strict Mode in JavaScript, which enforces stricter parsing and error handling, prevents accidental global variables, and throws errors for previously silent failures."
    },
    {
        subject: "JavaScript",
        question: "What is Object Destructuring?",
        answer: "Object destructuring is a JavaScript expression that allows you to unpack properties from objects, or elements from arrays, into distinct, individual variables using a syntax that mirrors object creation."
    },
    {
        subject: "JavaScript",
        question: "What is the difference between Map and a regular Object?",
        answer: "A Map can use keys of any data type (including objects and functions), maintains the insertion order of its keys, and has built-in size properties, whereas an Object only allows strings/symbols as keys and does not guarantee strict ordering."
    },
    {
        subject: "JavaScript",
        question: "What is event bubbling and event capturing?",
        answer: "Event bubbling propagates an event from the innermost target element up through its ancestors. Event capturing (or trickling) propagates the event from the outermost ancestor down to the target element."
    },
    {
        subject: "JavaScript",
        question: "What is the difference between shallow copy and deep copy?",
        answer: "A shallow copy copies top-level values, but nested objects still share the same reference. A deep copy duplicates everything completely, including nested objects, so the original and the copy are entirely independent."
    }
])