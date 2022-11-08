import React from 'react';

const Blogs = () => {
    return (
        <div className='md:w-5/6 mx-auto space-y-5'>
            <h2 className='text-4xl font-bold text-center py-5'>Blogs For Power User</h2>
            {/* card1 */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className='avatar '>
                    <figure className='w-96'><img className='h-full' src="https://www.cronj.com/blog/wp-content/uploads/Artboard-3.png" alt="Album" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <p>The five critical differences between SQL vs NoSQL are:</p>
                    <ol>
                        <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                        <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </ol>

                </div>
            </div>
            {/* card2 */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className='avatar'>
                    <figure className='w-96 '><img className=' h-full' src="https://blog.openreplay.com/images/jwt-authentication-best-practices/images/hero.jpg" alt="Album" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">What is JWT? How it Work?</h2>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>

                </div>
            </div>
            {/* card3 */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className='avatar'>
                    <figure className='w-96'><img className='thumbnail ' src="https://www.javaassignmenthelp.com/blog/wp-content/uploads/2022/01/javascript-vs-nodejs.webp" alt="Album" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Difference between JavaScript and Node.js</h2>
                    <p>The  differences between JavaScript and Node.js:</p>
                    <ol>
                        <li>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.</li>
                        <li>JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.</li>
                        <li>JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.</li>
                        <li>JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development</li>
                        <li>JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.</li>

                    </ol>

                </div>
            </div>
            {/* card4 */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className='avatar'>
                    <figure className='w-96'><img className='thumbnail' src="https://tsh.io/wp-content/uploads/2019/09/concurrency-nodejs_.png" alt="Album" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">How does NodeJs Handle multiple request at the same time?</h2>
                    <p>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                        NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.</p>


                </div>
            </div>
        </div>
    );
};

export default Blogs;