use('crackGen');

db.questions.insertMany([
    /* ==========================================
       DATA ANALYTICS STACK (1-20)
       ========================================== */
    {
        subject: "DA",
        question: "What is Data Analytics?",
        answer: "Data Analytics is the science of analyzing raw data to find trends, answer questions, extract meaningful insights, and draw conclusions to support informed business decision-making."
    },
    {
        subject: "DA",
        question: "What is the difference between Descriptive, Predictive, and Prescriptive Analytics?",
        answer: "Descriptive analytics explains what has happened in the past. Predictive analytics uses historical data and models to forecast what might happen. Prescriptive analytics recommends specific actions to take based on those predictions."
    },
    {
        subject: "DA",
        question: "What is Data Cleaning (Data Wrangling) and why is it important?",
        answer: "Data cleaning is the process of identifying and correcting corrupted, inaccurate, or incomplete records from a dataset. It is crucial because bad data inputs yield inaccurate analytical conclusions."
    },
    {
        subject: "DA",
        question: "What is the difference between Qualitative and Quantitative Data?",
        answer: "Qualitative data is descriptive and non-numerical, dealing with categories or characteristics (e.g., colors, names). Quantitative data is numerical and measurable, expressing counts or continuous values (e.g., revenue, temperature)."
    },
    {
        subject: "DA",
        question: "What are outliers, and how do you handle them?",
        answer: "Outliers are data points that differ significantly from other observations in a dataset. They can be handled by dropping them (if they represent errors), transforming them, or capping/flooring their values using the Interquartile Range (IQR)."
    },
    {
        subject: "DA",
        question: "What is an A/B test?",
        answer: "An A/B test is a statistical method comparing two versions of a variable (A and B) against a control group to evaluate which version performs better based on user responses or metrics."
    },
    {
        subject: "DA",
        question: "What is the Central Limit Theorem (CLT)?",
        answer: "The CLT states that as a sample size grows larger (typically n >= 30), the sampling distribution of the sample mean approaches a normal distribution, regardless of the shape of the original population distribution."
    },
    {
        subject: "DA",
        question: "What is the difference between Type I and Type II errors?",
        answer: "A Type I error is a false positive—rejecting a true null hypothesis. A Type II error is a false negative—failing to reject a false null hypothesis."
    },
    {
        subject: "DA",
        question: "What is the difference between Correlation and Causation?",
        answer: "Correlation measures the strength and direction of a linear relationship between two variables. Causation implies that a change in one variable is directly responsible for causing a change in the other."
    },
    {
        subject: "DA",
        question: "What is a Joins in SQL, and what are the main types?",
        answer: "A Join combines rows from two or more tables based on a related column. Types include INNER JOIN (matching rows in both), LEFT JOIN (all rows from left, matching from right), RIGHT JOIN (all from right, matching from left), and FULL OUTER JOIN."
    },
    {
        subject: "DA",
        question: "What is the difference between WHERE and HAVING clauses in SQL?",
        answer: "The WHERE clause filters rows individually before any aggregations are computed. The HAVING clause filters grouped records after the GROUP BY clause has executed aggregation functions."
    },
    {
        subject: "DA",
        question: "What are window functions in SQL?",
        answer: "Window functions perform calculations across a set of table rows that are related to the current row, maintaining individual row identities rather than collapsing them like GROUP BY does (e.g., ROW_NUMBER(), RANK())."
    },
    {
        subject: "DA",
        question: "What is the difference between NumPy and Pandas in Python?",
        answer: "NumPy is a foundation library built for multi-dimensional array calculations and numerical operations. Pandas is built on top of NumPy, providing high-level data structures like DataFrames, ideal for structured data analysis."
    },
    {
        subject: "DA",
        question: "What is the difference between loc and iloc methods in Pandas?",
        answer: "The .loc method selects data rows and columns based on their text-based or index labels. The .iloc method selects data entirely by integer-based relative index positions."
    },
    {
        subject: "DA",
        question: "How do you handle missing values in a Pandas DataFrame?",
        answer: "Missing values can be handled by dropping rows/columns containing them using .dropna(), or filling them with specific default values, means, medians, or backfills using .fillna()."
    },
    {
        subject: "DA",
        question: "What is the purpose of Data Visualization?",
        answer: "Data visualization translates complex numerical data and relationships into graphical formats (like bar charts, scatter plots, line graphs) to make patterns and insights instantly understandable."
    },
    {
        subject: "DA",
        question: "What is a KPI?",
        answer: "KPI stands for Key Performance Indicator. It is a quantifiable metric used to evaluate the success of an organization or an employee in meeting explicit performance targets."
    },
    {
        subject: "DA",
        question: "What is the difference between dimensions and measures in BI tools like Tableau or Power BI?",
        answer: "Dimensions are qualitative fields used to slice, group, or categorize data (e.g., Region, Date). Measures are quantitative numeric values that can be mathematically aggregated (e.g., Sales, Profit)."
    },
    {
        subject: "DA",
        question: "What is an overfitted machine learning model?",
        answer: "Overfitting occurs when a statistical model learns the noise and finer details of the training dataset too perfectly, causing it to perform exceptionally well on training data but fail to generalize accurately on new, unseen data."
    },
    {
        subject: "DA",
        question: "What is Normalization vs Standard Scaling?",
        answer: "Normalization rescales feature values to fit strictly between a range of 0 and 1. Standard Scaling centers data around a mean of 0 with a standard deviation of 1, preserving shape while altering magnitude."
    }
])