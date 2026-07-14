use('crackGen');

db.questions.insertMany([
    /* ==========================================
       MONGODB SECION (1-10)
       ========================================== */
    {
        subject: "MERN",
        question: "What is MongoDB?",
        answer: "MongoDB is an open-source, document-oriented NoSQL database system designed for high performance, high availability, and easy scalability, storing data in flexible, JSON-like BSON documents."
    },
    {
        subject: "MERN",
        question: "What is BSON?",
        answer: "BSON stands for Binary JSON. It is a binary-serialized form of JSON-like documents that MongoDB uses to store data, extending JSON to include additional data types like Date, ObjectId, and Binary."
    },
    {
        subject: "MERN",
        question: "What is an ObjectId in MongoDB?",
        answer: "An ObjectId is a unique 12-byte identifier automatically generated as the primary key (_id) for every document. It consists of a 4-byte timestamp, a 5-byte random value, and a 3-byte incrementing counter."
    },
    {
        subject: "MERN",
        question: "What is the difference between SQL and NoSQL databases?",
        answer: "SQL databases are relational, table-based, use structured schemas, and scale vertically. NoSQL databases like MongoDB are non-relational, document-based, have flexible schemas, and scale horizontally via sharding."
    },
    {
        subject: "MERN",
        question: "What is Sharding in MongoDB?",
        answer: "Sharding is the process of storing data records across multiple machines or servers to support deployments with very large data sets and high throughput operations by horizontally partitioning data."
    },
    {
        subject: "MERN",
        question: "What is Replication and what are Replica Sets?",
        answer: "Replication is the practice of synchronizing data across multiple servers for redundancy and high availability. A Replica Set is a cluster of MongoDB processes consisting of one Primary node that receives writes and multiple Secondary nodes that replicate data."
    },
    {
        subject: "MERN",
        question: "What is an Index and why is it important?",
        answer: "An Index is a special data structure that stores a small fraction of the collection's data set in an easy-to-traverse form. Indexes improve query execution speeds by preventing slow collection scans."
    },
    {
        subject: "MERN",
        question: "What is the Aggregation Framework?",
        answer: "The Aggregation Framework is a pipeline-based data processing engine in MongoDB that allows you to filter, transform, group, and calculate data from collections through sequential stages like $match, $group, and $sort."
    },
    {
        subject: "MERN",
        question: "What is the difference between embedded documents and references?",
        answer: "Embedded documents store related data directly inside a single parent document (ideal for 1-to-1 or bounded 1-to-many relationships). References store IDs linking to documents in separate collections (ideal for unbounded relationships)."
    },
    {
        subject: "MERN",
        question: "What is a covered query?",
        answer: "A covered query is a query that can be satisfied entirely by checking an index without needing to scan any actual documents from the database disk, maximizing read performance."
    },

    /* ==========================================
       EXPRESS.JS SECTION (11-20)
       ========================================== */
    {
        subject: "MERN",
        question: "What is Express.js?",
        answer: "Express.js is a minimal, flexible, and lightweight web application framework built on top of Node.js, providing a robust set of features to develop web and mobile applications, specifically RESTful APIs."
    },
    {
        subject: "MERN",
        question: "What is Middleware in Express.js?",
        answer: "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle to execute code, change objects, or end cycles."
    },
    {
        subject: "MERN",
        question: "What is the difference between app.get() and app.use() in Express?",
        answer: "app.get() registers a middleware or handler exclusively for HTTP GET requests matching an exact path. app.use() registers a middleware globally or for any HTTP method matching a path prefix."
    },
    {
        subject: "MERN",
        question: "What is the purpose of the next() function in Express middleware?",
        answer: "The next() function passes control to the next sequential middleware function in the queue. If it is not called, the request will hang and the server will fail to send a response back to the client."
    },
    {
        subject: "MERN",
        question: "How do you handle routing in Express.js?",
        answer: "Routing is handled using built-in methods tied to HTTP verbs (like app.get, app.post) or modularized cleanly using the express.Router class to split endpoints across separate files."
    },
    {
        subject: "MERN",
        question: "What is the purpose of CORS middleware in Express?",
        answer: "CORS (Cross-Origin Resource Sharing) middleware controls which third-party domains or front-end applications are securely permitted to request resources from your backend API server."
    },
    {
        subject: "MERN",
        question: "What is the difference between req.params and req.query?",
        answer: "req.params extracts variables directly embedded into the URL path route structure (e.g., /user/:id). req.query captures optional URL parameters appended after a question mark (e.g., /search?name=john)."
    },
    {
        subject: "MERN",
        question: "How do you handle errors centrally in Express.js?",
        answer: "Centralized error handling is achieved by defining a custom middleware function that explicitly accepts four arguments: (err, req, res, next). Express automatically catches errors and directs them to this signature."
    },
    {
        subject: "MERN",
        question: "What is the difference between res.send() and res.json()?",
        answer: "res.send() accepts various inputs (buffers, strings, objects) and automatically sets the content-type header contextually. res.json() explicitly converts objects/arrays to JSON format and strictly forces a application/json header."
    },
    {
        subject: "MERN",
        question: "How do you parse incoming request bodies in modern Express?",
        answer: "Incoming payloads are parsed using the built-in express.json() middleware for JSON structures, and express.urlencoded({ extended: true }) for traditional URL-encoded form submissions."
    },

    /* ==========================================
       REACTJS SECTION (21-30)
       ========================================== */
    {
        subject: "MERN",
        question: "What is ReactJS?",
        answer: "React is an open-source, component-based front-end JavaScript library used for building user interfaces, primarily for single-page applications, maintained by Meta."
    },
    {
        subject: "MERN",
        question: "What is the Virtual DOM and how does it work?",
        answer: "The Virtual DOM is a lightweight, in-memory representation of the real DOM. When a component's state changes, React updates the Virtual DOM, compares it with a previous snapshot (diffing), and efficiently updates only the changed nodes in the real DOM (reconciliation)."
    },
    {
        subject: "MERN",
        question: "What is the difference between Functional and Class components?",
        answer: "Class components use ES6 classes, manage state via 'this.state', and rely on lifecycle methods. Functional components are plain JavaScript functions that manage state and side effects using Hooks, making them the modern standard."
    },
    {
        subject: "MERN",
        question: "What is JSX?",
        answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like structure directly within JavaScript code, which is later compiled into regular React.createElement() calls."
    },
    {
        subject: "MERN",
        question: "What is the difference between props and state?",
        answer: "Props (short for properties) are read-only configuration objects passed down from a parent component to a child component. State is a local, mutable data structure managed entirely within the component itself."
    },
    {
        subject: "MERN",
        question: "What are React Hooks?",
        answer: "Hooks are functions introduced in React 16.8 that allow functional components to hook into React state and lifecycle features without writing a class (e.g., useState, useEffect, useContext)."
    },
    {
        subject: "MERN",
        question: "Explain the useEffect hook and its dependency array.",
        answer: "useEffect performs side effects in functional components. If the dependency array is omitted, it runs on every render; if empty ([]), it runs once after mounting; if it contains variables ([prop, state]), it runs only when those variables change."
    },
    {
        subject: "MERN",
        question: "Why do we need keys in React lists?",
        answer: "Keys provide a stable identity to elements in a list. They help React's diffing algorithm identify which items have changed, been added, or been removed, ensuring optimal rendering performance and state preservation."
    },
    {
        subject: "MERN",
        question: "What is Prop Drilling and how can you avoid it?",
        answer: "Prop drilling is the process of passing data down through multiple layers of nested components that do not need the data themselves. It can be avoided using React Context API, custom hooks, or state management libraries like Redux."
    },
    {
        subject: "MERN",
        question: "What is the Context API?",
        answer: "The Context API is a built-in feature in React that allows you to share global state, data, or functions across the component tree without manually passing props down through every level."
    },

    /* ==========================================
       NODE.JS SECTION (31-40)
       ========================================== */
    {
        subject: "MERN",
        question: "What is Node.js?",
        answer: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 engine that allows developers to run JavaScript code on the server side."
    },
    {
        subject: "MERN",
        question: "Is Node.js single-threaded or multi-threaded?",
        answer: "Node.js is single-threaded for executing JavaScript code (using a single main thread for the Event Loop), but it uses multi-threaded background workers via the libuv library to handle heavy I/O operations."
    },
    {
        subject: "MERN",
        question: "What is the role of the libuv library in Node.js?",
        answer: "libuv is a multi-platform C library that provides support for asynchronous I/O operations. It manages the thread pool, file system events, timers, and the underlying mechanics of the Node.js Event Loop."
    },
    {
        subject: "MERN",
        question: "What is the difference between setImmediate() and setTimeout()?",
        answer: "setImmediate() is designed to execute a script once the current Event Loop phase completes. setTimeout() schedules a script to run after a minimum threshold of milliseconds has elapsed."
    },
    {
        subject: "MERN",
        question: "What is the difference between process.nextTick() and setImmediate()?",
        answer: "process.nextTick() fires immediately after the current operation finishes, before the Event Loop continues to the next phase. setImmediate() fires during the check phase of the next Event Loop tick."
    },
    {
        subject: "MERN",
        question: "What are Streams in Node.js and what are their types?",
        answer: "Streams are collections of data that might not be available all at once and can be processed piece by piece without matching the whole file in memory. The four types are Readable, Writable, Duplex, and Transform."
    },
    {
        subject: "MERN",
        question: "What is the purpose of the Buffer class in Node.js?",
        answer: "The Buffer class is used to handle raw binary data directly in memory. It is particularly useful when dealing with TCP streams, file system operations, or receiving packets of data."
    },
    {
        subject: "MERN",
        question: "What is the difference between readFile and createReadStream?",
        answer: "fs.readFile reads the entire file content into memory asynchronously before passing it to the callback. fs.createReadStream reads the file in small, manageable chunks, making it much more memory-efficient for large files."
    },
    {
        subject: "MERN",
        question: "What is the difference between package.json and package-lock.json?",
        answer: "package.json contains general version ranges for dependencies (e.g., ^1.0.0). package-lock.json locks down the exact, nested dependency tree and precise versions installed, ensuring consistent builds across environments."
    },
    {
        subject: "MERN",
        question: "What is Callback Hell and how do you avoid it?",
        answer: "Callback Hell refers to heavily nested, unreadable callback structures caused by poor asynchronous code practices. It can be avoided by modularizing code, using Promises, or implementing async/await syntax."
    }
])