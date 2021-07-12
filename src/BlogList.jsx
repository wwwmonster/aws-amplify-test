

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">

            {/* {console.log("==blogs===" + blogs)} */}

            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>


                    <p>Written by: {blog.id}</p>


                </div>
            ))}


        </div>
    );
}

export default BlogList;