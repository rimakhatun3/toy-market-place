import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5 space-y-3'>
<h1 className='text-lg font-semibold '>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>

<p>Token: A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources</p>

<h1 className='text-lg font-semibold '>2.Compare SQL and NoSQL databases?</h1>

<p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>

<h1 className='text-lg font-semibold '>3.What is express js? What is Nest JS ?</h1>
<p>
Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.</p>
<p>Nest:Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.</p>

<h1 className='text-lg font-semibold '>4. What is MongoDB aggregate and how does it work ?</h1>

<p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>

        </div>
    );
};

export default Blogs;