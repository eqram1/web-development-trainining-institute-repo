import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Q.1 Difference between SQL & NOSQL?
                ANSWER:- The main difference between SQL and NoSQL is that they are known as relational and non-relational database structures, respectively, that are used in different modes for implementing and manipulating data.
            </h2>
            <h3>
                Q.2 What is JWT and how does it works?
                ANSWER:- JSON Web Token.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64.
            </h3>
            <h1>
                Q.3 What is the difference between js & nodejs?
                ANSWER:- JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all.
            </h1>

            <h4>
                Q.4 How does nodejs handle multiple requests at the same time?
                ANSWER:- Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue.
            </h4>
        </div>
    );
};

export default Blog;