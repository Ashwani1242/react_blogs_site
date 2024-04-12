const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <h5>Written by - {blog.author}</h5>
                </div>
            ))}
        </div>
    );
}

export default BlogList;