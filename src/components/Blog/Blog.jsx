import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col">
          <div className="custom-bg p-4 mb-4" style={{ border: '2px solid #ccc', borderRadius: '5px' }}>
            <h4 className="fw-bold">Q1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
            <p><span className='fw-bold'>Ans:</span> An access token is a security credential that is used to authenticate and authorize a user in a system. It is typically a string of characters that is issued to a user after they successfully authenticate with their credentials. Access tokens are usually short-lived and contain information about the user and their permissions.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="custom-bg p-4 mb-4" style={{ border: '2px solid #ccc', borderRadius: '5px' }}>
            <h4 className="fw-bold">Q2: Compare SQL and NoSQL databases?</h4>
            <p><span className='fw-bold'>Ans:</span> SQL databases (relational databases) use structured query language (SQL) for defining and manipulating the data. They have a predefined schema and are suitable for complex data relationships and transactions.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="custom-bg p-4 mb-4" style={{ border: '2px solid #ccc', borderRadius: '5px' }}>
            <h4 className="fw-bold">Q3: What is express js? What is Nest JS?</h4>
            <p><span className='fw-bold'>Ans:</span> Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js offers a set of features and middleware that help with routing, handling HTTP requests and responses, managing sessions, and more. It is known for its minimalist design and ease of use, making it a popular choice for building web applications in Node.js. 
            </p>
            <p>Nest.js is a progressive, opinionated framework for building efficient and scalable server-side applications with Node.js. It uses modern JavaScript or TypeScript and takes advantage of features from both object-oriented programming and functional programming paradigms. Nest.js provides a modular and organized structure for building applications, leveraging decorators, dependency injection, and powerful abstractions to simplify development. It is built on top of Express.js and adds additional features such as enhanced dependency injection, module system, and support for other libraries like TypeORM and GraphQL.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="custom-bg p-4 mb-4" style={{ border: '2px solid #ccc', borderRadius: '5px' }}>
          <h4 className="fw-bold">Q3: What is MongoDB aggregate and how does it work?</h4>
            <p><span className='fw-bold'>Ans:</span> In MongoDB, the aggregate framework is used for processing and transforming data within the database. It allows for complex data manipulations, aggregations, and analytics operations. The aggregate framework uses a pipeline-based approach, where multiple stages are chained together to perform various operations on the input data. Each stage in the pipeline can perform filtering, grouping, sorting, projecting, and other operations on the documents. The output of each stage becomes the input for the next stage in the pipeline, allowing for a flexible and powerful data processing mechanism in MongoDB.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
