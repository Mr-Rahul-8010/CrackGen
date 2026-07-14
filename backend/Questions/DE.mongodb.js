use('crackGen');

db.questions.insertMany([
    /* ==========================================
       DATA ENGINEERING STACK (1-20)
       ========================================== */
    {
        subject: "DE",
        question: "What is Data Engineering?",
        answer: "Data Engineering focuses on practical applications of data collection, processing, delivery, and building robust data pipelines that clean, structure, and transport raw data into accessible formats for analysts and data scientists."
    },
    {
        subject: "DE",
        question: "What is the difference between ETL and ELT pipelines?",
        answer: "ETL (Extract, Transform, Load) transforms data on a separate staging server before writing it to a target system. ELT (Extract, Load, Transform) loads raw data directly into a modern data warehouse first, utilizing the warehouse's computing power to perform transformations."
    },
    {
        subject: "DE",
        question: "What is the difference between a Data Warehouse and a Data Lake?",
        answer: "A Data Warehouse stores clean, highly structured relational data optimized for fast analytical queries. A Data Lake stores vast amounts of raw, unstructured, semi-structured, and structured data in its native format."
    },
    {
        subject: "DE",
        question: "What is Apache Spark and how does it achieve high speeds?",
        answer: "Apache Spark is a distributed, open-source data processing engine built to process large datasets. It achieves extreme speeds by performing operations in-memory (RAM) instead of writing intermediate results back to disk."
    },
    {
        subject: "DE",
        question: "What is a Resilient Distributed Dataset (RDD) in Spark?",
        answer: "An RDD is Spark’s fundamental data structure, representing an immutable, fault-tolerant collection of data elements that can be processed in parallel across clusters of machines."
    },
    {
        subject: "DE",
        question: "What is the difference between transformations and actions in Spark?",
        answer: "Transformations are lazy operations that create a new dataset from an existing one (e.g., map, filter) but don't compute results immediately. Actions trigger actual computations and return a value to the driver program (e.g., count, collect)."
    },
    {
        subject: "DE",
        question: "What is Apache Kafka used for?",
        answer: "Apache Kafka is a distributed event streaming platform used to build real-time data pipelines and streaming applications, handling massive volumes of high-throughput messaging via a publish-subscribe model."
    },
    {
        subject: "DE",
        question: "What is the role of a schema registry in data streaming systems?",
        answer: "A schema registry stores a centralized repository of schemas for message structures, ensuring that producers and consumers can adapt to changing data types over time without breaking pipelines."
    },
    {
        subject: "DE",
        question: "What is the purpose of Apache Airflow?",
        answer: "Apache Airflow is a platform used to programmatically author, schedule, and monitor workflows, defining them as Directed Acyclic Graphs (DAGs) using Python code."
    },
    {
        subject: "DE",
        question: "What is a Directed Acyclic Graph (DAG) in workflow orchestration?",
        answer: "A DAG is a collection of all the tasks you want to run, organized in a way that reflects their relationships and dependencies. It is 'directed' because executions follow paths, and 'acyclic' because loops are forbidden."
    },
    {
        subject: "DE",
        question: "What is HDFS and how does it handle fault tolerance?",
        answer: "HDFS (Hadoop Distributed File System) is a distributed file system designed to run on commodity hardware. It handles fault tolerance by automatically breaking large files into blocks and replicating those blocks across multiple nodes."
    },
    {
        subject: "DE",
        question: "What is the difference between OLTP and OLAP database systems?",
        answer: "OLTP (Online Transaction Processing) systems manage transactional data, focusing on fast insert/update actions (e.g., banking apps). OLAP (Online Analytical Processing) systems focus on complex queries and aggregation for historical data analysis."
    },
    {
        subject: "DE",
        question: "What is Data Partitioning and why is it useful?",
        answer: "Data partitioning splits large database tables or file collections into smaller, distinct parts based on keys (e.g., Date, Region), drastically improving query performance by eliminating the need to read irrelevant data blocks."
    },
    {
        subject: "DE",
        question: "What is database indexing, and what is its drawback?",
        answer: "An index speeds up data retrieval operations on a database table by creating lookups. The drawback is that it consumes additional disk storage space and slows down write operations (INSERT, UPDATE, DELETE) because the index must be updated too."
    },
    {
        subject: "DE",
        question: "What is change data capture (CDC)?",
        answer: "CDC is a set of design patterns that determine and track data updates within a source database, automatically streaming those exact adjustments (inserts, deletes) into downstream systems in real time."
    },
    {
        subject: "DE",
        question: "What are Star Schemas and Snowflake Schemas in data modeling?",
        answer: "A Star Schema organizes data into a central fact table surrounded by simplified, denormalized dimension tables. A Snowflake Schema normalizes those surrounding dimension tables into nested sub-dimensions, reducing data redundancy but increasing join complexity."
    },
    {
        subject: "DE",
        question: "What is the difference between structured, semi-structured, and unstructured data?",
        answer: "Structured data follows a strict schema and fits neatly into relational tables (e.g., SQL tables). Semi-structured data contains organizational markers but no rigid layout (e.g., JSON, XML). Unstructured data has no predefined format (e.g., PDFs, videos)."
    },
    {
        subject: "DE",
        question: "What is the difference between horizontal scaling and vertical scaling?",
        answer: "Vertical scaling (scaling up) means adding more power (CPU, RAM) to an existing server machine. Horizontal scaling (scaling out) means adding more hardware instances or nodes into a cluster to share the workload."
    },
    {
        subject: "DE",
        question: "What is columnar data storage, and name a common file format?",
        answer: "Columnar storage organizes data on disk by columns rather than by rows, which is highly efficient for data warehousing because queries only read the columns they request. **Apache Parquet** is a widely used columnar file format."
    },
    {
        subject: "DE",
        question: "What is the concept of idempotency in data pipelines?",
        answer: "Idempotency means that running a data pipeline or function multiple times with the same input data produces the exact same output without duplicating records or creating unintended side effects."
    }
])