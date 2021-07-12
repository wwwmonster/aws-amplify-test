

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {/* {console.log("==blogs===" + blogs)} */}

            {blogs.map((blog) => (
                <div>

                    <h2>{blog.age}</h2>
                    <p>Written by: {blog.name}</p>


                </div>
            ))}


        </div>
    );
}

export default BlogList;