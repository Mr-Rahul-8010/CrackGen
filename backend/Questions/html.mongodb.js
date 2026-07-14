use('crackGen');

db.questions.insertMany([
    {
        subject: "HTML",
        question: "What is Semantic HTML?",
        answer: "Semantic HTML is the practice of using HTML tags that inherently describe the meaning and purpose of their content (such as <article>, <header>, <footer>, <nav>) rather than just for presentation or structure (<div, <span>)."
    },
    {
        subject: "HTML",
        question: "What is the difference between block-level and inline elements?",
        answer: "Block-level elements (e.g., <div>, <p>) always start on a new line and stretch to take up the full available width. Inline elements (e.g., <span>, <a>) do not start on a new line and only take up as much width as necessary."
    },
    {
        subject: "HTML",
        question: "What is the purpose of the 'alt' attribute on an <img> tag?",
        answer: "The 'alt' attribute provides an alternative text description of an image if it fails to load, and is critically important for accessibility, allowing screen readers to describe the image to visually impaired users."
    },
    {
        subject: "HTML",
        question: "What is the purpose of data- attributes?",
        answer: "Data attributes (data-*) allow developers to store custom, private data directly inside standard HTML elements, which can later be easily accessed and manipulated using JavaScript."
    },
    {
        subject: "HTML",
        question: "What is the difference between a <ul> and an <ol> tag?",
        answer: "A <ul> tag creates an unordered list where list items are marked with bullets. An <ol> tag creates an ordered list where items are sequentially numbered or lettered."
    },
    {
        subject: "HTML",
        question: "What does the 'target=\"_blank\"' attribute do on an anchor tag?",
        answer: "It instructs the browser to open the linked URL or document in a new browser tab or window, rather than in the current tab."
    },
    {
        subject: "HTML",
        question: "What is the purpose of the DOCTYPE declaration?",
        answer: "<!DOCTYPE html> is an instruction to the web browser about the version of HTML the page is written in, forcing modern browsers to render the document in 'Standards Mode' rather than 'Quirks Mode'."
    },
    {
        subject: "HTML",
        question: "What is the difference between local storage, session storage, and cookies?",
        answer: "Local storage persists indefinitely until cleared. Session storage lasts only as long as the browser tab remains open. Cookies are small data pieces sent back and forth with HTTP network requests, usually tracking session states."
    },
    {
        subject: "HTML",
        question: "What is an iframe used for?",
        answer: "An inline frame (<iframe>) is an HTML element used to embed and display another external document or webpage directly inside the current HTML page."
    },
    {
        subject: "HTML",
        question: "What is the purpose of the <head> tag?",
        answer: "The <head> element is a container for metadata about the document (such as page title, character set encoding, external stylesheet links, and script references) and is not displayed to visitors."
    }
])