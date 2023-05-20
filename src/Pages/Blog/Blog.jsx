const Blog = () => {
  return (
    <div>
        <div className="text-center text-primary space-y-4 py-14">
            <h2 className="font-bold text-5xl">Our Blogs</h2>
            <p className="font-medium">See Our Latest Blogs From The Experts</p>
        </div>
      <div className="my-4 mx-auto">
        <div className="flex flex-col items-start justify-center gap-5 ">
          <div className="bg-primary rounded-md py-5 px-6 h-full font-bold text-white space-y-5">
            <h2 className="text-3xl">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <div className="space-y-4">
              <span className="font-extrabold">Answer:</span>
              <div>
                Access Token: In React JWT, an access token is a JSON Web Token
                that has the data essential for authenticating and authorizing a
                user. It is usually supplied by the server after successful
                authentication and is used to get access to restricted
                resources.
              </div>
              <div>
                Refresh Token: In React JWT, a refresh token is a persistent
                token that is used to request a new access token after the
                current one expires. It typically relates to a users session and
                aids in maintaining their authentication state without
                necessitating repeated logins.
              </div>
              <div>
                According to your applications particular needs and security
                considerations, access tokens and refresh tokens may or may not
                be stored client-side. Here are two such methods:
              </div>
              1. LocalStorage <br />
              2. HTTP-only cookies
            </div>
          </div>
          <div className="bg-primary rounded-md py-5 px-6 h-full font-bold text-white space-y-4">
            <h2 className="text-3xl">
              Comparing between SQL and NoSQL databases.
            </h2>
            <div className="space-y-4">
              <span>Answer:</span>
              <p>
                SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
                different types of database management systems with distinct
                characteristics. Here is a comparison between SQL and NoSQL
                databases:
              </p>
              <table className="table-normal w-3/4 mx-auto ">
                <thead className="bg-white text-primary">
                  <tr>
                    <th>Topics</th>
                    <th>SQL</th>
                    <th>NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-2">
                    <th className="text-sm border-r-2">Scalability:</th>
                    <td className="text-sm border-r-2">
                      In general, SQL databases scale vertically, which means
                      that they increase hardware resources to handle growing
                      workloads. For large-scale applications with significant
                      traffic, scaling might be more difficult and expensive.
                    </td>
                    <td className="text-sm border-r-2">
                      NoSQL databases are made to scale horizontally. By
                      distributing data over several computers, they make it
                      simple to scale by adding more servers to the cluster.
                      NoSQL databases are more effective at managing high
                      concurrency and volume of data.
                    </td>
                  </tr>
                  <tr className="border-2">
                    <th className="text-sm border-r-2">Query Language</th>
                    <td className="text-sm border-r-2">
                      Data definition and manipulation in SQL databases are done
                      using the SQL language. To obtain, insert, update, and
                      delete data, SQL offers a standard and robust set of
                      declarative queries. Due of its considerable
                      expressiveness, SQL can perform intricate joins and
                      aggregations.
                    </td>
                    <td className="text-sm">
                      The query languages used by NoSQL databases vary depending
                      on the data models they support. While some NoSQL
                      databases offer their own query languages, others make use
                      of more straightforward APIs. NoSQL query languages
                      frequently place a greater emphasis on data processing and
                      retrieval within a single document or key-value pair.
                    </td>
                  </tr>
                  <tr className="border-2">
                    <th className="text-sm border-r-2">Uses</th>
                    <td className="text-sm border-r-2">
                      For applications like financial systems, inventory
                      management, and traditional relational data that need
                      complex relationships, structured data, and high data
                      integrity, SQL databases are frequently employed.
                    </td>
                    <td className="text-sm">
                      NoSQL databases perform exceptionally well in situations
                      requiring massive, distributed, and quickly changing data,
                      such as social media, real-time analytics, content
                      management, IoT data, and applications with unpredictable
                      and dynamic data structures.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-primary rounded-md py-5 px-6 h-full font-bold text-white space-y-4">
            <h2 className="text-3xl">What is express js? What is Nest JS?</h2>
            <div className="space-y-4">
              <span>Answer:</span>
              <p>
                Express.js is a widely used Node.js web application framework.
                By providing a collection of powerful features and middleware,
                it offers a straightforward and adaptable solution to create web
                applications and APIs. Express.js is renowned for its
                straightforward layout, which gives programmers more freedom and
                control over how they structure their applications.
              </p>
              <p>
                NestJS is a framework for creating scalable and effective
                server-side applications in Node.js. It offers an opinionated
                design and a set of abstractions to speed up the development
                process and is built on top of Express.js. The modular
                architecture, dependency injection, and usage of TypeScript as
                the main programming language are all practices that NestJS
                adheres to.
              </p>
            </div>
          </div>
          <div className="bg-primary rounded-md py-5 px-6 h-full font-bold text-white space-y-4">
            <h2 className="text-3xl">What is MongoDB aggregate and how does it work?</h2>
            <div className="space-y-4">
              <span>Answer:</span>
              <p>
                To conduct complex data collection operations on collections in
                MongoDB, utilize the aggregate method. It enables you to execute
                different transformations, calculations, and grouping operations
                on data from many documents as well as analyse and analyze that
                data. A variety of steps in a pipeline are used as the parameter
                in the aggregate method. Each phase denotes a certain action or
                modification to be carried out on the collections documents.
                Each stage of the pipeline is run in turn, with the result of
                one stage acting as the input for the one after that.
              </p>
              <p>The aggregate method provides a cursor, which can be iterated to retrieve the resulting documents after all pipeline stages have been applied. The aggregated results can also be subjected to further processes, such as pagination or additional data processing.</p>
              <p>In conclusion, MongoDBs aggregate method offers strong capabilities for data aggregation and analysis, enabling you to draw valuable conclusions from your data by utilizing the expressive and flexible aggregation pipeline.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
