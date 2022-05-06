import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className="text-start question mt-4">
            <h1 className="question fs-1">Q.1: Difference between Javascript and Nodejs?</h1>
                <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="fs-2 fw-normal text-center" scope="col">Javascript</th>
                        <th className="fs-2 fw-normal text-center" scope="col">Node JS</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr >
                        <td className="fs-4 fw-light" scope="row">JavaScript is a web programming language.</td>
                        <td className="fs-4 fw-light">Node JS is an interpreter and environment for JavaScript.</td>
                      </tr>
                      <tr >
                        <td className="fs-4 fw-light" scope="row">It is used for any client-side activity for a web application.</td>
                        <td className="fs-4 fw-light">It is used for accessing or performing any non-blocking operation of any operating system</td>
                      </tr>
                      <tr >
                        <td className="fs-4 fw-light" scope="row">JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</td>
                        <td className="fs-4 fw-light">Node JS only run in a V8 engine which mainly used by google chrome.</td>
                      </tr>
                      <tr >
                        <td className="fs-4 fw-light" scope="row">It is also called a scripting language.</td>
                        <td className="fs-4 fw-light">It is a cross-platform and opensource Javascript runtime environment.</td>
                      </tr>
                      <tr >
                        <td className="fs-4 fw-light" scope="row">It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
                        <td className="fs-4 fw-light">It is written in C, C++ and Javascript.</td>
                      </tr>
                    </tbody>
                  </table>
            <p className="fs-4 fw-light"></p>
        </div>
        <h1 className='question'>Q2: Why should you use Node JS and when should you use Mongodb?</h1>
        <h4 className='answer mb-4'>Ans: We should use Node JS because it is one of the best JavaScript runtime for backend development. It has been designed to build scalable network applications. Its widely used especially in the U.S. in the start-up kingdom of Silicon Valley. We can use node js for both frontend and backend server side development. The benefit of using node js are open-source NPM repository, scalable systems, good performance, non-blocking, reusable code, time to market etc. So we use node js.
        <br />
        We should use Mongodb when we need high availability of data with automatic, fast and instant data recovery. Mongodb can be a solution for use want to grow big. It reduces our schema migration cost. If the most of our services are cloud-based, mongodb is the best suitable for us. After all we need to identify the project requirements and further goals to use mongodb.
        </h4>
        <div className="text-start question">
            <h1 className="question fs-1">Q.3: Difference between SQL and NoSQL databases?</h1>
                <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="fs-2 fw-normal text-center" scope="col">SQL</th>
                        <th className="fs-2 fw-normal text-center" scope="col">NoSQL</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr >
                        <td className="fs-4 fw-light" scope="row">SQL databases are relational</td>
                        <td className="fs-4 fw-light">NoSQL databases are non-relational.</td>
                      </tr>
                      <tr >
                        <td className="fs-4 fw-light" scope="row">It is structured query language and have a predefined schema.</td>
                        <td className="fs-4 fw-light">NoSQL databases have dynamic schemas for unstructured data.</td>
                      </tr>
                      <tr >
                        <td className="fs-4 fw-light" scope="row">This databases are vertically scalable.</td>
                        <td className="fs-4 fw-light">This databases are horizontally scalable.</td>
                      </tr>
                      <tr >
                        <td className="fs-4 fw-light" scope="row">It is table-based databases.</td>
                        <td className="fs-4 fw-light">It is document, key-value, graph based databases.</td>
                      </tr>
                      <tr >
                        <td className="fs-4 fw-light" scope="row">SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability).</td>
                        <td className="fs-4 fw-light">NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).</td>
                      </tr>
                    </tbody>
                  </table>
            <p className="fs-4 fw-light"></p>
        </div>
        </div>
    );
};

export default Blogs;