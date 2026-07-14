use('crackGen');

db.questions.insertMany([
    {
        subject: "NodeJS",
        question: "What is Node.js?",
        answer: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 engine that allows developers to run JavaScript code on the server side."
    },
    {
        subject: "NodeJS",
        question: "Is Node.js single-threaded or multi-threaded?",
        answer: "Node.js is single-threaded for executing JavaScript code (using a single main thread for the Event Loop), but it uses multi-threaded background workers via the libuv library to handle heavy I/O operations."
    },
    {
        subject: "NodeJS",
        question: "What is the role of the libuv library in Node.js?",
        answer: "libuv is a multi-platform C library that provides support for asynchronous I/O operations. It manages the thread pool, file system events, timers, and the underlying mechanics of the Node.js Event Loop."
    },
    {
        subject: "NodeJS",
        question: "What is the difference between setImmediate() and setTimeout()?",
        answer: "setImmediate() is designed to execute a script once the current Event Loop phase completes. setTimeout() schedules a script to run after a minimum threshold of milliseconds has elapsed."
    },
    {
        subject: "NodeJS",
        question: "What is the difference between process.nextTick() and setImmediate()?",
        answer: "process.nextTick() fires immediately after the current operation finishes, before the Event Loop continues to the next phase. setImmediate() fires during the check phase of the next Event Loop tick."
    },
    {
        subject: "NodeJS",
        question: "What are Streams in Node.js and what are their types?",
        answer: "Streams are collections of data that might not be available all at once and can be processed piece by piece without matching the whole file in memory. The four types are Readable, Writable, Duplex, and Transform."
    },
    {
        subject: "NodeJS",
        question: "What is the purpose of the Buffer class in Node.js?",
        answer: "The Buffer class is used to handle raw binary data directly in memory. It is particularly useful when dealing with TCP streams, file system operations, or receiving packets of data."
    },
    {
        subject: "NodeJS",
        question: "What is REPL in Node.js?",
        answer: "REPL stands for Read-Eval-Print Loop. It is an interactive computer environment (like a terminal window) that takes user inputs, evaluates them, prints the results, and loops back to wait for the next input."
    },
    {
        subject: "NodeJS",
        question: "What is the difference between readFile and createReadStream?",
        answer: "fs.readFile reads the entire file content into memory asynchronously before passing it to the callback. fs.createReadStream reads the file in small, manageable chunks, making it much more memory-efficient for large files."
    },
    {
        subject: "NodeJS",
        question: "What is npm and what does package.json do?",
        answer: "npm is the default package manager for Node.js. package.json is a manifest file that holds metadata about the project, script shortcuts, and lists the exact dependencies required to run the application."
    },
    {
        subject: "NodeJS",
        question: "What is the difference between package.json and package-lock.json?",
        answer: "package.json contains general version ranges for dependencies (e.g., ^1.0.0). package-lock.json locks down the exact, nested dependency tree and precise versions installed, ensuring consistent builds across environments."
    },
    {
        subject: "NodeJS",
        question: "How do you handle unhandled exceptions in Node.js?",
        answer: "Unhandled exceptions can be caught globally by listening to the 'uncaughtException' event on the process object, though it is highly recommended to log the error and gracefully restart the application using a process manager."
    },
    {
        subject: "NodeJS",
        question: "What is the difference between CommonJS and ES Modules?",
        answer: "CommonJS uses require() and module.exports, loading modules synchronously at runtime. ES Modules (ESM) use import and export, loading modules asynchronously and statically during parsing."
    },
    {
        subject: "NodeJS",
        question: "What is the Event Emitter class?",
        answer: "EventEmitter is a built-in class in the 'events' module that enables objects to emit named events that cause registered listeners to be called, facilitating decoupled, event-driven architecture."
    },
    {
        subject: "NodeJS",
        question: "What are Worker Threads in Node.js?",
        answer: "Worker Threads allow Node.js to execute CPU-intensive JavaScript tasks in parallel on separate threads, preventing heavy mathematical or data processing tasks from blocking the main Event Loop."
    },
    {
        subject: "NodeJS",
        question: "What is Middleware in Express.js?",
        answer: "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle to execute code, change objects, or end cycles."
    },
    {
        subject: "NodeJS",
        question: "What is the difference between app.get() and app.use() in Express?",
        answer: "app.get() registers a middleware or handler exclusively for HTTP GET requests matching an exact path. app.use() registers a middleware globally or for any HTTP method matching a path prefix."
    },
    {
        subject: "NodeJS",
        question: "How does the cluster module work in Node.js?",
        answer: "The cluster module allows you to easily create child processes (workers) that share the same server ports. This scales a single-threaded Node.js app across multiple CPU cores to handle greater traffic load."
    },
    {
        subject: "NodeJS",
        question: "What is Callback Hell and how do you avoid it?",
        answer: "Callback Hell refers to heavily nested, unreadable callback structures caused by poor asynchronous code practices. It can be avoided by modularizing code, using Promises, or implementing async/await syntax."
    },
    {
        subject: "NodeJS",
        question: "What is the purpose of the path module?",
        answer: "The built-in path module provides utilities for working with file and directory paths uniformly across different operating systems (handling Windows backslashes vs. POSIX forward slashes seamlessly)."
    }
])