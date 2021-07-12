import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import useFetch from './useFetch';
import BlogList from "./BlogList";

function App() {

  const url1 = "http://localhost:8000/blogs/";
  const url2 = "https://jsonplaceholder.typicode.com/todos/";
  const url3 = "http://badbook-env-1.eba-en3274ue.us-east-2.elasticbeanstalk.com/getuser";
  const [data, setData] = useState(null);

  const { data: blogs, isPending, errMsg } = useFetch(url2);

  console.log("======blogs=======");
  console.log(blogs);
  console.log("=====blogs end ========");



  return (
    <div className="App">

      {blogs &&
        <BlogList blogs={blogs} title="All Blogs!" />
      }


      {/* 
      {(blogs !== null) && blogs.map((blog) => (
        <div c>

          <h2>{blog.name}</h2>
          <p>Written by: {blog.age}</p>

        </div>
      ))} */}
      {/* {blogs.map((blog) => (
        <div c>

          <h2>{blog.name}</h2>
          <p>Written by: {blog.age}</p>

        </div>
      ))} */}
    </div>
  );
}

export default App;
