import React from "react";
import { useLocation } from "react-router-dom";
import { changeTitle } from "../utils/dynamicTitle";

const Blog = () => {
  // title Change
  const { pathname } = useLocation();
  changeTitle(pathname);

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className="border-b-4 border-[#56BC97]">Blog Section</span></h2>
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h3>
            <p className="text-gray-700">
              An access token is a short-lived credential used to access
              protected resources on behalf of a user.
              <br />
              A refresh token is a long-lived token used to obtain a new access
              token when the current one expires.
              <br />
              Access tokens are typically sent with API requests for
              authentication and authorization.
              <br />
              Access tokens can be stored in browser storage mechanisms like
              localStorage or sessionStorage.
              <br />
              Refresh tokens should be stored in a more secure manner, such as
              an HTTP-only cookie, to mitigate the risk of compromise.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">
            Compare SQL and NoSQL databases?
            </h3>
            <p className="text-gray-700">
            SQL databases have structured tables with predefined schemas, while NoSQL databases have flexible or schema-less designs.<br/>
SQL databases provide strong consistency, while NoSQL databases may offer eventual consistency for scalability.<br/>
SQL databases use SQL queries, while NoSQL databases use query mechanisms specific to their data models.<br/>
SQL databases are suitable for complex relationships and structured data, while NoSQL databases excel in handling unstructured data and scalability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">
            What is Nest JS?
            </h3>
            <p className="text-gray-700">
            NestJS is a TypeScript-based web application framework for building scalable and maintainable server-side applications. It provides a structured architecture, leveraging decorators and dependency injection inspired by Angular. NestJS offers a powerful CLI, middleware support, and seamless integration with databases. It aims to enhance code organization, testability, and productivity in developing server-side applications.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">
            What is MongoDB aggregate and how does it work?
            </h3>
            <p className="text-gray-700">
            MongoDB's aggregate method is used to perform advanced data processing and transformation operations on collections. It uses a pipeline of stages, where each stage represents a specific operation to be applied to the documents. The pipeline operators define the operations, such as filtering, grouping, sorting, and calculating new fields. The result is a cursor that can be iterated to access the aggregated data. The aggregation framework allows for complex data manipulations and analysis within the database itself, reducing round trips between the application and the database server.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
