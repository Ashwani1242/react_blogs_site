const BlogList = ({ blogs, title, handleDelete }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <div>
                        <h1>{blog.title}</h1>
                        <h5>Written by - {blog.author}</h5>
                    </div>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;