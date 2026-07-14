use('crackGen');

db.questions.insertMany([
    {
        subject: "ReactJS",
        question: "What is ReactJS?",
        answer: "React is an open-source, component-based front-end JavaScript library used for building user interfaces, primarily for single-page applications, maintained by Meta."
    },
    {
        subject: "ReactJS",
        question: "What is the Virtual DOM and how does it work?",
        answer: "The Virtual DOM is a lightweight, in-memory representation of the real DOM. When a component's state changes, React updates the Virtual DOM, compares it with a previous snapshot (diffing), and efficiently updates only the changed nodes in the real DOM (reconciliation)."
    },
    {
        subject: "ReactJS",
        question: "What is the difference between Functional and Class components?",
        answer: "Class components use ES6 classes, manage state via 'this.state', and rely on lifecycle methods. Functional components are plain JavaScript functions that manage state and side effects using Hooks, making them the modern standard."
    },
    {
        subject: "ReactJS",
        question: "What is JSX?",
        answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like structure directly within JavaScript code, which is later compiled into regular React.createElement() calls."
    },
    {
        subject: "ReactJS",
        question: "What is the difference between props and state?",
        answer: "Props (short for properties) are read-only configuration objects passed down from a parent component to a child component. State is a local, mutable data structure managed entirely within the component itself."
    },
    {
        subject: "ReactJS",
        question: "What are React Hooks?",
        answer: "Hooks are functions introduced in React 16.8 that allow functional components to hook into React state and lifecycle features without writing a class (e.g., useState, useEffect, useContext)."
    },
    {
        subject: "ReactJS",
        question: "Explain the useEffect hook and its dependency array.",
        answer: "useEffect performs side effects in functional components. If the dependency array is omitted, it runs on every render; if empty ([]), it runs once after mounting; if it contains variables ([prop, state]), it runs only when those variables change."
    },
    {
        subject: "ReactJS",
        question: "Why do we need keys in React lists?",
        answer: "Keys provide a stable identity to elements in a list. They help React's diffing algorithm identify which items have changed, been added, or been removed, ensuring optimal rendering performance and state preservation."
    },
    {
        subject: "ReactJS",
        question: "What is Prop Drilling and how can you avoid it?",
        answer: "Prop drilling is the process of passing data down through multiple layers of nested components that do not need the data themselves. It can be avoided using React Context API, custom hooks, or state management libraries like Redux."
    },
    {
        subject: "ReactJS",
        question: "What is the Context API?",
        answer: "The Context API is a built-in feature in React that allows you to share global state, data, or functions across the component tree without manually passing props down through every level."
    },
    {
        subject: "ReactJS",
        question: "What is the difference between useMemo and useCallback?",
        answer: "useMemo memoizes the computed *result* of a function to prevent expensive recalculations on every render. useCallback memoizes the *function instance itself* to prevent unnecessary re-renders of child components that rely on reference equality."
    },
    {
        subject: "ReactJS",
        question: "What are controlled and uncontrolled components?",
        answer: "A controlled component has its form data handled by the React component state. An uncontrolled component stores form data in the DOM itself, accessed using React Refs."
    },
    {
        subject: "ReactJS",
        question: "What is the purpose of React.fragment?",
        answer: "React.fragment allows you to group a list of children elements without adding extra nodes (like wrapper divs) to the actual DOM, keeping the HTML structure clean and semantic."
    },
    {
        subject: "ReactJS",
        question: "What are React Refs and when should you use them?",
        answer: "Refs provide a way to access DOM nodes or React elements directly. They should be used for imperative tasks like managing focus, text selection, triggering animations, or integrating with third-party DOM libraries."
    },
    {
        subject: "ReactJS",
        question: "What are Higher-Order Components (HOC)?",
        answer: "A Higher-Order Component is an advanced pattern in React where a function takes a component as an argument and returns a new, enhanced component, enabling code and logic reuse."
    },
    {
        subject: "ReactJS",
        question: "What is React.memo()?",
        answer: "React.memo is a higher-order component used for performance optimization. It shallowly compares the component's props and skips re-rendering if the props have not changed."
    },
    {
        subject: "ReactJS",
        question: "What are StrictMode and its benefits?",
        answer: "StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, such as identifying unsafe lifecycles, legacy API usage, and unexpected side effects."
    },
    {
        subject: "ReactJS",
        question: "What is code splitting and how do you achieve it in React?",
        answer: "Code splitting is a technique that breaks down a large JavaScript bundle into smaller chunks loaded on demand. In React, it is achieved using dynamic imports along with React.lazy and Suspense."
    },
    {
        subject: "ReactJS",
        question: "What is Redux and how does it relate to React?",
        answer: "Redux is a predictable state container for JavaScript apps. It manages global application state in a single centralized 'store' using actions and reducers, and can be integrated with React via the React-Redux library."
    },
    {
        subject: "ReactJS",
        question: "What are custom hooks in React?",
        answer: "A custom hook is a JavaScript function whose name starts with 'use' and that can call other hooks. They allow you to extract and share reusable stateful logic between different functional components."
    }
])