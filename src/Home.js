import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const { data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
   
    // const handleDelete = (id) => {
    //     const newBlogs = data.filter(blog => blog.id !== id)
    //     setData(newBlogs)
    // }
    

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All The Fuvking Blogs!" /*handleDelete={handleDelete}*/ />}
        </div>
    );
}

export default Home;





