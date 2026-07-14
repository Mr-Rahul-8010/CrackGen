use('crackGen');

db.questions.insertMany([
    {
        subject: "MongoDB",
        question: "What is MongoDB?",
        answer: "MongoDB is an open-source, document-oriented NoSQL database system designed for high performance, high availability, and easy scalability, storing data in flexible, JSON-like BSON documents."
    },
    {
        subject: "MongoDB",
        question: "What is BSON?",
        answer: "BSON stands for Binary JSON. It is a binary-serialized form of JSON-like documents that MongoDB uses to store data, extending JSON to include additional data types like Date, ObjectId, and Binary."
    },
    {
        subject: "MongoDB",
        question: "What is an ObjectId in MongoDB?",
        answer: "An ObjectId is a unique 12-byte identifier automatically generated as the primary key (_id) for every document. It consists of a 4-byte timestamp, a 5-byte random value, and a 3-byte incrementing counter."
    },
    {
        subject: "MongoDB",
        question: "What is the difference between SQL and NoSQL databases?",
        answer: "SQL databases are relational, table-based, use structured schemas, and scale vertically. NoSQL databases like MongoDB are non-relational, document-based, have flexible schemas, and scale horizontally via sharding."
    },
    {
        subject: "MongoDB",
        question: "What is Sharding in MongoDB?",
        answer: "Sharding is the process of storing data records across multiple machines or servers to support deployments with very large data sets and high throughput operations by horizontally partitioning data."
    },
    {
        subject: "MongoDB",
        question: "What is Replication and what are Replica Sets?",
        answer: "Replication is the practice of synchronizing data across multiple servers for redundancy and high availability. A Replica Set is a cluster of MongoDB processes consisting of one Primary node that receives writes and multiple Secondary nodes that replicate data."
    },
    {
        subject: "MongoDB",
        question: "What is an Index and why is it important?",
        answer: "An Index is a special data structure that stores a small fraction of the collection's data set in an easy-to-traverse form. Indexes improve query execution speeds by preventing slow collection scans."
    },
    {
        subject: "MongoDB",
        question: "What is the Aggregation Framework?",
        answer: "The Aggregation Framework is a pipeline-based data processing engine in MongoDB that allows you to filter, transform, group, and calculate data from collections through sequential stages like $match, $group, and $sort."
    },
    {
        subject: "MongoDB",
        question: "What is the difference between embedded documents and references?",
        answer: "Embedded documents store related data directly inside a single parent document (ideal for 1-to-1 or bounded 1-to-many relationships). References store IDs linking to documents in separate collections (ideal for unbounded relationships)."
    },
    {
        subject: "MongoDB",
        question: "What is a covered query?",
        answer: "A covered query is a query that can be satisfied entirely by checking an index without needing to scan any actual documents from the database disk, maximizing read performance."
    }
])