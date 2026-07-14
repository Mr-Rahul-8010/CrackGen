use('crackGen');

db.questions.insertMany([
    {
        subject: "CSS",
        question: "What is the CSS Box Model?",
        answer: "The CSS Box Model is a container wrapping every HTML element, consisting of four layers from inside out: Content (text/images), Padding (space around content), Border (edge line), and Margin (space outside the border)."
    },
    {
        subject: "CSS",
        question: "What is the difference between absolute, relative, fixed, and sticky positioning?",
        answer: "Relative positions an element relative to its normal position. Absolute positions it relative to its nearest positioned ancestor. Fixed positions it relative to the browser window. Sticky toggles between relative and fixed depending on scroll position."
    },
    {
        subject: "CSS",
        question: "What is Flexbox?",
        answer: "Flexbox (Flexible Box Layout) is a one-dimensional layout model designed for laying out items in a row or a column, optimizing space distribution and alignment between items inside a container."
    },
    {
        subject: "CSS",
        question: "What is CSS Grid?",
        answer: "CSS Grid is a powerful two-dimensional grid-based layout system that allows developers to align content easily into complex rows and columns simultaneously."
    },
    {
        subject: "CSS",
        question: "What is CSS Specificity and how is it calculated?",
        answer: "Specificity determines which CSS rule is applied by the browser when multiple rules target the same element. It is calculated based on weights: Inline styles (highest) > IDs > Classes/Attributes/Pseudo-classes > Elements/Pseudo-elements (lowest)."
    },
    {
        subject: "CSS",
        question: "What is the difference between display: none and visibility: hidden?",
        answer: "display: none hides the element and removes it completely from the page layout structure, occupying zero space. visibility: hidden hides the element but leaves its blank structural space intact in the layout."
    },
    {
        subject: "CSS",
        question: "What are Media Queries?",
        answer: "Media Queries are a core feature of responsive web design that allow developers to apply different CSS styles based on device characteristics, such as screen width, height, resolution, or orientation."
    },
    {
        subject: "CSS",
        question: "What is the difference between 'em' and 'rem' units?",
        answer: "An 'em' unit is relative to the font-size of its immediate parent element. A 'rem' unit is relative exclusively to the root font-size of the entire HTML document (usually 16px by default)."
    },
    {
        subject: "CSS",
        question: "What does the box-sizing: border-box property do?",
        answer: "border-box alters the Box Model calculation so that the specified width and height properties include the element's padding and borders, preventing layout breakages when padding is added."
    },
    {
        subject: "CSS",
        question: "What are pseudo-classes and pseudo-elements?",
        answer: "A pseudo-class targets an element's specific state (e.g., :hover, :focus). A pseudo-element matches a specific virtual part of an element (e.g., ::before, ::after) to style content without altering HTML structure."
    }
])